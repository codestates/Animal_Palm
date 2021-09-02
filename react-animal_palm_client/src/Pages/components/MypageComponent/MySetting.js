import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Modal } from './Modal';
import { UserInfo } from './UserInfo';
import '../../CSS/MySetting.css'

export const MySetting = ({
  userInfo,
  handleLogout
}) => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [wannaUpdate, setWannaUpdate] = useState(false);
  const [wannaDelete, setWannaDelete] = useState(false);
  const [entireInfo, setEntireInfo] = useState({
    user_id : '',
    animal_id : '',
    email : '',
    phoneNumber : 0
  });

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };
  const wannaUpdateHandler = () => {
    const userinfoURL = `${process.env.REACT_APP_API_URL}/mypage/info`;
    axios.get(userinfoURL, { withCredentials : true })
    .then((res) => {
      //! 유저 풀 정보 받아옴
      const message = res.data.message;
      if(message === 'ok') {
        // 작업
        const {user_id, animal_id, email, phone_number} = res.data.data;
        const info = {user_id, animal_id, email, phoneNumber : phone_number, animalName : userInfo.animalName};
        setEntireInfo(info);
      } else {
        // 에러
        alert('비밀번호 오류')
      }
    })
    setIsOpen(false)
    setWannaDelete(false)
    setWannaUpdate(!wannaUpdate);
  }
  const allSetHandler = () => {
    setWannaUpdate(false);
    setWannaDelete(false)
    alert('회원정보가 변경되었습니다.')
  }
  const deleteMemberHandler = () => {
    const deleteUserURL = `${process.env.REACT_APP_API_URL}/user/userDelete`;
    axios.delete(deleteUserURL, { withCredentials : true })
    .then((res) => {
      const message = res.data;
      if(message === 'ok') {
        alert('탈퇴 되었습니다.');
        handleLogout();
        history.push('/') // 홈으로 이동
      } else {
        alert('잘못된 접근입니다.')
        return;
      }
    })
    .catch((err) => alert(err))
  }
  const deleteButtonHandler = () => {
    setWannaDelete(!wannaDelete);
  }
  
  return (
    <>
      <div className='content'>
        {wannaUpdate?
          <>
          <div id='info-wrap'>
            <div className='setting-container'>
              <UserInfo
                entireInfo = {entireInfo}
                wannaUpdateHandler={wannaUpdateHandler}
                changeHandler={allSetHandler}
              />
            </div>
            <button
              className='delete-member'
              onClick={deleteButtonHandler}> 회원탈퇴 </button>
            {wannaDelete?
              <div>
                <Modal
                  userInfo = {userInfo}
                  header='정말 탈퇴하시겠습니까?'
                  noBtnHandler={deleteButtonHandler}
                  deleteMemberHandler={deleteMemberHandler}
                  yesBtn='탈퇴'
                />
              </div>
              :null}
          </div>
          </>
        : <>{isOpen?
          <div>
            <Modal
              userInfo = {userInfo}
              header='회원정보를 수정하시려면 비밀번호를 입력해주세요'
              noBtnHandler={openModalHandler}
              wannaUpdateHandler={wannaUpdateHandler}
              yesBtn='확인'
            />
          </div>
        : <button
          className='button'
            onClick={openModalHandler}>
              회원정보 확인
          </button>}</>}
      </div>
    </>
  );
};