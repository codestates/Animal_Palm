import React from 'react';

export const MainContent = ({
  mainContent
}) => {
  return (
    <div className="bubble">
      {mainContent.map((content) => (
        <>
        <h3 key={content.id}>{content.title}</h3>
        <div>{content.userId}</div>
        <div>{content.context}</div>
        </>
      ))}
      <p>
        글 미리보기(제목)
      </p>
    </div>
  );
};