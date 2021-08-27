import './Mainpage.css';
import Navigaitionbar from './components/navigationbar';
import { Link } from 'react-router-dom'

export default function Mainpage({
  isLogin,
  handleLogout
}) {
  
  return (
    <div className="Mainpage">
      <Navigaitionbar
        isLogin={isLogin}
        handleLogout={handleLogout}
      />
      {isLogin?
      <Link to='/board'>
      <div className='welcome'>환영합니다</div>
      </Link>
      : <h2>사이트 소개 문구 필요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</h2>}
    </div>
  );
}


