import '../Board.css'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

     
     function Board_list({animalId}) {
        const num = [1,2,3] //dummy
        const [contentList, setContentList] = useState([])
        const [location, setLocation] = useState(animalId)
        const history = useHistory()

        useEffect(()=>{
            loadContentList(location)
        },[])

        const loadContentList = (animalId) => {
            axios
             .get(
              `${process.env.REACT_APP_API_URL}/boards/${animalId}`,
              { withCredentials: true }
             ).then( data => {
                 console.log(data.data.data,animalId)
               setContentList(data.data.data)
             })
             .catch((err)=>{
               alert(err)
               if(contentList.length===0){
               setContentList([{
                   animalId:1,
                postId:'1',
                title:'내용이',
                userId:'없네요',
                time:'에러',
                hashtag:[['a'],['a'],['a']],
               }])}
             })
          }

        

       return (
         
         <div className="Board_list">
             {console.log(process.env.REACT_APP_API_URL)}
             {/* {alert('1')} */}
             {/* {count===0 ?
             loadContentList(animalId):null} */}
            <div className="selectBoard">
                <button onClick={()=>{loadContentList('전체게시판'); setLocation('전체게시판')}}>전체게시판</button>
                <button onClick={()=>{loadContentList(animalId); setLocation(animalId)}}>당신의게시판</button>
            </div>
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
             <tfoot key={idx}>
                 <tr className="boardContent" onClick={()=>{history.push({pathname:'board/post',state:{postId:el.id, animalId: location}})}}>
                     <td className="col5" >{el.id}</td>
                     <td className="col15" >{el.hashtag.map(el=>''+el).join(',')}</td>
                     <td className="col60" >{el.title}</td>
                     <td className="col12" >{el.user_id}</td>
                     <td className="col8" >{el.createdAt}</td>
                 </tr>
             </tfoot>
            // </Link>
             )
         })}
            </table>
            <Link to={{pathname:'board/write', state:{animalId: location}}}>
                글작성
           </Link>
          
         </div>
       );
     }
     
     export default Board_list;
     