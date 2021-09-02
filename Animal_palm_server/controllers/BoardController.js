
const models = require('../models/')

const {checkAnimal} = require('./check/')
const {verifyToken,decodeToken} = require('./VerifyToken')

const COOKIEOPTION = {
  domain: 'http://ec2-3-34-133-160.ap-northeast-2.compute.amazonaws.com',
  httpOnly: true,
  sameSite: 'None'
}


module.exports ={
  getPostList:async (req, res) => {
    if(!req.headers.cookie) return res.status(401).json({message:"invalid authority"})
    //*GET / endpoint: http://localhost:4000/boards/:animalId 
    //const data = await posts.findAll()
    //req.params에 담긴 id로 postDB 조회
    //post.board_name이 req.params.id와 같은 데이터 검색
    //findAll -> 배열로 받은 값을 client에서 필요한 형태로 map해서 응답
    const animalId = req.params.animalId
    if(animalId>16) return res.status(401).json({message:"invalid page"})    
    const [accessToken, refreshToken] = await verifyToken(req);
    const user = await decodeToken(accessToken);
    if(!accessToken) return res.status(401).send("invalid token");
    
    else {
      //유효한 토큰일 경우 -> 해당 유저가 존재하는지 확인
    if(!user) return res.status(401).send("invalid token");

    else {
      let data = []
      const allData = await models.posts.findAll({where:{animalId:animalId},raw:true})
      
      
      // 해쉬태그 전달하기
      for(let i =0; i<allData.length;i++){
        const postId = await models.posts.findOne({where:{id:allData[i].id}})
        const userId = await models.users.findOne({where:{id:postId.userId}})
        
        const postHashtagsPostId = await models.postHashtags.findAll({where:{postId:postId.id},raw:true})
        const hashtagArr = []
        const arr =[]
        for(let j=0; j<postHashtagsPostId.length;j++) {
          const hashtagStr = await models.hashtags.findOne({where:{id:postHashtagsPostId[j].id}})
          
          arr.push(hashtagStr.hashtag)
        }
        
        for(let k=0;k<arr.length;k++){
          hashtagArr.push([arr[k]])
        }
        
        data.push({
          id: allData[i].id,
          title: allData[i].title,
          userId : checkAnimal(userId.animalId),
          hashtag :hashtagArr,
          createdAt: allData[i].createdAt,
          updatedAt: allData[i].updatedAt,
        })
      }
      return res.status(200)
        .cookie('accessToken', accessToken, COOKIEOPTION)
        .cookie('refreshToken', refreshToken, COOKIEOPTION)
        .json({data:data});
      }
    }    
  },

  getPost:async (req, res) => {
    //*GET / endpoint: http://localhost:4000/board/:boardId/:postId
    //TODO: 현재 클릭된 글 가져오기
    // /:boardId/:postId
    //req.params에 담긴 id로 postDB 조회
    //post.Id가 req.params.id와 같은 데이터 검색
    //어차피 한 개밖에 없음 findOne으로 탐색 -> 받은 데이터를 client에서 필요한 형태로 응답
    if(!req.headers.cookie) return res.status(401).json({message:"invalid authority"})

    const animalId = req.params.animalId
    if(animalId>16) return res.status(401).json({message:"invalid page"})
    const postId = req.params.postId

    const [accessToken, refreshToken] = await verifyToken(req);
    if(!accessToken) return res.status(401).send("invalid token");
    else {

      const data =await models.posts.findOne({where:{
        id:postId,
        animalId:animalId
        }})
      const user = await models.users.findOne({where:{
        id:data.userId
      }})
      const arr = {
        id:data.id,
        animalId:data.animalId,
        content: data.content,
        title:data.title,
        createdAt:data.createdAt,
        updatedAt:data.updatedAt,
        userId:checkAnimal(user.animalId)
      }   
    
      return res.status(200)
        .cookie('accessToken', accessToken, COOKIEOPTION)
        .cookie('refreshToken', refreshToken, COOKIEOPTION)
        .json({data:arr});
      
    }    
  },

  writeContent: async (req, res) => {
    //*POST / endpoint: http://localhost:4000/boards/:postId
    //TODO: 현재 게시판에 글쓰기
    //endpoint의 :id <- 게시판 id
    if(!req.headers.cookie) return res.status(401).json({message:"invalid authority"})
    const animalId = req.params.animalId
    if(animalId>16) return res.status(401).json({message:"invalid page"})

    const [accessToken, refreshToken] = await verifyToken(req);
    if(accessToken) {
      const user = await decodeToken(accessToken);
      if(!user) return res.status(401).json({message:"invalid user token"});
      else {
        const title = req.body.title
        const content = req.body.content
        const hashtag =req.body.hash
        
        const postData = await models.posts.create({
          userId :user.id,
          animalId : animalId,
          content : content,
          title : title,   
        })

        const data = []
        for(let i=0; i<hashtag.length;i++){
          const hashtagData = await models.hashtags.create({
            hashtag:hashtag[i][0]
          })
         await models.postHashtags.create({
            postId:postData.id,
            hashtagId:hashtagData.id
          })
        }
        
        return res.status(200)
              .cookie('accessToken', accessToken, COOKIEOPTION)
              .cookie('refreshToken', refreshToken, COOKIEOPTION)
              .json({message:'write context'});
      }
    }


    //현재 게시글의 정보를 postDB에 저장
    //post.create({user_id, board_name, content, title})
    //user_id: token / board_name: req.params / content, title: req.body

    //token에 담긴 사용자가 유효한 사용자인지 항상 유효성부터 체크

    //유효한 사용자인지, 유효한 게시판인지, 게시글 넘버가 존재하는지

  },

  contentDelete:async (req, res) => {
    //*DELETE / endpoint: http://localhost:4000/board/:id
    //TODO: 현재 게시글 삭제
    if(!req.headers.cookie) return res.status(401).json({message:"invalid authority"})
   //endpoint의 :id <- 게시글 id, API 규칙에 명시해둬야 될듯

    //req에 담긴 현재 게시글을 postDB에서 삭제

    //마찬가지로 유효한 사용자인지, 해당 게시글의 작성자가 사용자가 맞는지, 존재하는 게시글인지
    //유효성을 체크하고 삭제할것
    const postId = req.params.postId
    const [accessToken, refreshToken] = await verifyToken(req);
    if(accessToken){
      const user = await decodeToken(accessToken);
      const post = await models.posts.findOne({where:{
        id:postId
      }})
      if(!post) return res.status(404).json({message:"invalid access"})
      else{
        if(post.userId === user.id){
          await models.posts.destroy({where:{id:postId}})
          await models.comments.destroy({where:{id:postId}})
          return res.status(200).json({message:"ok"});
        }
        return res.status(401).json({message:"invalid user"})    
      } 
    }
    return res.status(401).json({message:"invalid user"})
  }
}