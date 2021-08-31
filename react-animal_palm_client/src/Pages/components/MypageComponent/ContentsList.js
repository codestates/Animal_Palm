import React from 'react';

export const ContentsList = ({
  list,
  show, // 내가 쓴 글인지 댓글인지 구분
  handleDelete
}) => {
  return (
    <>
          {list.map((item) => (
            <tr className='row' key={item.id}>
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