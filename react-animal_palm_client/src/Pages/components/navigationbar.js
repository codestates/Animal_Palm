import './Navigationbar.css';
import { Link } from "react-router-dom";

function Navigaitionbar({
  isLogin
}) {
  
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
            <li><a>LOGOUT</a></li>
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
