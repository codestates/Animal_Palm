import './Navigationbar.css';
import { Link } from "react-router-dom";

function Navigaitionbar({
  isLogin,
  handleLogout
}) {
  const logoutHandler = () => {
    // ajax 요청!!
    // ! 결정)
    // 여기서 비동기 요청을 하고 부모 컴포넌트 함수로 보내서 나머지 작업을 처리할지
    // 아니면 바로 부모 컴포넌트로 보낼지
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
