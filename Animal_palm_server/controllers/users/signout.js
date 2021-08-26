module.exports ={
  signout: (req, res) => {
    //req로 client가 가지고 있던 token 받아옴
    //유효한 token일 경우에만 로그아웃 진행
    //  유효 여부 판별: 디코딩한 데이터가 DB에 포함되어 있는지 확인
    //  DB에 포함되어있지 않은 data -> 401
    //req.body로 받아온 access token, 쿠키에 담겨있던 refresh token 둘 다 삭제
    //

  }
}