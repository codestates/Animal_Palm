import React, { useState } from 'react';
import { Profile } from './components/Profile';
import { MyContents } from './components/MyContents';
import { MyComments } from './components/MyComments';
import { MySetting } from './components/MySetting';

export const Mypage = ({
  userInfo
}) => {
  const [currentTab, setCurrentTab] = useState(0);
  const tabMenu = [
    {name : '내가 쓴 글', component: <MyContents userInfo={userInfo}/>},
    {name : '내가 쓴 댓글', component: <MyComments userInfo={userInfo}/>},
    {name : '회원정보 수정', component: <MySetting userInfo = {userInfo}/>}
  ];
  const selectMenuHandler = (index) => {
    setCurrentTab(index);
  };
  return (
    <>
    <div>
      <Profile
        userInfo = {userInfo}
      />
    </div>
    <div>
    {tabMenu.map((tab, i) => (
        <li
        key={i}
        className={currentTab === i? "submenu focused": "submenu"}
        onClick={()=>selectMenuHandler(i)}
        >
          {tab.name}
        </li>
      ))}
    </div>
    {tabMenu[currentTab].component}
    </>
  );
};