//DB모델 import 해와야됨

module.exports ={
  writecomment: (req, res) => {
    //*POST method
    //TODO: 현재 게시글에 댓글을 다는 method

    //엔드포인트: http://localhost:4000/comments/:postid/

    //req에 담긴 현재 게시글의 정보를 comments DB에 추가
    //comments.create({post_id, content, user_id})
    //postId: req.params, content: req.body, user_id: req.cookie(token에 담겨있음)
    
    //token에 담긴 유저가 유효한 유저인지 항상 유효성부터 체크
    //postId가 존재하는 게시글인지 확인 -> postDB에서 확인
    //유효한 유저가 존재하는 게시글에 작성한 댓글일 경우에만 commentsDB에 추가
  }
}