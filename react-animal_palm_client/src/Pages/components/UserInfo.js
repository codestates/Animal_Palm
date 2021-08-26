import React from 'react';
import { cheackPassword, checkEmail, checkPhone } from '../function/Validatior';

export const UserInfo = ({ wannaUpdateHandler, changeHandler }) => {
  const changeBtnHandler= () => {
    changeHandler()
  }
  const isMatch = (password1, password2) => {
    return password1 === password2;
  }
  return (
    <div>
      <div>
          <span>아이디 </span>
          <span>*유저 아이디*</span>
        </div>
        <div>
          <span>나의 동물 </span>
          <span>*동물이름*</span>
        </div>
        <div>
          <span>새 비밀번호 </span>
          <input type='password'/>
          <div>8자 이상, 알파벳과 숫자 및 특수문자(@$!%*#?&) 하나 이상 포함</div>
        </div>
        <div>
          <span>비밀번호 확인 </span>
          <input type='password'/>
          <div>비밀번호가 일치하지 않습니다.</div>
        </div>
        <div>
          <span>휴대전화 </span>
          <input type='text' value='현재 휴대폰 번호'/>
          <div>숫자와 - 만 가능합니다.</div>
        </div>
        <div>
          <span>이메일 </span>
          <input type='email' value='현재 이메일주소'/>
          <div>올바른 이메일을 적어주세요.</div>
        </div>
        <div>
          <button onClick={wannaUpdateHandler}> 취소 </button>
          <button onClick={changeBtnHandler}> 확인 </button>
          </div>
    </div>
  );
};