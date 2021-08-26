module.exports ={
    comment: (req,res)=>{
    //*GET method
    //TODO: 현재 게시글의 댓글을 가져오는 method

    //엔드포인트: http://localhost:4000/comments/:postid
    //api book에 있는 엔드포인트에서 끝 /comment 부분은 불필요하다고 생각됨

    //req.params에 담긴 현재 게시글의 id를 통해 탐색 가능
    //comments.findAll({where: {post_Id = req.params.postId}})
    //return값은 배열로 받게됨
    //해당 배열(=result)을 map해서 client에서 사용 가능한 형태로 body에 담아 응답
        return res.send('comment')
    },
    writecomment:(req,res)=>{
    //*POST method
    //TODO: 현재 게시글에 댓글을 다는 method

    //엔드포인트: http://localhost:4000/comments/:postid/

    //req에 담긴 현재 게시글의 정보를 comments DB에 추가
    //comments.create({post_id, content, user_id})
    //postId: req.params, content: req.body, user_id: req.cookie(token에 담겨있음)

    //token에 담긴 유저가 유효한 유저인지 항상 유효성부터 체크
    //postId가 존재하는 게시글인지 확인 -> postDB에서 확인
    //유효한 유저가 존재하는 게시글에 작성한 댓글일 경우에만 commentsDB에 추가
        return res.send("writecomment")
    },
    commentDelete:(req,res)=>{
        return res.send("commentDelete")
    }
}