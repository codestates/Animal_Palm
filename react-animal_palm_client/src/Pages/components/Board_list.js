import '../Board.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

     
     function Board_list({animalId}) {
        const num = [1,2,3] //dummy
        let count = 0
        const [contentList, setContentList] = useState([])

        useEffect(()=>{
            loadContentList(animalId)
        },[])

        const loadContentList = (animalId) => {
            axios
             .get(
              `http://localhost:4000/boards/${animalId}`
             ).then( data => {
               setContentList(data)
             })
             .catch((err)=>{
               alert(err)
                count = 1
               console.log(count)
               if(contentList.length===0){
               setContentList([{
                   animalId:1,
                postId:'1',
                title:'내용이',
                userId:'없네요',
                time:'에러',
                hashtag:'입니다',
               }])}
             })
          }

        

       return (
         
         <div className="Board_list">
             {/* {alert('1')} */}
             {/* {count===0 ?
             loadContentList(animalId):null} */}
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
         {/* {num.map(el=>{
             return <tbody>
             <tr> */}
                 {/* .map 으로 구현해야함 */}
                 {/* <td>{el}</td>
                 <td>
                     <Link to='board/post'  onClick={()=>loadContentComment(el.animalId, el.contextId, el.postId)} context={'context'} comment={'comment'} postId={el.postId} >
                     제목입니다
                     </Link>
                </td>
                 <td>닉네임입니다</td>
                 <td>날짜</td>
                 <td>맛집, 뭐뭐뭐</td>
             </tr>
             </tbody>
         })} */}
         {contentList.map(el=>{
             return (
             <tbody>
                 <Link to='board/post' >
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
         })}
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
     