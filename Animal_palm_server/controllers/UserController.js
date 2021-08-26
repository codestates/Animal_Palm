module.exports ={
  signin: (req,res)=>{
    //req.body에 id, pw 담겨있음
    //-> DB에서 id, pw 일치하는 유저 있는지 찾아서
    //-> 있으면 access token 주면서 return / 없으면 401

    //token 관리 어떻게 할 건지 다시 이야기해보기
    //access token에 id, mbti를 담아서 body로 주고
    //  client에서 필요할 때마다 token을 이용해 유저 정보 받아가는 get 요청 필요하지 않을까?
    //  client에서는 token 디코딩 못한다고 알고 있음
    //  로그인할 때 token 받고 -> 성공시 받은 token으로 정보 요청해서 해석한 결과 돌려받기
    //  이렇게 해서 받은 유저 정보 client에서 state로 관리
    //refresh token에 id를 담아서 쿠키에 저장(만료기간 넉넉하게 생성)
    //로그인상태 필요할 때마다 refresh token으로 access token 갱신
    return res.send('signin')
  },
  signup:(req,res)=>{
    //req.body에 유저 정보 담겨있음
    //-> DB에서 id 일치하는 유저 있는지 찾아서
    //-> 있으면 409 없으면 가입완료
    //findOrCreate로 탐색
    return res.send("signup")
  },
  signout:(req,res)=>{
    //req로 client가 가지고 있던 token 받아옴
    //유효한 token일 경우에만 로그아웃 진행
    //  유효 여부 판별: 디코딩한 데이터가 DB에 포함되어 있는지 확인
    //  DB에 포함되어있지 않은 data -> 401
    //req.body로 받아온 access token, 쿠키에 담겨있던 refresh token 둘 다 삭제
    return res.send("signout")
  },
  userDelete:(req,res)=>{
    return res.send("userDelete")
  }

}