import axios from 'axios';
import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
export function Login({
  handleUserInfo
}) {
  const history = useHistory();
  const [loginInfo, setLoginInfo] = useState({
    id:'',
    password:''
  })
  const handleInputValue = (e) => {
    setLoginInfo({[e.target.name] : e.target.value})
    console.log(loginInfo)
  }
  const LoginHandler = () => {
    const signInURl = 'http://localhost:4000/user/signin';
    axios.post(signInURl,
      { loginInfo }, 
      { headers : {'Content-type' : 'application/json'},
        withCredentials : true }
      )
    .then((res) => {
      const message = res.data.message;

      if(message === 'ok') {
        const userInfo = {
          animalName : res.data.animalName,
          accessToken : res.data.token
        }
        handleUserInfo(userInfo);
        history.push('/')
      } else {
        alert('아이디 혹은 비밀번호를 잘못 입력하셨습니다.')
        history.push('/')
      }
    })
    .catch((err) => alert(err))
  }

  return (
    <>
      <div>
        <h1>Sign In</h1>
        <div>
          <div>
            <span>아이디</span>
            <input
              name='id'
              type='text'
              value={loginInfo.id}
              onChange={handleInputValue}
            />
          </div>
          <div>
            <span>비밀번호</span>
            <input
              name = 'password'
              type='password'
              value={loginInfo.password}
              onChange={handleInputValue}
            />
          </div>
          <Link to="signup">
          <button>
            회원가입
          </button>
          </Link>
          {/* <Link to="/"> */}
          <button onClick={LoginHandler}>
            로그인
          </button>
          {/* </Link> */}
        </div>
      </div>
    </>
  );
};