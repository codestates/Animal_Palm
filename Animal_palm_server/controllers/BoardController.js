const models = require('../models/')


module.exports ={
  getPostList:async (req, res) => {
    //*GET / endpoint: http://localhost:4000/boards/:board_id
    //TODO: 현재 게시판의 글 목록 가져오기
    const board_id = req.params.board_id
    const data = await models.posts.findOne({where:{animal_name:board_id}})
    
    
    //const data = await posts.findAll()
    //req.params에 담긴 id로 postDB 조회
    //post.board_name이 req.params.id와 같은 데이터 검색
    //findAll -> 배열로 받은 값을 client에서 필요한 형태로 map해서 응답
    //console.log(data)
    
    return res.status(200).json({data:data2});
  },

  getPost:async (req, res) => {
    //*GET / endpoint: http://localhost:4000/boards/:post_id
    //TODO: 현재 클릭된 글 가져오기
    // /:board_id/:post_id
    const board_id = req.params.board_id
    const post_id = req.params.post_id
    

    const data =await models.posts.findOne({where:{id:post_id}})
    //req.params에 담긴 id로 postDB 조회
    //post.Id가 req.params.id와 같은 데이터 검색
    //어차피 한 개밖에 없음 findOne으로 탐색 -> 받은 데이터를 client에서 필요한 형태로 응답

    //return res.send(`${board_id}+${post_id}`);
    return res.status(200).json({data:data});
  },

  writeContext: async (req, res) => {
    //*POST / endpoint: http://localhost:4000/boards/:board_id
    //TODO: 현재 게시판에 글쓰기
    //endpoint의 :id <- 게시판 id
    
    const board_id = req.params.board_id
    const title = req.body.title
    const context = req.body.context
    const user_id = await models.users.findOne({ where:{user_id: req.body.user_id}})

    await models.posts.create({
      user_id :user_id.dataValues.id,
      animal_name : board_id,
      context : context,
      title : title
    })

    //현재 게시글의 정보를 postDB에 저장
    //post.create({user_id, board_name, content, title})
    //user_id: token / board_name: req.params / content, title: req.body

    //token에 담긴 사용자가 유효한 사용자인지 항상 유효성부터 체크
    //유효한 사용자인지, 유효한 게시판인지, 게시글 넘버가 존재하는지

    return res.status(201).json({message:"write context"});
  },

  contextDelete:async (req, res) => {
    //*DELETE / endpoint: http://localhost:4000/board/:id
    //TODO: 현재 게시글 삭제

    const post_id = req.params.post_id

    
    await models.posts.destroy({where:{id:post_id}})
    //endpoint의 :id <- 게시글 id, API 규칙에 명시해둬야 될듯

    //req에 담긴 현재 게시글을 postDB에서 삭제

    //마찬가지로 유효한 사용자인지, 해당 게시글의 작성자가 사용자가 맞는지, 존재하는 게시글인지
    //유효성을 체크하고 삭제할것

    return res.status(200).json({message:"ok"});
  }
}