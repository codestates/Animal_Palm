export function Success({ setIsState,moveLogin }) {
    return(
        <center>
            {setIsState('three')}
            <h1>
                환영합니다!
            </h1>
            <div className="answer" onClick={moveLogin}>로그인 하러가기</div>
        </center>
    )
}