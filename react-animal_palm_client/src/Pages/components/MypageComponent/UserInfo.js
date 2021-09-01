import axios from 'axios';
import React, { useState } from 'react';
import { hash } from '../../function/Hasing';
import { checkPassword, checkEmail, checkPhone } from '../../function/Validatior';

export const UserInfo = ({
  entireInfo,
  wannaUpdateHandler,
  changeHandler
}) => {
  const [input, setInput] = useState({
    newPassword : '',
    checkPassword : '',
    email :'',
    phoneNumber : '',
  })
  const isMatch = (password1, password2) => {
    return password1 === password2;
  }
  const handleInputValue = (e) => {
    setInput({...input, [e.target.name] : e.target.value })
  }
  const changeBtnHandler= () => {
    // input 값이 ''가 아닌애들만 보내야함.
    const data = {};
    if(input.newPassword !== '') {
      if(!checkPassword(input.newPassword)) {
        alert('비밀번호가 유효하지 않습니다.');
        return;
      }
      if(!isMatch(input.newPassword, input.checkPassword)){
        alert('비밀번호가 일치하지 않습니다.');
        return;
      }
      data['password'] = input.newPassword; //! hash(input.newPassword);
    }
    if(input.email !== '') {
      if(!checkEmail(input.email)) {
        alert('이메일이 유효하지 않습니다.');
        return;
      }
      data['email'] = input.email;
    }
    if(input.phoneNumber !== '') {
      if(!checkPhone(input.phoneNumber)) {
        alert('전화번호가 유효하지 않습니다.');
        return;
      }
      data['phoneNumber'] = input.phoneNumber;
    }
    const udpateInfoURL = `${process.env.REACT_APP_API_URL}/mypage/info`
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
  return (
    <div className='setting-userinfo'>
      <table>
        <tr>
          <th><span>아이디</span></th>
          <td className='fixed'><span>{entireInfo.user_id}</span></td>
        </tr>
        <tr><th></th><td>
            <div className='hide'>
            아이디는 고정입니다.
            </div>
          </td></tr>
        <tr>
          <th><span>나의 동물</span></th>
          <td className='fixed'><span>{entireInfo.animalName}</span></td>
        </tr>
        <tr><th></th><td>
            <div className='hide'>
            동물은 고정입니다.
            </div>
          </td></tr>
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
            name='phoneNumber'
            type='text'
            placeholder={entireInfo.phoneNumber}
            value={input.phoneNumber}
            onChange={handleInputValue}
          /></td>
        </tr>
        <tr><th></th><td>
          <div 
            className={checkPhone(input.phoneNumber) || input.phoneNumber === ''? 'invalid-message hide' : 'invalid-message'}>
              연락처를 정확히 입력해주세요.
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
              className={checkEmail(input.email) || input.email === ''? 'invalid-message hide' : 'invalid-message'}>
                올바른 이메일을 입력해주세요.
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