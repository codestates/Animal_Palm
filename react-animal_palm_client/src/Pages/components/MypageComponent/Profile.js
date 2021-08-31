import React from 'react';
import testImage from '../../Dummy/test_foot.png'

export const Profile = ({
  userInfo
}) => {
  // 프로필 동물사진
  // 동물이름
  return (
    <div className='profile-container'>
      <div className='picture'>
        <img src = {testImage} alt='profile'/>
        {/* {동물사진들이랑 동물 이름 파일 생기면 위에서 props로 받아 내려온 내용 표시} */}
      </div>
      <div className='animal-name'>
        {userInfo.animalName}
      </div>
    </div>
  );
};
// ! 완료