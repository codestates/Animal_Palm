import React from 'react';

export const ContentsList = ({ list }) => {
  return (
    <>
          {list.map((comment) => (
            <tr key={comment.id}>
              <td>{comment.id}</td>
              {'category' in comment?
                <td>{comment.category}</td>
                : null
              }
              <td>{comment.context}</td>
              <td>{comment.created_At}</td>
            </tr>
          ))}
    </>
  );
};