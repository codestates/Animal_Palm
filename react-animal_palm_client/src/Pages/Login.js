import React from 'react';
import {Link} from "react-router-dom";
export function Login() {
  return (
    <>
      <center>
        <h1>Sign In</h1>
        <form>
          <div>
            <span>아이디</span>
            <input/>
          </div>
          <div>
            <span>비밀번호</span>
            <input
              type='password'/>
          </div>
          <Link to="signup">
          <button>
            회원가입
          </button>
          </Link>
          <Link to="/">
          <button>
            로그인
          </button>
          </Link>
        </form>
      </center>
    </>
  );
};