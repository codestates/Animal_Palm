//DB모델 import 해와야됨

module.exports ={
  signin: (req, res) => {
    //req.body에 유저 정보 담겨있음
    //-> DB에서 id 일치하는 유저 있는지 찾아서
    //-> 있으면 409 없으면 가입완료
    //findOrCreate로 탐색
  }
}