module.exports ={
    update: (req,res)=>{
    //PATCH method
    //회원정보 수정 전 비밀번호 체크하는 method

    //req.body에 담긴 수정내용만 현재 유저 정보(DB에서 읽어옴)에 update
    //-> sequelize method중에 update method가 있음 이거 쓰면 됨!

    //업데이트 된 데이터 돌려줄 필요? -> client에서 필요하다고 하면 돌려줌
    //비밀번호도 수정할 수 있으니까 body에 hashing된 비밀번호까지 받아도 되지 않을까?
        return res.send('updata')
    },
    check:(req,res)=>{
        //*POST method
    //회원정보 수정 전 비밀번호 체크하는 method

    //api 수정 필요성
    //현재 token만 받아오는 구조 -> 비교대상이 없음
    //client에서 비밀번호 확인 창에 입력받은 값도 읽어와야함
    //get 말고 다른 method를 사용해야하지 않을까
    //get으로 사용하려면 서버에서 클라로 비밀번호를 전달해주고 클라에서 비밀번호를 비교해야함
    //-> 보안상 위험

    //!POST method로 수정함
    //클라에서 서버로 현재 입력된 값 전달해준 뒤 (해싱된 비밀번호가 body에 담겨 전달)
    //-> 서버에서 입력받은 값과 현재 토큰에 담긴 유저의 비밀번호를 비교
    //일치하면 응답에 일치한다고 전달 -> 이거 보고 클라에서 회원정보 페이지로 넘어감
        return res.send("check")
    },
    info :(req,res)=>{
    //GET method
    //유저 정보 가져오는 method

    //현재 가지고 있는 token으로 유저 확인 (쿠키에 담겨있음)
    //-> 해당 유저의 정보 DB에서 검색
    //-> 정상적으로 검색됐으면 해당 정보 중 필요한 정보만 body에 담아 응답
        return res.send("info")
    }
}