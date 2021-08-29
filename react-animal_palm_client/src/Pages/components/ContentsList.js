import React from 'react';

export const ContentsList = ({
  list,
  show, // 내가 쓴 글인지 댓글인지 구분
  handleDelete
}) => {
  return (
    <>
          {list.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              {'category' in item?
                <td>{item.category}</td>
                : null
              }
              <td>{item.context}</td>
              <td>{item.created_At}</td>
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