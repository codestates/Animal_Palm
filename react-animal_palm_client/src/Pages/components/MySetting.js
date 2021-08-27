import axios from 'axios';
import React, { useState } from 'react';
import { Modal } from './Modal';
import { UserInfo } from './UserInfo';

export const MySetting = ({
  userInfo
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [wannaUpdate, setWannaUpdate] = useState(false);
  const [wannaDelete, setWannaDelete] = useState(false);
  const [entireInfo, setEntireInfo] = useState(null);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };
  const wannaUpdateHandler = () => {
    const userinfoURL = 'http://3.34.133.160:4000/mypage/info';
    axios.get(userinfoURL, {
      headers : {
        'Content-type' : 'application/json'
      },
      withCredentials : true
    })
    .then((res) => {
      //! 유저 풀 정보 받아옴
      const message = res.data.message
      if(message === 'ok') {
        // 작업
        const {id, animalName, email, phone} = res.data.user_info;
        const info = {id, animalName, email, phone};
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
    alert('탈퇴 되었습니다. => api 연결 후 홈으로 redirect')
  }
  const deleteButtonHandler = () => {
    setWannaDelete(!wannaDelete);
  }
  
  return (
    <div>
      {wannaUpdate?
        <>
        <div>
          <div >
            <UserInfo
              entireInfo = {entireInfo}
              wannaUpdateHandler={wannaUpdateHandler}
              changeHandler={allSetHandler}
            />
          </div>
          <button onClick={deleteButtonHandler}> 회원탈퇴 </button>
          {wannaDelete?
            <div>
              <Modal
                userInfo = {userInfo}
                header='정말 탈퇴하시겠습니까?'
                noBtnHandler={deleteButtonHandler}
                yesBtnHandler={deleteMemberHandler}
                yesBtn='회원탈퇴'
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
      : <button onClick={openModalHandler}>회원정보 확인</button>}</>}
      
    </div>
  );
};