import React from 'react';
import './Modal.css'

export const Modal = ({
  header,
  yesBtn,
  noBtnHandler,
  yesBtnHandler
}) => {
  return (
    <div className='modal'>
      <section>
        <div className='header'>
          {header}
        </div>
        <div>비밀번호를 입력해주세요.</div>
        <input type='password'/>
        <footer>
          <button onClick={noBtnHandler}>취소</button>
          <button onClick={yesBtnHandler}>{yesBtn}</button>
        </footer>
      </section>
    </div>
  );
};