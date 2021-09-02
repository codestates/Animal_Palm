import './Navigationbar.css';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import logo from '../../images/logo.PNG'
const { test, real } = require('../Dummy/url');


export default function Navigaitionbar({ isLogin,handleLogout }) {
  const history = useHistory();
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(()=>{
      window.addEventListener('scroll', updateScroll);
  });
  const logoutHandler = () => {
    const signOutURL = `${test}/user/signout`;
    axios.put(signOutURL, null, { withCredentials : true })
    .then((res) => {
      const message = res.data;
      if(message === 'successfully signout') {
        alert('로그아웃 되었습니다.');
        history.push('/');
      } else {
        alert('잘못된 접근입니다.');
        return;
      }
    })
    .catch((err) => alert(err))
    handleLogout();
  }
  
  return (
    <nav className="Navigationbar" >
      <ul className="nav-container">
        <Link to='/'>
          <li>
            <img className="logo-img" src={logo} alt="" />
            </li>
        </Link>
        <a className='right-top'>
        {isLogin? 
          <span className="right-top-children">
            <Link to="/mypage">
              <li><a>MYPAGE</a></li>
            </Link>
            <a>
              <li><a onClick={logoutHandler}>LOGOUT</a></li>
            </a>
          </span>
         :<span className="right-top-children">
            <Link to='/login'>
              <li><a>LOGIN</a></li>
            </Link>
            <Link to='/signup'>
              <li><a>SIGNUP</a></li>
            </Link>
          </span>
        }
        </a>
      </ul>
    </nav>
  );
}
