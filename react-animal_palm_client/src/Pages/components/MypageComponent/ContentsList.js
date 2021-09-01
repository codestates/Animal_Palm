import React from 'react';
import { useHistory } from 'react-router';
import BoardPost from '../BoardComponents/BoardPost';


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
  } //onClick={show==='comment'?() => clickPostHandler(item.postId, userInfo.animalId): null}
  return (
    <>
          {list.map((item) => (
            <tr
              className='row'
              key={item.id}
              onClick={show === 'post'? ()=>clickPostHandler(item.id, item.animalId)
              : null}
            >
              <td onClick={show==='comment'?() => clickPostHandler(item.postId, userInfo.animalId): null}>{item.id}</td>
              {show === 'post'?
                <td>{item.animalId}</td>
                : null
              }
              <td onClick={show==='comment'?() => clickPostHandler(item.postId, userInfo.animalId): null}>{show === 'post'? item.title:item.content}</td>
              <td onClick={show==='comment'?() => clickPostHandler(item.postId, userInfo.animalId): null}>{item.createdAt}</td>
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