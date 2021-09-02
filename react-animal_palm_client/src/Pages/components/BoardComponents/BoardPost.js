import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { profileImages } from '../../../assets/ProfileImage';
import '../../Board.css'
import { getParsedDate } from '../../function/DateFormat';

export default function BoardPost() {
    const history = useHistory()
    const location = useLocation()

    const [context, setContext] = useState({})
    const [comment, setComment] = useState([[]])
    const [writeComment, setWriteComment] = useState(
        {
        content:''
        }
    )

    useEffect(()=>{
        loadContentComment(location.state.animalId)
    },[])

    const handleInputValue = (key) => (e) => {
        setWriteComment({...writeComment, [key]: e.target.value })
    }
    const loadContentComment = (animalId) => {
        axios
        .get(
          `${process.env.REACT_APP_API_URL}/boards/${animalId}/${location.state.postId}`
          ,{ withCredentials: true }
        )
        .then( data => {
           setContext(data.data.data)
        })
        .catch((err)=>{
            alert(err)
        })

        axios
        .get(
           `${process.env.REACT_APP_API_URL}/comments/${location.state.postId}`,
           { withCredentials: true }
        )
        .then( data => {
            setComment([...data.data.data])
        })
        .catch((err)=>{
            alert(err)
        })
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
            )
            .then(()=>{
                alert('댓글을 게시했습니다')
                setWriteComment(
                    {
                    content:''
                    }
                )
            })
            .then(()=>{
                axios
                .get(
                    `${process.env.REACT_APP_API_URL}/comments/${location.state.postId}`,
                    { withCredentials: true }
                )
                .then(data => {
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
            `${process.env.REACT_APP_API_URL}/boards/${location.state.postId}`,
            { withCredentials: true }
        )
        .then(()=>{
            history.push('/board')
        })
        .catch(err=>{
            alert(err)
        })
    }
    const deleteComment = (commentId) => {
        axios
        .delete(
            `${process.env.REACT_APP_API_URL}/comments/${commentId}/`,
            { withCredentials: true }
        )
        .then(()=>{ //comment가 추가된후 새로 로딩
            axios
            .get(
              `${process.env.REACT_APP_API_URL}/comments/${location.state.postId}`
              ,{ withCredentials: true }
            ).then( data => {
             setComment(data.data.data)
            })
            .catch((err)=>{
               alert(err)
            })
        })
    }
    return (
        <div className="Board_post">
            <div className="Header">
                <h1>{context.title}</h1>
                <span>{context.userId}</span>
            </div>
            <button className="deleteContext" onClick={deleteContext}>글삭제</button>
            <div className="Container">
                <pre className="Content">
                        {context.content}
                </pre>
                <div className="Replybox"></div>
                <div className="Commentbox">
                    <ul className="Commentlist">
                        {comment.map(el=>{
                            return (
                                <li>
                                    <div>
                                        <span>{el.animalid}</span>
                                        <button className="deleteComment" onClick={()=>deleteComment(el.id)}>삭제</button>
                                        <div>{el.content}</div>
                                        <div>{getParsedDate(el.createdAt)}</div>
                                    </div>
                                </li>
                            )
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
