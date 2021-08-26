import React, { useState } from 'react';
import { Modal } from './Modal';
import { UserInfo } from './UserInfo';

export const MySetting = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [wannaUpdate, setWannaUpdate] = useState(false);
  const [wannaDelete, setWannaDelete] = useState(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };
  const wannaUpdateHandler = () => {
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
              wannaUpdateHandler={wannaUpdateHandler}
              changeHandler={allSetHandler}
            />
          </div>
          <button onClick={deleteButtonHandler}> 회원탈퇴 </button>
          {wannaDelete?
            <div>
              <Modal
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
            header='회원정보를 수정하시려면 비밀번호를 입력해주세요'
            noBtnHandler={openModalHandler}
            yesBtnHandler={wannaUpdateHandler}
            yesBtn='확인'
          />
        </div>
      : <button onClick={openModalHandler}>회원정보 확인</button>}</>}
      
    </div>
  );
};