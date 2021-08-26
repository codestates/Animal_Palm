import React from 'react';
import { Link } from 'react-router-dom'
export const Signup = () => {
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
            <input />
          </div>
          <div>
            <span>비밀번호</span>
            <input type='password'/>
          </div>
          <div>
            <span>이메일</span>
            <input type='email'/>
          </div>
          <div>
            <span>전화번호</span>
            <input type='tel'/>
          </div>
          
          <div>
          <Link to="/login">
              이미 아이디가 있으신가요?
              </Link>
          </div>
          
          <button type='submit'>
            회원가입
          </button>
        </form>
      </center>
    </div>
  );
};
