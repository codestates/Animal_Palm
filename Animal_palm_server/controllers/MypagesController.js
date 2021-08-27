module.exports = {
  update: (req, res) => {
    //*PATCH / endpoint http://localhost:4000/mypage
    //TODO: 유저 정보 수정

    //req.body에 담긴 수정내용만 현재 유저 정보(DB에서 읽어옴)에 update
    //-> sequelize method중에 update method가 있음 이거 쓰면 됨!

    //업데이트 된 데이터 돌려줄 필요 X
    //비밀번호도 수정할 수 있으니까 body에 hashing된 비밀번호까지 받아도 되지 않을까?
    //hashing은 advanced에서 최우선으로
    return res.send("update");
  },

  passwordCheck: (req, res) => {
    //*POST / endpoint http://locolhost:4000/mypage/passwd
    //TODO: 회원정보 수정 전 비밀번호 체크

    //클라에서 서버로 현재 입력된 값 전달해준 뒤 (해싱된 비밀번호가 body에 담겨 전달)
    //-> 서버에서 입력받은 값과 현재 토큰에 담긴 유저의 비밀번호를 비교
    //일치하면 응답에 일치한다고 전달 -> 이거 보고 클라에서 회원정보 페이지로 넘어감
    return res.send("passwordCheck");
  },

  info: (req, res) => {
    //*GET / endpoint http://localhost:4000/mypage/info
    //TODO: 유저 정보 가져오기

    //현재 가지고 있는 token으로 유저 확인 (쿠키에 담겨있음)
    //-> 해당 유저의 정보 DB에서 검색
    //-> 정상적으로 검색됐으면 해당 정보 중 필요한 정보만 body에 담아 응답
    return res.send("info");
  },

  myPageComment: (req, res) => {
    //*GET / endpoint http://localhost:4000/mypage/comment
    //TODO: 현재 유저가 작성한 댓글 가져오기

    //현재 가지고 있는 token으로 유저 확인
    //-> 해당 유저의 ID로 comment 테이블에서 검색
    //findAll로 전부 찾아서 -> client에서 필요한 형태로 배열에 담아 응답
    
    return res.send("myPageComment");
  },

  myPagePost: (req, res) => {
    //*GET / endpoint http://localhost:4000/mypage/context
    //TODO: 현재 유저가 작성한 글 가져오기

    //현재 가지고 있는 token으로 유저 확인
    //해당 유저의 ID로 post 테이블에서 검색
    //findAll로 전부 찾아서 -> client에서 필요한 형태로 배열에 담아 응답

    return res.send("myPagePost");
  }
}