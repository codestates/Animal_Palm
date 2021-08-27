import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../Board.css'

function Board_post({ animalId }) {

    const [context, setContext] = useState({
        id:'',
    })
    const [comment, setComment] = useState()

    const [writeComment, setWriteComment] = useState({
        comment:''
    })

    const history = useHistory()

    useEffect(()=>{
        loadContentComment(animalId)
    },[])
    
    const handleInputValue = (key) => (e) => {
        setWriteComment({...writeComment, [key]: e.target.value })
    }

    const loadContentComment = (animalId) => {
        // console.log('content')
        axios
         .get(
          `http://localhost:4000/boards/${animalId}/${context.id}`
         ).then( data => {
           setContext(data)
         })
         .catch((err)=>{
            setContext('data')
             alert(err)
         })

         axios
         .get(
           `http://localhost:4000/boards/comments/${context.id}}`
         ).then( data => {
          setComment(data)
         })
         .catch((err)=>{
            alert(err)
        })
        // console.log('loadContent')
      }

    const postComment = () => {
        if(writeComment.comment === ''){
            alert('내용을 입력해주세요')
        }
        else{
        axios
         .post(
            `http://localhost:4000/boards/${context.id}}`,
            {
                comment: writeComment.comment
            }
         ).then(()=>{
            alert('댓글을 게시했습니다')
            setWriteComment({
                comment:''
            })
          })
          .then(()=>{
            axios
            .get(
              `http://localhost:4000/boards/comments/${context.id}}`
            ).then( data => {
             setComment(data)
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
            `http://localhost:4000/board/${context.id}}/`
         ).then(data=>{
            history.push('/board')
         })
         .catch(err=>{
            history.push('/board')

         })
    }

    const deleteComment = () => {
        axios
         .delete(
             `http://localhost:4000/board/${comment.id}/`//api 수정사항 comment id로 지워야함
         ).then(data=>{
            axios
            .get(
              `http://localhost:4000/boards/comments/${context.id}}`
            ).then( data => {
             setComment(data)
            })
            .catch((err)=>{
               alert(err)
           }) //comment가 삭제된후 새로 로딩
         })
    }

  return (
    <div className="Board_post">
        {/* {loadContentComment(animalId)} */}
        <div className="Header">
            <h1>제목입니다</h1>
            {/* <h1>{context.title}</h1> */}
        </div>
        <button onClick={deleteContext}>글삭제</button>
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
                            <div>
                                2021.12.34 22:00
                                <button onClick={deleteComment}>삭제</button>
                            </div>
                        </div>
                    </li>
                    {/* {comment.map(el=>{
                    <li>
                        <div>
                            <div>{comment.user}</div>
                            <div>{comment.comment}</div>
                            <div>
                            {comment.time}
                            <button onClick={deleteComment}>삭제</button>
                            </div>
                        </div>
                    </li>
                    })} */}
                </ul>
                <div>
                <h3>댓글</h3>
                <textarea placeholder="댓글을 입력해주세요" onChange={handleInputValue('comment')} value={writeComment.comment} />
                <button onClick={postComment} >등록</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Board_post;
