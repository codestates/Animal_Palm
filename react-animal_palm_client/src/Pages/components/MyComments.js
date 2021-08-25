import React from 'react';
import { ContentsList } from './ContentsList';

export const MyComments = () => {
  const testComments = [
    {id : 1, context : '테스트 댓글내용1', post_id: 1, created_At : '2021-08-25'},
    {id : 2, context : '테스트 댓글내용2', post_id: 2, created_At : '2021-08-25'},
    {id : 3, context : '테스트 댓글내용3', post_id: 3, created_At : '2021-08-25'},
    {id : 4, context : '테스트 댓글내용4', post_id: 4, created_At : '2021-08-25'},
    {id : 5, context : '테스트 댓글내용5', post_id: 5, created_At : '2021-08-25'},
    {id : 6, context : '테스트 댓글내용6', post_id: 6, created_At : '2021-08-25'}
  ];
  return (
    <>
      <div>
        내가 쓴 댓글
      </div>
      {testComments.length > 0?
        <table>
          <thead>
          <tr>
            <th>No.</th>
            <th>댓글 내용</th>
            <th>작성 일자</th>
          </tr>
        </thead>
        <tbody>
          <ContentsList list={testComments}/>
        </tbody>
        </table>
        : <div>작성한 댓글이 없습니다.</div>  
      }
    </>
  );
};