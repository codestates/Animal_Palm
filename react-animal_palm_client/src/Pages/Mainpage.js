import './Mainpage.css';
import Navigaitionbar from './components/navigationbar';
import { Link } from 'react-router-dom'

export default function Mainpage() {
  return (
    <div className="Mainpage">
     <Navigaitionbar />
     <Link to='/board'>
     <div className='welcome'>환영합니다</div>
     </Link>
    </div>
  );
}


