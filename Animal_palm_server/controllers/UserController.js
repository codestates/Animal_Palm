const Users = require('../models/').users;
const Posts = require('../models/').posts;
const Comments = require('../models/').comments;
const jwt = require('jsonwebtoken');

const { verifyToken, decodeToken } = require('./VerifyToken');
const COOKIEOPTION = {
  httpOnly: true,
  sameSite: 'None'
}

module.exports ={
  signIn: async (req, res) => {
    //*POST / endpoint: http://localhost:4000/user/signin
    //TODO: 로그인기능 구현 + 토큰생성
    //-> DB에서 id, pw 일치하는 유저 있는지 찾아서
    //-> 있으면 access token 주면서 return / 없으면 401

    const userData = await Users.findOne({
      where: {
        userId: req.body.userId,
        password: req.body.password
      }
    });

    if(!userData) { //해당 ID의 유저가 존재하지 않는 경우
      return res.status(401).send('Invalid user or wrong password');
    }
    else {
      //해당 ID의 유저가 존재하는 경우
      //-> token 생성
      //-> access, refresh 둘 다 쿠키에 저장
      const ANIMAL = [null, '여우', '곰', '코뿔소', '고양이',
                      '호랑이', '독수리', '해파리', '돼지',
                      '말', '기린', '코끼리', '고래',
                      '사자', '달팽이', '강아지', '캥거루'];

      //token으로는 현재 접속중인 유저가 누구인지만 식별
      const tokenPayload = {
        id: userData.id
      }

      const accessToken = jwt.sign(tokenPayload, process.env.ACCESS_SECRET, { expiresIn: '1h' });
      const refreshToken = jwt.sign(tokenPayload, process.env.REFRESH_SECRET, { expiresIn: '14d' });

      return res.status(200)
        .cookie("accessToken", accessToken, COOKIEOPTION)
        .cookie("refreshToken", refreshToken, COOKIEOPTION)
        .send({
          "animalId" : userData.animalId,
          "animalName" : ANIMAL[userData.animalId],
          "message" : "ok"
        });
    }
  },

  signUp: async (req, res) => {
    //*POST / endpoint: http://localhost:4000/user/signup
    //TODO: 회원가입 기능 구현

    const isExist = await Users.findOne({
      where: { userId : req.body.userId }
    }); //존재하는지 먼저 검색

    if(isExist) return res.status(409).send("duplicate id or email"); //이미 존재할 경우
    else {
      Users.create({ //존재하지 않을 경우 해당 레코드 생성
        userId : req.body.userId,
        password : req.body.password,
        email: req.body.email,
        phoneNumber : req.body.phoneNumber
      });

      return res.status(201).send("ok");
    }
  },

  signOut: async (req, res) => {
    //*PUT / endpoint http://localhost:4000/user/signout
    //TODO: 로그아웃 기능 구현
    //현재 가지고 있는 token이 유효한 token일 경우에만 로그아웃 진행
    //  유효 여부 판별: 디코딩한 데이터가 DB에 포함되어 있는지 확인
    //  DB에 포함되어있지 않은 data -> 401

    const [accessToken, refreshToken] = await verifyToken(req);

    if(accessToken) {
      //유효한 토큰일 경우 -> 해당 유저가 존재하는지 확인
      const user = await decodeToken(accessToken);

      if(!user) return res.status(401).send("invalid user token");
      else return res.status(200)
              .clearCookie('accessToken')
              .clearCookie('refreshToken')
              .send('successfully signout');
    }
    else return res.status(401).send("invalid user token");
  },

  userDelete: async (req, res) => {
    //*DELETE / endpoint http://localhost:4000/user/userDelete
    //TODO: 회원 탈퇴 기능 구현
    //현재 로그인 되어있는 유저의 정보를 삭제
    //destroy method 사용
    //-> 현재 로그인 되어있는 유저를 DB에서 찾은 뒤 그 유저를 destory

    const [accessToken, refreshToken] = await verifyToken(req);

    if(accessToken) {
      //유효한 토큰일 경우 -> 해당 유저가 존재하는지 확인
      const user = await decodeToken(accessToken);

      if(!user) return res.status(401).send("invalid token");
      else {
        const userComment = await Comments.findAll({ where : { userId : user.id } });
        const userPost = await Posts.findAll({ where : { userId : user.id } });
        userComment.forEach((comment) => { comment.destroy() });
        userPost.forEach((post) => { post.destroy(); });
        user.destroy();
        
        res.status(200)
          .clearCookie('accessToken')
          .clearCookie('refreshToken')
          .send("ok");
      }
    }
    else return res.status(401).send("invalid token");
  },

  MBTI_signUp: async (req, res) => {
    //*POST / endpoint http://localhost:4000/user/animal
    //TODO: 현재 가입중인 유저의 MBTI 정보 추가
    //req.body에 넘겨받은 아이디의 유저 탐색
    //해당 유저의 MBTI 정보 추가

    const user = await Users.findOne({ where: { userId : req.body.userId } });

    if(!user) return res.status(401).send("invalid user ID");
    else {
      user.update({ animalId : req.body.animalId });

      return res.status(200).send("ok");
    }
  },

  userIdCheck: async (req, res) => {
    //*POST / endpoint http://localhost:4000/user/userid
    //TODO: 가입 중 아이디 중복체크
    //req.body로 넘겨받은 아이디가 user 테이블에 있는지 findOne으로 확인
    //있으면 409, 없으면 200

    const user = await Users.findOne({ where: { userId : req.body.userId } });

    if(user) return res.status(409).send("duplicated userid");
    else return res.status(200).send("vaild user_id");
  }
}