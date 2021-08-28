module.exports ={
  signIn: (req,res)=>{
    //*POST / endpoint: https://localhost:4000/user/signin
    //TODO: 로그인기능 구현 + 토큰생성
    //-> DB에서 id, pw 일치하는 유저 있는지 찾아서
    //-> 있으면 access token 주면서 return / 없으면 401

    //token 관리 어떻게 할 건지 다시 이야기해보기
    // //access token에 id, mbti를 담아서 body로 주고
    // //  client에서 필요할 때마다 token을 이용해 유저 정보 받아가는 get 요청 필요하지 않을까?
    // //  client에서는 token 디코딩 못한다고 알고 있음
    // //  로그인할 때 token 받고 -> 성공시 받은 token으로 정보 요청해서 해석한 결과 돌려받기
    // //  이렇게 해서 받은 유저 정보 client에서 state로 관리
    // // 이렇게까지 할 필요가 없음: access token의 만료기간을 촉박하게 할 필요가 X
    // //refresh token에 id를 담아서 쿠키에 저장(만료기간 넉넉하게 생성)
    // //로그인상태 필요할 때마다 refresh token으로 access token 갱신
    //! 토큰 관리 방법
    //access token : 유저 정보 담아서 쿠키에 저장
    //refresh token : 유저 정보 담아서 DB에 저장 -> user 테이블에 refresh 속성

    return res.send('signIn');
  },

  signUp:(req,res)=>{
    //*POST / endpoint: https://localhost:4000/user/signup
    //TODO: 회원가입 기능 구현
    //-> DB에서 id 일치하는 유저 있는지 찾아서
    //-> 있으면 409 없으면 가입완료

    //findOrCreate로 탐색

    return res.send("signUp");
  },

  signOut:(req,res)=>{
    //*PUT / endpoint https://localhost:4000/user/signout
    //TODO: 로그아웃 기능 구현

    //현재 가지고 있는 token이 유효한 token일 경우에만 로그아웃 진행
    //  유효 여부 판별: 디코딩한 데이터가 DB에 포함되어 있는지 확인
    //  DB에 포함되어있지 않은 data -> 401
    //req.body로 받아온 access token, 쿠키에 담겨있던 refresh token 둘 다 삭제
    return res.send("signout");
  },

  userDelete:(req,res)=>{
    //*DELETE / endpoint http://localhost:4000/user/
    //TODO: 회원 탈퇴 기능 구현

    //현재 로그인 되어있는 유저의 정보를 삭제
    //destroy method 사용
    //-> 현재 로그인 되어있는 유저를 DB에서 찾은 뒤 그 유저를 destory
    
    //! refresh token 유저 테이블에 저장되어있음 -> 해당 정보도 삭제
    return res.send("userDelete");
  },

  MBTI_signUp: (req, res) => {
    //*POST / endpoint http://localhost:4000/user/animal
    //TODO: 현재 가입중인 유저의 MBTI 정보 추가

    //req.body에 넘겨받은 아이디의 유저 탐색
    //해당 유저의 MBTI 정보 추가
    
    return res.send("MBTI_signUp");
  },

  userIdCheck: (req, res) => {
    //*POST / endpoint http://localhost:4000/user/userid
    //TODO: 가입 중 아이디 중복체크

    //req.body로 넘겨받은 아이디가 user 테이블에 있는지 findOne으로 확인
    //있으면 409, 없으면 200

    return res.send("userIdCheck");
  }

}