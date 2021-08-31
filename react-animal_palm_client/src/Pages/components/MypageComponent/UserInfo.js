import axios from 'axios';
import React, { useState } from 'react';
import { checkPassword, checkEmail, checkPhone } from '../../function/Validatior';
const { test, real } = require('../../Dummy/url');

export const UserInfo = ({
  entireInfo,
  wannaUpdateHandler,
  changeHandler
}) => {
  const [input, setInput] = useState({
    newPassword : '',
    checkPassword : ''
  })
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
    <div className='setting-userinfo'>
      <table>
        <tr>
          <th><span>아이디</span></th>
          <td><span>{entireInfo.user_id}</span></td>
        </tr>
        <tr>
          <th><span>나의 동물</span></th>
          <td><span>{entireInfo.animal_id}</span></td>
        </tr>
        <tr>
          <th><span>비밀번호</span></th>
          <td><input
            name='newPassword'
            type={input.newPassword}
            onChange={handleInputValue}
            placeholder='새 비밀번호'
          /></td>
        </tr>
          <tr><th></th><td>
            <div
              className={checkPassword(input.newPassword)? 'invalid-message hide' : 'invalid-message'}>
            8자 이상, 알파벳과 숫자 및 특수문자(@$!%*#?&) 하나 이상 포함
            </div>
          </td></tr>
        <tr>
          <th><span>비밀번호 확인</span></th>
          <td><input 
            name='checkPassword'
            type='password'
            value={input.checkPassword}
            onChange={handleInputValue}
            placeholder='새 비밀번호 확인'
          /></td>
        </tr>
          <tr><th></th><td>
            <div
              className={isMatch(input.newPassword, input.checkPassword)? 'invalid-message hide' : 'invalid-message'}>
                비밀번호가 일치하지 않습니다.
            </div>
          </td></tr>
        <tr>
          <th><span>휴대전화 </span></th>
          <td><input
            name='phone'
            type='text'
            placeholder={entireInfo.phone_number}
            value={input.phone}
            onChange={handleInputValue}
          /></td>
        </tr>
        <tr><th></th><td>
          <div 
            className={checkPhone(input.phone)? 'invalid-message hide' : 'invalid-message'}>
              숫자만 입력해주세요.
          </div>
        </td></tr>
        <tr>
          <th><span>이메일 </span></th>
          <td><input
            name='email'
            type='email'
            placeholder={entireInfo.email}
            value={input.email}
            onChange={handleInputValue}
          /></td>
        </tr>
          <tr><th></th><td>
            <div
              className={checkEmail(input.email)? 'invalid-message hide' : 'invalid-message'}>
                올바른 이메일 유형을 입력해주세요.
            </div>
          </td></tr>
      </table>
      <div className='setting-button'>
        <button onClick={wannaUpdateHandler}> 취소 </button>
        <button onClick={changeBtnHandler}> 확인 </button>
      </div>
    </div>
  );
};