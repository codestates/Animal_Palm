const Comments = require('../models/').comments;
const Posts = require('../models/').posts;
const Sequelize = require('sequelize');

const { checkAnimal } = require('./check/');
const { verifyToken, decodeToken } = require('./VerifyToken');
const COOKIEOPTION = {
  httpOnly: true,
  sameSite: 'None'
}

module.exports = {
  update: async (req, res) => {
    //*PATCH / endpoint http://localhost:4000/mypage/info
    //TODO: 유저 정보 수정
    //req.body에 담긴 수정내용만 현재 유저 정보(DB에서 읽어옴)에 update
    //-> sequelize method중에 update method가 있음 이거 쓰면 됨!

    //업데이트 된 데이터 돌려줄 필요 X
    //비밀번호도 수정할 수 있으니까 body에 hashing된 비밀번호까지 받아도 되지 않을까?
    //hashing은 advanced에서 최우선으로
    
    const [accessToken, refreshToken] = await verifyToken(req);
    if(!accessToken) return res.status(401).send("invalid token");
    else {
      //유효한 토큰일 경우 -> 해당 유저가 존재하는지 확인
      const user = await decodeToken(accessToken);

      if(!user) return res.status(401).send("invalid token");
      else {
        //해당 유저가 존재하면 update
        for(let key in req.body) user.update({ [key] : req.body[key] });

        return res.status(201)
          .cookie('accessToken', accessToken, COOKIEOPTION)
          .cookie('refreshToken', refreshToken, COOKIEOPTION)
          .send("update_data");
      }
    }
  },

  passwordCheck: async (req, res) => {
    //*POST / endpoint http://localhost:4000/mypage/passwd
    //TODO: 회원정보 수정 전 비밀번호 체크
    //클라에서 서버로 현재 입력된 값 전달해준 뒤 (해싱된 비밀번호가 body에 담겨 전달)
    //-> 서버에서 입력받은 값과 현재 토큰에 담긴 유저의 비밀번호를 비교
    //일치하면 응답에 일치한다고 전달 -> 이거 보고 클라에서 회원정보 페이지로 넘어감

    const [accessToken, refreshToken] = await verifyToken(req);
    if(!accessToken) return res.status(401).send("invalid token");
    else {
      const user = await decodeToken(accessToken);

      if(!user) return res.status(401).send("invalid token");
      else {
        //해당 유저가 존재하면 -> body로 받은 password와 비교
        if(user.password === req.body.password) {
          return res.status(200)
            .cookie('accessToken', accessToken, COOKIEOPTION)
            .cookie('refreshToken', refreshToken, COOKIEOPTION)
            .send("correct passwd");
        } 
        else return res.status(202).send('일치하지 않는 경우 응답 내용');
      }
    }
  },

  info: async (req, res) => {
    //*GET / endpoint http://localhost:4000/mypage/info
    //TODO: 유저 정보 가져오기
    //현재 가지고 있는 token으로 유저 확인 (쿠키에 담겨있음)
    //-> 해당 유저의 정보 DB에서 검색
    //-> 정상적으로 검색됐으면 해당 정보 중 필요한 정보만 body에 담아 응답

    const [accessToken , refreshToken] = await verifyToken(req);
    if(!accessToken) return res.status(401).send("invalid token");
    else {
      const user = await decodeToken(accessToken);

      if(!user) return res.status(401).send("invalid token");
      else {
        //해당 유저가 존재하면 -> client에서 필요한 정보만 뽑아서 넘김
        const userInfo = {
          id: user.id,
          user_id: user.userId,
          animal_id: user.animalId,
          email: user.email,
          phone_number: user.phoneNumber
        }

        return res.status(200)
          .cookie('accessToken', accessToken, COOKIEOPTION)
          .cookie('refreshToken', refreshToken, COOKIEOPTION)
          .send({
            "message" : "ok",
            "data" : userInfo
          })
      }
    }
  },

  myPageComment: async (req, res) => {
    //*GET / endpoint http://localhost:4000/mypage/comment
    //TODO: 현재 유저가 작성한 댓글 가져오기
    //현재 가지고 있는 token으로 유저 확인
    //-> 해당 유저의 ID로 comment 테이블에서 검색
    //findAll로 전부 찾아서 -> client에서 필요한 형태로 배열에 담아 응답

    const [accessToken, refreshToken] = await verifyToken(req);
    if(!accessToken) return res.status(401).send("invalid token");
    else {
      const user = await decodeToken(accessToken);

      if(!user) return res.status(401).send("invalid token");
      else {
        //현재 토큰에 담긴 유저가 존재할 경우
        const comments = await Comments.findAll({
          include: [
            {
              model: Posts,
              attributes: ['animalId']
            }
          ],
          where: { userId : user.id }
        })
        //comments가 없을 수도 있음 -> 댓글을 안 단 경우
        //-> 이 경우 빈 배열로 리턴됨

        const userComments = comments.map((comment) => {
          const { id, postId, content, userId, createdAt } = comment;
          return { id, postId, content, userId, createdAt, animalId: comment.post.animalId };
        })

        return res.status(200)
        .cookie('accessToken', accessToken, COOKIEOPTION)
        .cookie('refreshToken', refreshToken, COOKIEOPTION)
        .send({
          "message" : "ok",
          "data" : userComments
        });
      }
    }
  },

  myPagePost: async (req, res) => {
    //*GET / endpoint http://localhost:4000/mypage/content
    //TODO: 현재 유저가 작성한 글 가져오기
    //현재 가지고 있는 token으로 유저 확인
    //해당 유저의 ID로 post 테이블에서 검색
    //findAll로 전부 찾아서 -> client에서 필요한 형태로 배열에 담아 응답

    const [accessToken, refreshToken] = await verifyToken(req);
    if(!accessToken) return res.status(401).send("invalid token");
    else {
      const user = await decodeToken(accessToken);

      if(!user) return res.status(401).send("invalid token");
      else {
        //현재 토큰에 담긴 유저가 존재할 경우
        const posts = await Posts.findAll({ where: { userId : user.id } });
        //posts가 없을 경우도 있음 -> 글을 안 쓴 경우
        //-> 이 경우 빈 배열로 리턴

        const userPosts = posts.map((post) => {
          const { id, animalId, title, userId, createdAt } = post;
          return { id, animalId, title, userId, createdAt };
        })

        return res.status(200)
        .cookie('accessToken', accessToken, { httpOnly: true })
        .cookie('refreshToken', refreshToken, { httpOnly: true })
        .send({
          "message" : "ok",
          "data" : userPosts
        })
      }
    }
  },

  getRandomPost: async (req, res) => {
    //*GET / endpoint: http://localhost:4000/main
    //TODO: 랜덤으로 게시글 5개 가져오기

    const randomPosts = await Posts.findAll({
      order: Sequelize.literal('rand()'),
      limit: 4
    });

    const posts = randomPosts.map((post) => {
      return {
        id: post.id,
        animalId: checkAnimal(post.animalId),
        title: post.title,
        content: post.content,
        userId: post.userId,
        createdAt: post.createdAt
      };
    });

    return res.status(200).send({
      "data" : posts,
      "message" : "ok"
    });
  }
}