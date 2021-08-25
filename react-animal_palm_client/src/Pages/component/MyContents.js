import React from 'react';
import { ContentsList } from './ContentsList';

export const MyContents = () => {
  const testlist = [
    {id: 1, category:'dog', context: '글제목1', created_At:'2021-08-25'},
    {id: 2, category:'All', context: '글제목2', created_At:'2021-08-25'},
    {id: 3, category:'dog', context: '글제목3', created_At:'2021-08-25'}
  ];
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
                <ContentsList list={testlist}/>
              </tbody>
            </table>
          : <div>작성한 글이 없습니다.</div>
        }
        </div>
      </div>
    </>
  );
};