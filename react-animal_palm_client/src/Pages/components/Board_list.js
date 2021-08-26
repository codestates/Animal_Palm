import '../Board.css'
import { Link } from 'react-router-dom'
     
     function Board_list({ contentList, loadComment, loadContent }) {
        const num = [1,2,3]

       return (
         
         <div className="Board_list">
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
         {num.map(el=>{
             return <tbody>
             <tr>
                 {/* .map 으로 구현해야함 */}
                 <td>{el}</td>
                 <td>
                     <Link to='board/post'  onClick={loadContent} onClick={loadComment}>
                     제목입니다
                     </Link>
                </td>
                 <td>닉네임입니다</td>
                 <td>날짜</td>
                 <td>맛집, 뭐뭐뭐</td>
             </tr>
             </tbody>
         })}
         {/* {contentList.map(el=>{
             return (
             <tbody>
                 <Link to='board/post' onClick={loadContent} onClick={loadComment}>
                 <tr>
                     <td>{el.postId}</td>
                     <td>{el.title}</td>
                     <td>{el.userId}</td>
                     <td>{el.time}</td>
                     <td>{el.hashtag}</td>
                 </tr>
                 </Link>
             </tbody>
             )
         })} */}
     </table>
     <Link to='board/write'>
     <button>
         글작성
     </button>
     </Link>
          
         </div>
       );
     }
     
     export default Board_list;
     