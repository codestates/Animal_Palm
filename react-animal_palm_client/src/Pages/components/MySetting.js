import React, { useState } from 'react';
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
    setWannaUpdate(!wannaUpdate);
  }
  const allSetHandler = () => {
    setWannaUpdate(false);
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
          <div>
            <UserInfo
              wannaUpdateHandler={wannaUpdateHandler}
              changeHandler={allSetHandler}
            />
          </div>
          <button onClick={deleteButtonHandler}> 회원탈퇴 </button>
          {wannaDelete?
            <div>
              <div>정말 삭제하시겠습니까?</div>
              <button onClick={deleteButtonHandler}>아니요</button>
              <button onClick={deleteMemberHandler}>네</button>
            </div>
            :null}
        </div>
        </>
      : <>{isOpen?
        <div>
          <div>비밀번호를 입력해주세요.</div>
          <input type='password'/>
          <button onClick={openModalHandler}>취소</button>
          <button onClick={wannaUpdateHandler}>확인</button>
        </div>
      : <button onClick={openModalHandler}>회원정보 확인</button>}</>}
      
    </div>
  );
};