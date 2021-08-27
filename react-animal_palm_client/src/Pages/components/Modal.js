import axios from 'axios';
import React, { useState } from 'react';
import './Modal.css'

export const Modal = ({
  userInfo,
  header,
  yesBtn,
  noBtnHandler,
  wannaUpdateHandler
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
    const checkPwURL = 'http://3.34.133.160:4000/mypage/passwd';
    axios.post(checkPwURL,
      { pwInput },
      { headers : {
          'Content-type' : 'application/json',
          Authorization : `Bearer ${userInfo.accessToken}`
        }, withCredentials : true
      })
      .then((res) => {
        const message = res.data.message;
        if(message = 'correct passwd') {
          // 제대로 받아온 경우
          wannaUpdateHandler();
        } else {
          // 비밀번호 틀린 경우
          alert('비밀번호가 일치하지 않습니다.')
          return;
        }
      })
  }
  return (
    <div className='modal'>
      <section>
        <div className='header'>
          {header}
        </div>
        <div>비밀번호를 입력해주세요.</div>
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