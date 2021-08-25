import './Navigationbar.css';

function Navigaitionbar() {
  return (
    <nav className="Navigationbar">
     <ul className="nav-container">
        <li><a className="logo">logo</a></li>
         <li><a>LOGIN</a></li>
         <li><a>SIGNUP</a></li>
         <li><a>MYPAGE</a></li>
         <li><a>LOGOUT</a></li>
     </ul>
    </nav>
  );
}

export default Navigaitionbar;
