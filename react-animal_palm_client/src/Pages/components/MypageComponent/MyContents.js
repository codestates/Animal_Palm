import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ContentsList } from './ContentsList';
const {test, real} = require('../../Dummy/url')

export const MyContents = ({
  userInfo
}) => {
  // const testlist = [
  //   {id: 1, category:'dog', context: '글제목1', created_At:'2021-08-25'},
  //   {id: 2, category:'All', context: '글제목2', created_At:'2021-08-25'},
  //   {id: 3, category:'dog', context: '글제목3', created_At:'2021-08-25'}
  // ];
  const [list, setList] = useState([]);
  const getMyContent = () => {
    const myContentURL = `${test}/mypage/content`;
    axios.get(myContentURL, { withCredentials : true })
    .then((res) => {
      const message = res.data.message;
      if(message === 'ok') {
        // keep going
        setList(res.data.data);
        if(list.length === 0) {
          return;
        }
      } else {
        alert('잘못된 접근입니다.')
        return;
      }
    })
  }
  useEffect(() => {
    getMyContent()
  }, [])
  return (
    <>
      <div className='content'>
        {/* <div>
          내가 쓴 글
        </div> */}
          {list.length > 0?
            <table className='mine'>
              <thead>
                <tr>
                  <th>글 번호</th>
                  <th>게시판</th>
                  <th>글 목록</th>
                  <th>작성일</th>
                </tr>
              </thead>
              <tbody>
                <ContentsList
                  list={list}
                  show='post'
                />
              </tbody>
            </table>
          : <div className='no'>작성한 글이 없습니다.</div>
        }
      </div>
    </>
  );
};