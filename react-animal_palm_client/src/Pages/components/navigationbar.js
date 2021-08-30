import './Navigationbar.css';
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
const { test, real } = require('../Dummy/url');

function Navigaitionbar({
  isLogin,
  handleLogout
}) {
  const history = useHistory();
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
    <nav className="Navigationbar">
      <ul className="nav-container">
        <Link to='/'>
          <li><a className="logo">logo</a></li>
          </Link>
        <a className='right-top'>
          {isLogin? 
          <>
            <Link to="/mypage">
            <li><a>MYPAGE</a></li>
            </Link>
            <li><a onClick={logoutHandler}>LOGOUT</a></li>
          </>
        : <>
          <Link to='/login'>
          <li><a>LOGIN</a></li>
          </Link>
          <Link to='/signup'>
          <li><a>SIGNUP</a></li>
          </Link>
        </>
        }
        </a>
      </ul>
    </nav>
  );
}

export default Navigaitionbar;
