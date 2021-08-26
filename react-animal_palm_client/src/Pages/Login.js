import React from 'react';

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
          <button>
            회원가입
          </button>
          <button>
            로그인
          </button>
        </form>
      </center>
    </>
  );
};