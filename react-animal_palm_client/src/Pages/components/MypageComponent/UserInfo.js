import axios from 'axios';
import React, { useState } from 'react';
import { cheackPassword, checkEmail, checkPhone } from '../../function/Validatior';
const { test, real } = require('../../Dummy/url');

export const UserInfo = ({
  entireInfo,
  wannaUpdateHandler,
  changeHandler
}) => {
  const [input, setInput] = useState(null)
  const handleInputValue = (e) => {
    setInput({...input, [e.target.name] : e.target.value })
  }
  const changeBtnHandler= () => {
    // input 값이 ''가 아닌애들만 보내야함.
    const data = {};
    Object.keys(input).forEach((el) => {
      if(input[el] !== '') {
        data[el] = input[el]
      }
    });
    const udpateInfoURL = `${test}/mypage/info`
    // patch 요청!
    axios.patch(udpateInfoURL, data, {
      headers : { 'Content-type' : 'application/json' },
      withCredentials : true
    })
    .then((res) => {
      setInput({...input, data});
      changeHandler();
    })
    .catch((err) => alert(err))
  }
  const isMatch = (password1, password2) => {
    return password1 === password2;
  }
  return (
    <div>
      <div>
          <span>아이디 </span>
          <span>{entireInfo.id}</span>
        </div>
        <div>
          <span>나의 동물 </span>
          <span>{entireInfo.animalName}</span>
        </div>
        <div>
          <span>새 비밀번호* </span>
          <input
            name='newPassword'
            type={input.newPassword}
            onChange={handleInputValue}
          />
          <div>8자 이상, 알파벳과 숫자 및 특수문자(@$!%*#?&) 하나 이상 포함</div>
        </div>
        <div>
          <span>비밀번호 확인* </span>
          <input 
            name='checkPassword'
            type='password'
            value={input.checkPassword}
            onChange={handleInputValue}
          />
          <div>비밀번호가 일치하지 않습니다.</div>
        </div>
        <div>
          <span>휴대전화 </span>
          <input
            name='phone'
            type='text'
            placeholder={entireInfo.phone}
            value={input.phone}
            onChange={handleInputValue}
          />
          <div>숫자와 - 만 가능합니다.</div>
        </div>
        <div>
          <span>이메일 </span>
          <input
            name='email'
            type='email'
            placeholder={entireInfo.email}
            value={input.email}
            onChange={handleInputValue}
          />
          <div>올바른 이메일을 적어주세요.</div>
        </div>
        <div>
          <button onClick={wannaUpdateHandler}> 취소 </button>
          <button onClick={changeBtnHandler}> 확인 </button>
          </div>
    </div>
  );
};