//DB모델 import 해와야됨

module.exports ={
  update: (req, res) => {
    //PATCH method
    //회원정보 수정 전 비밀번호 체크하는 method

    //req.body에 담긴 수정내용만 현재 유저 정보(DB에서 읽어옴)에 update
    //-> sequelize method중에 update method가 있음 이거 쓰면 됨!

    //업데이트 된 데이터 돌려줄 필요? -> client에서 필요하다고 하면 돌려줌
    //비밀번호도 수정할 수 있으니까 body에 hashing된 비밀번호까지 받아도 되지 않을까?
  }
}