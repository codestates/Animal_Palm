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
      </div>
      <div className='animal-name'>
        {userInfo.animalName}
      </div>
    </div>
  );
};