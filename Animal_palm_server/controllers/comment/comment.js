//DB모델 import 해와야됨

module.exports ={
  comment: (req, res) => {
    //*GET method
    //TODO: 현재 게시글의 댓글을 가져오는 method

    //엔드포인트: http://localhost:4000/comments/:postid
    //api book에 있는 엔드포인트에서 끝 /comment 부분은 불필요하다고 생각됨

    //req.params에 담긴 현재 게시글의 id를 통해 탐색 가능
    //comments.findAll({where: {post_Id = req.params.postId}})
    //return값은 배열로 받게됨
    //해당 배열(=result)을 map해서 client에서 사용 가능한 형태로 body에 담아 응답
  }
}