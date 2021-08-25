import './Board.css'
import Navigaitionbar from './components/navigationbar'

function Board() {
  return (
    
    <div className="Board">
    <nav>
        <Navigaitionbar />
    </nav>
     <table className="table">
         <thead>
         <tr>
             <th>번호</th>
             <th>제목</th>
             <th>작성자</th>
             <th>날짜</th>
             <th>태그</th>
         </tr>
         </thead>
         <tbody>
         <tr>
             {/* .map 으로 구현해야함 */}
             <td>1</td>
             <td>제목입니다</td>
             <td>닉네임입니다</td>
             <td>날짜</td>
             <td>맛집, 뭐뭐뭐</td>
         </tr>
         </tbody>
         <tbody>
         <tr>
             {/* .map 으로 구현해야함 */}
             <td>2</td>
             <td>제목입니다</td>
             <td>닉네임입니다</td>
             <td>날짜</td>
             <td>맛집, 뭐뭐뭐</td>
         </tr>
         </tbody>
         <tbody>
         <tr>
             {/* .map 으로 구현해야함 */}
             <td>3</td>
             <td>제목입니다</td>
             <td>닉네임입니다</td>
             <td>날짜</td>
             <td>맛집, 뭐뭐뭐</td>
         </tr>
         </tbody>
     </table>
     <button>
         글작성
     </button>
    </div>
  );
}

export default Board;
