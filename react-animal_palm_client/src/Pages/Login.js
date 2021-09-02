import axios from 'axios';
import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import './CSS/Login.css';
import { hash } from './function/Hasing';

export function Login({
  handleUserInfo
}) {
  const history = useHistory();
  const [loginInfo, setLoginInfo] = useState({
    userId:'',
    password:''
  })
  const handleInputValue = (e) => {
    setLoginInfo({...loginInfo, [e.target.name] : e.target.value})
    // console.log(loginInfo)
  }
  const LoginHandler = () => {
    if(loginInfo.userId === '' || loginInfo.password === '') {
      alert('아이디와 비밀번호를 제대로 입력해주세요')
      return;
    }
    const sendInfo = { userId : loginInfo.userId, password : hash(loginInfo.password)}; //! 26번째 줄 이거로 수정
    const signInURl = `${process.env.REACT_APP_API_URL}/user/signin`;
    axios.post(signInURl, loginInfo, {
      headers : { 'Content-type' : 'application/json' },
      withCredentials : true
    })
    .then((res) => {
      const message = res.data.message;

      if(message === 'ok') {
        const userInfo = {
          animalName : res.data.animalName,
          animalId : res.data.animalId
        }
        handleUserInfo(userInfo);
        history.push('/')
      }
    })
    .catch((err) => {
      if(err.response.status === 401) {
        alert('아이디 혹은 비밀번호를 잘못 입력하셨습니다.')
        return;
      }
    })
  }
  const goToSignUpHandler = () => {
    history.push('/signup')
  }

  return (
    <div className='wrapper'>
      <div>
        <div id='title' onClick={() => history.push('/')}>Animal Palm</div>
        <div>
          <div className='input-box'>
            <label>ID</label>
            <input
              name='userId'
              type='text'
              value={loginInfo.userId}
              onChange={handleInputValue}
            />
          </div>
          <div className='input-box'>
            <label>Password</label>
            <input
              name = 'password'
              type='password'
              value={loginInfo.password}
              onChange={handleInputValue}
            />
          </div>
        </div>
          <div className='container'>
            <a herf='#' className='button' onClick={LoginHandler}>
              로그인
            </a>
            <a className='button' onClick={goToSignUpHandler}>
              회원가입
            </a>
          </div>
        </div>
    </div>
  );
};