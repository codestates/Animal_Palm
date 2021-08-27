import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ContentsList } from './ContentsList';

export const MyContents = ({
  userInfo
}) => {
  const testlist = [
    {id: 1, category:'dog', context: '글제목1', created_At:'2021-08-25'},
    {id: 2, category:'All', context: '글제목2', created_At:'2021-08-25'},
    {id: 3, category:'dog', context: '글제목3', created_At:'2021-08-25'}
  ];
  const [list, setList] = useState([]);
  const getMyContent = () => {
    const myContentURL = 'http://3.34.133.160:4000/mypage/context';
    axios.get(myContentURL)
    .then((res) => {
      const message = res.data.message;
      if(message === 'ok') {
        // keep going
        setList(res.data.data);
        if(list.length === 0) {
          // ! 작성한 글이 없습니다 보여주기 => state 하나 더 만들어서 이게 true면 글이 없습니다?
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
      <div>
        <div>
          내가 쓴 글
        </div>
        <div>
          {testlist.length > 0?
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>게시판</th>
                  <th>글 목록</th>
                  <th>작성 일자</th>
                </tr>
              </thead>
              <tbody>
                <ContentsList
                  list={list}
                />
              </tbody>
            </table>
          : <div>작성한 글이 없습니다.</div>
        }
        </div>
      </div>
    </>
  );
};