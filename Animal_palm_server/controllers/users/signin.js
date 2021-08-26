//DB모델 import 해와야됨

module.exports ={
  signin: (req, res) => {
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

  }
}