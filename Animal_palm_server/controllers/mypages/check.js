//DB모델 import 해와야됨

module.exports ={
  check: (req, res) => {
    //*POST method
    //회원정보 수정 전 비밀번호 체크하는 method

    // //api 수정 필요성
    // //현재 token만 받아오는 구조 -> 비교대상이 없음
    // //client에서 비밀번호 확인 창에 입력받은 값도 읽어와야함
    // //get 말고 다른 method를 사용해야하지 않을까
    // //get으로 사용하려면 서버에서 클라로 비밀번호를 전달해주고 클라에서 비밀번호를 비교해야함
    // //-> 보안상 위험

    //!POST method로 수정함
    //클라에서 서버로 현재 입력된 값 전달해준 뒤 (해싱된 비밀번호가 body에 담겨 전달)
    //-> 서버에서 입력받은 값과 현재 토큰에 담긴 유저의 비밀번호를 비교
    //일치하면 응답에 일치한다고 전달 -> 이거 보고 클라에서 회원정보 페이지로 넘어감
  }
}