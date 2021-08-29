const Users = require('../models/').users;
const jwt = require('jsonwebtoken');

module.exports ={
  signIn: async (req, res) => {
    //*POST / endpoint: http://localhost:4000/user/signin
    //TODO: 로그인기능 구현 + 토큰생성
    //-> DB에서 id, pw 일치하는 유저 있는지 찾아서
    //-> 있으면 access token 주면서 return / 없으면 401

    const userData = await Users.findOne({
      where: {
        user_id: req.body.userId,
        password: req.body.password
      }
    });

    if(!userData) { //해당 ID의 유저가 존재하지 않는 경우
      return res.status(401).send('Invalid user or wrong password');
    }
    else {
      //해당 ID의 유저가 존재하는 경우
      //-> token 생성
      //-> access, refresh 둘 다 헤더 authorization에 저장

      const { user_id, animal_name, phone_number, createdAt, updatedAt } = userData;
      const tokenPayload = { user_id, animal_name, phone_number, createdAt, updatedAt };

      const accessToken = jwt.sign(tokenPayload, 'accessKey', { expiresIn: '1h' });
      const refreshToken = jwt.sign(tokenPayload, 'refreshKey', { expiresIn: '14d' });
      
      //req.headers.authorization = `baerer ${refreshToken}`
      //userData.update({ refresh_token: refreshToken });

      return res.status(200)
        .cookie("accessToken", accessToken) //쿠키 옵션 줘야됨 httpOnly, secure
        .cookie("refreshToken", refreshToken)
        .send({
          "animalName" : userData.animal_name,
          "message" : "ok"
        });
    }
  },

  signUp: async (req, res) => {
    //*POST / endpoint: http://localhost:4000/user/signup
    //TODO: 회원가입 기능 구현

    const isExist = await Users.findOne({
      where: { user_id : req.body.userId }
    }); //존재하는지 먼저 검색

    console.log(isExist)

    if(isExist) return res.status(409).send("duplicate id or email"); //이미 존재할 경우
    else {
      Users.create({ //존재하지 않을 경우 해당 레코드 생성
        user_id : req.body.userId,
        password : req.body.password,
        email: req.body.email,
        phone_number : req.body.phone_number
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
    const reqAccessToken = req.headers.cookie.split(';')[0].split('=')[1];
    const reqRefreshToken = req.headers.cookie.split(';')[1].split('=')[1];

    jwt.verify(reqAccessToken, 'accessKey', async (err, data) => {
      if(err) { //만료된 토큰일 경우
        //1. refresh가 유효한지 검증
        jwt.verify(reqRefreshToken, 'refreshKey', async (err, data) => {
          if(err) {
            //1-1. refresh까지 만료된 경우
            return res.status(401).send("invalid user token");
          }
          else {
            //1-2. refresh는 아직 유효하고 access만 만료된 경우
            //-> refresh 디코딩해서 유효한 데이터인지 확인하고 유효하면 로그아웃
            const user = await Users.findOne({ where: { user_id : data.user_id } });

            if(!user) return res.status(401).send("invalid user token");
            else {
              return res.status(200)
                .clearCookie('accessToken')
                .clearCookie('refreshToken')
                .send("successfully signout");
            }
          }
        })
      }
      else {
        //2. access가 유효할 경우

        const user = await Users.findOne({ where: { user_id : data.user_id } });

        if(!user) return res.status(401).send("invalid user token");
        else {
          return res.status(200)
                .clearCookie('accessToken')
                .clearCookie('refreshToken')
                .send("successfully signout");
        }
      }
    });
  },

  userDelete: async (req, res) => {
    //*DELETE / endpoint http://localhost:4000/user/
    //TODO: 회원 탈퇴 기능 구현

    //현재 로그인 되어있는 유저의 정보를 삭제
    //destroy method 사용
    //-> 현재 로그인 되어있는 유저를 DB에서 찾은 뒤 그 유저를 destory

    //로그인 되어있는 유저 먼저 확인
    //이거 토큰 검증하는 과정 템플릿으로 빼놔도 될듯

    const reqAccessToken = req.headers.cookie.split(';')[0].split('=')[1];
    const reqRefreshToken = req.headers.cookie.split(';')[1].split('=')[1];

    jwt.verify(reqAccessToken, 'accessKey', async (err, data) => {
      if(err) { //만료된 토큰일 경우
        //1. refresh가 유효한지 검증
        jwt.verify(reqRefreshToken, 'refreshKey', async (err, data) => {
          if(err) {
            //1-1. refresh까지 만료된 경우
            return res.status(401).send("invalid token");
          }
          else {
            //1-2. refresh는 아직 유효하고 access만 만료된 경우
            const user = await Users.findOne({ where: { user_id : data.user_id } });

            if(!user) return res.status(401).send("invalid token");
            else {
              //유저가 존재 -> 해당 유저 정보 삭제
              user.destory();
              return res.status(200).send("ok");
            }
          }
        })
      }
      else {
        //2. access가 유효할 경우

        const user = await Users.findOne({ where: { user_id : data.user_id } });

        if(!user) return res.status(401).send("invalid user token");
        else {
          user.destory();
          return res.status(200).send("ok");
        }
      }
    });

    
    return res.send("userDelete");
  },

  MBTI_signUp: async (req, res) => {
    //*POST / endpoint http://localhost:4000/user/animal
    //TODO: 현재 가입중인 유저의 MBTI 정보 추가

    //req.body에 넘겨받은 아이디의 유저 탐색
    //해당 유저의 MBTI 정보 추가

    const user = await Users.findOne({ where: { user_id : req.body.uesr_id } });

    if(!user) return res.status(401).send("invalid user id");
    else {
      user.update({ animal_name : req.body.animal });

      return res.status(201).send("ok");
    }
  },

  userIdCheck: async (req, res) => {
    //*POST / endpoint http://localhost:4000/user/userid
    //TODO: 가입 중 아이디 중복체크

    //req.body로 넘겨받은 아이디가 user 테이블에 있는지 findOne으로 확인
    //있으면 409, 없으면 200

    const user = await Users.findOne({ where: { user_id : req.body.user_id } });

    if(user) return res.status(409).send("duplicated userid");
    else return res.status(200).send("vaild user_id");
  }
}