import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ContentsList } from './ContentsList';

export const MyComments = ({
  userInfo
}) => {
  // const testComments = [
  //   {id : 1, context : '테스트 댓글내용1', post_id: 1, created_At : '2021-08-25'},
  //   {id : 2, context : '테스트 댓글내용2', post_id: 2, created_At : '2021-08-25'},
  //   {id : 3, context : '테스트 댓글내용3', post_id: 3, created_At : '2021-08-25'},
  //   {id : 4, context : '테스트 댓글내용4', post_id: 4, created_At : '2021-08-25'},
  //   {id : 5, context : '테스트 댓글내용5', post_id: 5, created_At : '2021-08-25'},
  //   {id : 6, context : '테스트 댓글내용6', post_id: 6, created_At : '2021-08-25'}
  // ];
  const [list, setList] = useState([]);
  const getMyComment = () => {
    const myCommentURL = 'http://3.34.133.160:4000/mypage/comment';
    axios.get(myCommentURL)
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
    const deleteCommentURL = `http://3.34.133.160:4000/comments/${commentId}/`
    axios.delete(deleteCommentURL)
    .then((res) => {
      const message = res.data.message;
      if(message === 'ok') {
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
  }, [list]);
  return (
    <>
      <div>
        내가 쓴 댓글
      </div>
      {list.length > 0?
        <table>
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
            show='comment'
            handleDelete = {deleteCommentHandler}
          />
        </tbody>
        </table>
        : <div>작성한 댓글이 없습니다.</div>  
      }
    </>
  );
};