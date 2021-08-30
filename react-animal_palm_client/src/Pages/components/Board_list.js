import '../Board.css'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

     
     function Board_list({animalId,server}) {
        const num = [1,2,3] //dummy
        let count = 0
        const [contentList, setContentList] = useState([])
        const history = useHistory()

        useEffect(()=>{
            loadContentList(animalId)
        },[])

        const loadContentList = (animalId) => {
            axios
             .get(
              `${server}boards/${animalId}`
             ).then( data => {
                 console.log(data.data.data)
               setContentList(data.data.data)
             })
             .catch((err)=>{
               alert(err)
                count = 1
               console.log(server,animalId)
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
                        <th className="col5">번호</th>
                        <th className="col15">태그</th>
                        <th className="col60">제목</th>
                        <th className="col12">작성자</th>
                        <th className="col8">날짜</th>
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
         {contentList.map((el,idx)=>{
             return (
            // <Link className="boardContent" to='board/post' >
             <tfoot>
                 <tr className="boardContent" onClick={()=>{history.push({pathname:'board/post',state:{postId:el.id}})}}>
                     <td className="col5" >{el.id}</td>
                     <td className="col15" >{el.hashtag}</td>
                     <td className="col60" >{el.title}</td>
                     <td className="col12" >{el.user_id}</td>
                     <td className="col8" >{el.createdAt}</td>
                 </tr>
             </tfoot>
            // </Link>
             )
         })}
            </table>
            <Link to='board/write'>
                글작성
           </Link>
          
         </div>
       );
     }
     
     export default Board_list;
     