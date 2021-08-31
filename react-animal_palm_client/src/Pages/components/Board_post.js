import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import '../Board.css'

function Board_post({ server }) {

    const [context, setContext] = useState({})
    const [comment, setComment] = useState([[]])

    const [writeComment, setWriteComment] = useState({
        content:''
    })

    const history = useHistory()

    const location = useLocation()

    useEffect(()=>{
        loadContentComment(location.state.location)
    },[])
    
    const isHaveEnter = (context) => {
        if(typeof context === 'string'){
        console.log(context.split('\n').join('<br></br>'),1111)
        return !!(context.indexOf('\n'))}
    }

    const handleInputValue = (key) => (e) => {
        setWriteComment({...writeComment, [key]: e.target.value })
    }

    const loadContentComment = (animalId) => {
        // console.log('content')
        axios
         .get(
          `${process.env.REACT_APP_API_URL}/boards/${animalId}/${location.state.postId}`
          ,{ withCredentials: true }
         ).then( data => {
           setContext(data.data.data)
           console.log(context)
           })
         .catch((err)=>{
             alert(err)
         })

         axios
         .get(
           `${process.env.REACT_APP_API_URL}/comments/${location.state.postId}`,
           { withCredentials: true }
         ).then( data => {
            //  console.log(data.data.data)
          setComment([...data.data.data])
          
          console.log(comment, data.data.data)
         })
         .catch((err)=>{
            alert(err)
        })
        // console.log('loadContent')
      }

    const postComment = () => {
        if(writeComment.content === ''){
            alert('내용을 입력해주세요')
        }
        else{
        axios
         .post(
            `${process.env.REACT_APP_API_URL}/comments/${location.state.postId}`,
            {
                content: writeComment.content
            },
            { withCredentials: true }
         ).then(()=>{
            alert('댓글을 게시했습니다')
            setWriteComment({
                content:''
            })
          })
          .then(()=>{
            axios
            .get(
              `${process.env.REACT_APP_API_URL}/comments/${location.state.postId}`
              ,{ withCredentials: true }
            ).then( data => {
             setComment(data.data.data)
            })
            .catch((err)=>{
               alert(err)
           }) //comment가 추가된후 새로 로딩
         })
          .catch((err)=>{
            alert(err)
          })
        }
    }

    const deleteContext = () => {
        axios
         .delete(
            `${process.env.REACT_APP_API_URL}/boards/${location.state.postId}}/`,
            { withCredentials: true }
         ).then(data=>{
            history.push('/board')
         })
         .catch(err=>{
            history.push('/board')

         })
    }

    const deleteComment = (commentId) => {
        axios
         .delete(
             `${process.env.REACT_APP_API_URL}/comments/${commentId}/`//api 수정사항 comment id로 지워야함
             ,{ withCredentials: true }
         ).then(()=>{
            axios
            .get(
              `${process.env.REACT_APP_API_URL}/comments/${location.state.postId}`
              ,{ withCredentials: true }
            ).then( data => {
             setComment(data.data.data)
            })
            .catch((err)=>{
               alert(err)
           }) //comment가 추가된후 새로 로딩
         })
    }

  return (
    <div className="Board_post">
        {/* {loadContentComment(animalId)} */}
        <div className="Header">
            {/* <h1>제목입니다</h1> */}
            <h1>{context.title}</h1>
        </div>
        <button className="deleteContext" onClick={deleteContext}>글삭제</button>
        <div className="Container">
            <pre className="Content">
                {context.content}
            </pre>
            <div className="Replybox"></div>
            <div className="Commentbox">
                <ul className="Commentlist">
                    {/* {여기는 map으로 구현해야함} */}
                    {/* <li>
                        <div>
                            <span>댓글작성자</span>
                            <button className="deleteComment" onClick={deleteComment}>삭제</button>
                            <div>댓글입니다.댓글입니다.댓글입니다.댓글입니다</div>
                            <div>
                                2021.12.34 22:00
                            </div>
                        </div>
                    </li> */}
                    {comment.map(el=>{
                        return(
                    <li>
                        <div>
                            <span>{el.userId}</span>
                            <button className="deleteComment" onClick={()=>deleteComment(el.id)}>삭제</button>
                            <div>{el.content}</div>
                            <div>
                            {el.createdAt}
                            </div>
                        </div>
                    </li>)
                    })}
                </ul>
                <div className="enterCommentContainer">
                <textarea placeholder="댓글을 입력해주세요" onChange={handleInputValue('content')} value={writeComment.content} />
                <button onClick={postComment} >등록</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Board_post;
