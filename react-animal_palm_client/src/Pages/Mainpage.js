import './Mainpage.css';
import Navigaitionbar from './components/navigationbar';
import { useState,useEffect } from 'react';
import { MainFrame } from './components/MainPageComponent/MainFrame';
import { Link } from 'react-router-dom';



export default function Mainpage({
  isLogin,
  handleLogout
}) {

  const [index,setIndex] = useState(0)
  
  
  return (
		<>
      <div className="Navigaitionbar">
      <Navigaitionbar
        isLogin={isLogin}
        handleLogout={handleLogout}
      />
      </div>
			<div className="Mainpage global-width">   
        {isLogin?
					<Link to='/board'>
						<div className='welcome'>환영합니다</div>
					</Link>
				: <MainFrame/>}
			</div>
		</>
  );
}


