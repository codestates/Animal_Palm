import '../Board.css'

function Board_post({ context, comment }) {
  return (
    
    <div className="Board_post">
        <div className="Header">
            <h1>제목입니다</h1>
            {/* <h1>{context.title}</h1> */}
        </div>
        <button>글삭제</button>
        <div className="Container">
            <div className="Content">
                게시글 <br></br>
                게시글 <br></br>
                게시글 <br></br>
                게시글 <br></br>
                게시글 <br></br>
                {/* {context.content} */}
            
            </div>
            <div className="Replybox"></div>
            <div className="Commentbox">
                <ul className="Commentlist">
                    {/* {여기는 map으로 구현해야함} */}
                    <li>
                        <div>
                            <div>댓글작성자</div>
                            <div>댓글입니다.댓글입니다.댓글입니다.댓글입니다</div>
                            <div>2021.12.34 22:00</div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div>댓글작성자</div>
                            <div>댓글입니다.댓글입니다.댓글입니다.댓글입니다</div>
                            <div>2021.12.34 22:00</div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div>댓글작성자</div>
                            <div>댓글입니다.댓글입니다.댓글입니다.댓글입니다</div>
                            <div>2021.12.34 22:00</div>
                        </div>
                    </li>
                </ul>
                <div>
                <h3>댓글</h3>
                <textarea placeholder="댓글을 입력해주세요" />
                <button>등록</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Board_post;
