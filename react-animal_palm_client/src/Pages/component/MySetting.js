import React, { useState } from 'react';

export const MySetting = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [wannaUpdate, setWannaUpdate] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };
  const handleWannaUpdate = () => {
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
  // setting 탭에 들어오면
  // 회원정보 확인 버튼
    // 클릭 ->  비밀번호 확인하는 모달이 뜬다
      // 취소 -> 모달을 끈다
      // 비밀번호 입력 후 확인
        // setting 탭에 내 정보들이 나열되고 수정할 수 있다
          // 유효성 검사!
        // 다 수정한 뒤 확인 누르면 정보 변경
  return (
    <div>
      {wannaUpdate?
        <>
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
        </div>
        <div>
          <span>비밀번호 확인 </span>
          <input type='password'/>
        </div>
        <div>
          <span>이메일 </span>
          <input type='email' placeholder='현재 이메일주소'/>
        </div>
        <div>
          <button onClick={handleWannaUpdate}> 취소 </button>
          <button onClick={allSetHandler}> 확인 </button>
          <button onClick={deleteMemberHandler}> 회원탈퇴 </button>
        </div>
        </>
      : <>{isOpen?
        <div>
          <div>비밀번호를 입력해주세요.</div>
          <input type='password'/>
          <button onClick={openModalHandler}>취소</button>
          <button onClick={handleWannaUpdate}>확인</button>
        </div>
      : <button onClick={openModalHandler}>회원정보 확인</button>}</>}
      
    </div>
  );
};