import axios from 'axios';
import React, { useState } from 'react';
import '../../CSS/Modal.css'
import { hash } from '../../function/Hasing';

export const Modal = ({
  userInfo,
  header,
  yesBtn,
  noBtnHandler,
  wannaUpdateHandler,
  deleteMemberHandler
}) => {
  const [pwInput, setPwInput] = useState('');
  const passwordInputHandler = (e) => {
    setPwInput(e.target.value)
  }
  const yesBtnHandler = () => {
    if(!pwInput) {
      alert('비밀번호를 입력해주세요');
      return;
    }
    const checkPwURL = `${process.env.REACT_APP_API_URL}/mypage/passwd`;
    const password = hash(pwInput);
    axios.post(checkPwURL, { password : password }, {
      headers : { 'Content-type' : 'application/json' },
      withCredentials : true
    })
    .then((res) => {
      const message = res.data;
      if(message === 'correct passwd') {
        // 제대로 받아온 경우
        if(yesBtn === '확인') {
          wannaUpdateHandler();
        }
        else if(yesBtn === '탈퇴') {
          deleteMemberHandler();
        }
      } else if(res.status === 202){
        // 비밀번호 틀린 경우
        alert('비밀번호가 일치하지 않습니다.')
        return;
      } else {
        alert('잘못된 접근입니다.')
        return;
      }
    })
    .catch((err) => alert(err))
  }
  return (
    <div className='modal'>
      <section>
        <div className='header'>
          {header}
        </div>
        <div className='message'>비밀번호를 입력해주세요.</div>
        <input
          type='password'
          value={pwInput}
          onChange={passwordInputHandler}  
        />
        <footer>
          <button onClick={noBtnHandler}>취소</button>
          <button onClick={yesBtnHandler}>{yesBtn}</button>
        </footer>
      </section>
    </div>
  );
};