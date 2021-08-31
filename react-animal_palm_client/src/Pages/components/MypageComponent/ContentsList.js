import React from 'react';
import { test } from '../../Dummy/url';
import Board_post from '../Board_post';

export const ContentsList = ({
  userInfo,
  list,
  show, // 내가 쓴 글인지 댓글인지 구분
  handleDelete
}) => {
  const clickPostHandler = () => {
    <Board_post
      animalId={userInfo.animalName}
      server={test}
    />
  }
  return (
    <>
          {list.map((item) => (
            <tr
              className='row'
              key={item.id}
              onClick={show === 'post'? clickPostHandler:''}
            >
              <td>{item.id}</td>
              {show === 'post'?
                <td>{item.animalId}</td>
                : null
              }
              <td>{show === 'post'? item.title:item.content}</td>
              <td>{item.createdAt}</td>
              {show === 'comment'?
                <td>
                  <button
                    onClick={() => handleDelete(item.id)}>삭제</button>
                </td>
              : null}
            </tr>
          ))}
    </>
  );
};