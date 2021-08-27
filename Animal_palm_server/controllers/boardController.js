module.exports ={
  context: (req,res)=>{
    //*GET / endpoint: http://localhost:4000/boards/:id
    //TODO: 현재 게시판의 글 가져오기

    //req.params에 담긴 id로 postDB 조회
    //post.board_name이 req.params.id와 같은 데이터 검색
    //findAll -> 배열로 받은 값을 client에서 필요한 형태로 map해서 응답
    
    return res.send('context')
  },

  writecontext:(req,res)=>{
    //*POST / endpoint: http://localhost:4000/boards/:id
    //TODO: 현재 게시판에 글쓰기
    //endpoint의 :id <- 게시판 id

    //현재 게시글의 정보를 postDB에 저장
    //post.create({user_id, board_name, content, title})
    //user_id: token / board_name: req.params / content, title: req.body

    //token에 담긴 사용자가 유효한 사용자인지 항상 유효성부터 체크
    //유효한 사용자인지, 유효한 게시판인지, 게시글 넘버가 존재하는지

    return res.send("writecontext")
  },

  contextDelete:(req,res)=>{
    //*DELETE / endpoint: http://localhost:4000/board/:id
    //TODO: 현재 게시글 삭제
    //endpoint의 :id <- 게시글 id, API 규칙에 명시해둬야 될듯

    //req에 담긴 현재 게시글을 postDB에서 삭제

    //마찬가지로 유효한 사용자인지, 해당 게시글의 작성자가 사용자가 맞는지, 존재하는 게시글인지
    //유효성을 체크하고 삭제할것

    return res.send("contextDelete")
  }
}