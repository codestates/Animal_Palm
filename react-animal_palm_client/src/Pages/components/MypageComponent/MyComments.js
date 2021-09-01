import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ContentsList } from './ContentsList';

export const MyComments = ({
  userInfo
}) => {
  const [list, setList] = useState([]);
  const getMyComment = async () => {
    const myCommentURL = `${process.env.REACT_APP_API_URL}/mypage/comment`;
    await axios.get(myCommentURL, { withCredentials : true })
    .then((res) => {
      const message = res.data.message;
      if(message === 'ok') {
        // keepGoing
        setList(res.data.data);
        if(list.length === 0) {
          //! 작성한 댓글이 없습니다!!!!!!!
          return;
        }
      } else {
        alert('잘못된 접근입니다.')
        return;
      }
    })
  }
  const deleteCommentHandler = (commentId) => {
    const deleteCommentURL = `${process.env.REACT_APP_API_URL}/comments/${commentId}/`
    axios.delete(deleteCommentURL, { withCredentials : true })
    .then((res) => {
      const message = res.data.message;
      if(message === 'ok') {
        const idx = list.findIndex((el) => el.id === commentId);
        const temp = list.slice();
        temp.splice(idx, 1);
        setList(temp);
        alert('댓글이 삭제되었습니다.')
        return;
      } else {
        alert('잘못된 접근입니다.')
        return;
      }
    })
    .catch((err) => alert(err))
  }
  useEffect(() => {
    getMyComment();
  }, []);
  return (
    <>
      <div className='content'>
        {/* <div>
          내가 쓴 댓글
        </div> */}
        {list.length > 0?
          <table className='mine'>
            <thead>
            <tr>
              <th>No.</th>
              <th>댓글 내용</th>
              <th>작성 일자</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            <ContentsList
              list={list}
              userInfo={userInfo}
              show='comment'
              handleDelete = {deleteCommentHandler}
            />
          </tbody>
          </table>
          : <div className='no'>작성한 댓글이 없습니다.</div>  
        }
      </div>
    </>
  );
};