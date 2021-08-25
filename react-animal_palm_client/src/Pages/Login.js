import React from 'react';

export const Login = () => {
  return (
    <div>
      <center>
        <h1>로그인</h1>
        <form>
          <div>
            <span>아이디</span>
            <input />
          </div>
          <div>
            <span>비밀번호</span>
            <input
              type='password'/>
          </div>
          <button>
            로그인
          </button>
          <button>
            회원가입
          </button>
        </form>
      </center>
    </div>
  );
};
