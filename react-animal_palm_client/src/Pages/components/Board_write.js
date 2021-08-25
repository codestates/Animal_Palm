import '../Board.css'

     
     function Board_write() {
       return (
         
         <div className="Board_write">
             <h2>제목</h2>
             <input placeholder="제목을 입력하세요" type="title"></input>
             <br></br>
             <textarea placeholder="내용을 입력하세요"></textarea>
             <br></br>
             <input placeholder="해쉬태그"></input>
             <button type='submit'>완료</button>
         </div>
       );
     }
     
     export default Board_write;
     