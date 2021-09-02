import React from 'react';
import { profileImages } from '../../../assets/ProfileImage'

export const Profile = ({
  userInfo
}) => {
  // 프로필 동물사진
  // 동물이름
  return (
    <div className='profile-container'>
      <div className='picture'>
        <img key={profileImages[userInfo.animalId].id} src = {profileImages[userInfo.animalId].src} alt={profileImages[userInfo.animalId].name}/>
        {/* {동물사진들이랑 동물 이름 파일 생기면 위에서 props로 받아 내려온 내용 표시} */}
      </div>
      <div className='animal-name'>
        {userInfo.animalName}
      </div>
    </div>
  );
};