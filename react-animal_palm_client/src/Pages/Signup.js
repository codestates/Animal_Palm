import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
export const Signup = () => {
  const [signupInfo,setSignupInfo] = useState({
    id:'',
    password:'',
    email:'',
    mobile:''
  })

  const handleInputValue = (key) => (e) => {
    setSignupInfo({...signupInfo, [key]: e.target.value })
  }

  const signupHandler = () => {
    if(signupInfo.id===''|| signupInfo.password===''){
      alert('아이디와 패스워드는 필수 입니다.')
    }
    else{
    axios
      .post(
        `http://localhost:4000/user/signup`,
        {
          id: signupInfo.id,
          password: signupInfo.password,
          email: signupInfo.email,
          phonenumber: signupInfo.mobile
        }
      )
      .catch(err => {
        alert(err)
      })
    }
  }

  return (
    <div>
        
        <div>
             {/*진행상황*/} 
            <span>1</span>
            <span>2</span>
            <span>3</span>
        </div>
      <center>
        <h1>회원가입</h1>
        <form>
          <div>
            <span>아이디</span>
            <input onChange={handleInputValue('id')} value={signupInfo.id} />
          </div>
          <div>
            <span>비밀번호</span>
            <input type='password' onChange={handleInputValue('password')} value={signupInfo.password}/>
          </div>
          <div>
            <span>이메일</span>
            <input type='email' onChange={handleInputValue('email')} value={signupInfo.email}/>
          </div>
          <div>
            <span>전화번호</span>
            <input type='tel' onChange={handleInputValue('mobile')} value={signupInfo.mobile}/>
          </div>
          
          <div>
          <Link to="/login">
              이미 아이디가 있으신가요?
              </Link>
          </div>
          
          
        </form>
        <button onClick={signupHandler}>
            회원가입
          </button>
      </center>
    </div>
  );
};