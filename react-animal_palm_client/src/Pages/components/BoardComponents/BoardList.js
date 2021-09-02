import '../../Board.css'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function BoardList({animalId}) {
    const history = useHistory()

    const [contentList, setContentList] = useState([])
    const [location, setLocation] = useState(animalId)
        
    useEffect(()=>{
        loadContentList(location)
    },[])

    const loadContentList = (animalId) => {
        axios
        .get(
            `${process.env.REACT_APP_API_URL}/boards/${animalId}`,
            { withCredentials: true }
        )
        .then(data => {
            console.log(data.data)
            setContentList(data.data.data)
        })
        .catch((err)=>{
               alert(err)
        })
    }
    return (
        <div className="Board_list">
            <div className="selectBoard">
                <button className={location===0?'clickedButton':''} onClick={()=>{loadContentList(0); setLocation(0)}}>전체게시판</button>
                <button className={location!==0?'clickedButton':''} onClick={()=>{loadContentList(animalId); setLocation(animalId)}}>당신의게시판</button>
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
                {contentList.map((el,idx)=>{
                    return (
                        <tfoot key={idx}>
                            <tr className="boardContent" 
                                onClick={()=>{history.push({pathname:'board/post',state:{postId:el.id, animalId: location}})}}>
                                <td className="col5" >{el.id}</td>
                                <td className="col15" >{el.hashtag.map(el=>''+el).join(',')}</td>
                                <td className="col60" >{el.title}</td>
                                <td className="col12" >{el.userId}</td>
                                <td className="col8" >{el.createdAt}</td>
                            </tr>
                        </tfoot>
                    )
                })}
            </table>
            <Link to={{pathname:'board/write', state:{animalId: location}}}>
                글작성
            </Link>
        </div>
    );
}     