import React from 'react';
import { useHistory } from 'react-router';
import { test } from '../../Dummy/url';
import Board_post from '../Board_post';

export const ContentsList = ({
  userInfo,
  list,
  show, // 내가 쓴 글인지 댓글인지 구분
  handleDelete
}) => {
  const history = useHistory();
  const clickPostHandler = (postId, animalId) => {
    history.push({
      pathname:'board/post',
      state:{
        postId: postId,
        animalId: animalId
      }
    })
  }
  return (
    <>
          {list.map((item) => (
            <tr
              className='row'
              key={item.id}
              onClick={show === 'post'? ()=>clickPostHandler(item.id, item.animalId):''}
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
                    className='delete-btn'
                    onClick={() => handleDelete(item.id)}>삭제</button>
                </td>
              : null}
            </tr>
          ))}
    </>
  );
};