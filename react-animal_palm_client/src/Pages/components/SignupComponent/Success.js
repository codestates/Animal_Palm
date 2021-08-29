export function Success({moveLogin}) {
    return(
    <center>
        <h1>
        환영합니다!
        </h1>
        <div className="answer" onClick={moveLogin}>로그인 하러가기</div>
    </center>
    )
}