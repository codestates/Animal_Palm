import './Mainpage.css';
import Navigaitionbar from './components/navigationbar';
function Mainpage() {
  return (
    <div className="Mainpage">
     <Navigaitionbar />
     <a className='welcome'>환영합니다</a>
    </div>
  );
}

export default Mainpage;
