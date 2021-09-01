import './Mainpage.css';
import Navigaitionbar from './components/navigationbar';
import { useState,useEffect } from 'react';
import { MainFrame } from './components/MainPageComponent/MainFrame';
import { Link, useHistory } from 'react-router-dom';



export default function Mainpage({
  isLogin,
  handleLogout
}) {
  const history = useHistory()
  return (
		<>
      <div className="Navigaitionbar">
      <Navigaitionbar
        isLogin={isLogin}
        handleLogout={handleLogout}
      />
      </div>
			<div className="mainpage global-width">   
        {isLogin?
            <div><br></br><br></br><br></br><br></br><br></br><br></br>
						<span className='welcome' onClick={()=>history.push('/board')}>환영합니다</span>
				</div>
				: <MainFrame/>}
			</div>
		</>
  );
}


