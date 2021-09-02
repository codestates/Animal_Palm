import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Mainpage from './Pages/Mainpage';
import { Mypage } from './Pages/Mypage';
import { Login } from './Pages/Login';
import { Signup } from './Pages/Signup';
import { Board } from './Pages/Board';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({
    animalName: '',
    animalId : ''
  })
  const handleUserInfo = (data) => {
    setIsLogin(true)
    setUserInfo(data);
  }
  const handleLogout = () => {
    setIsLogin(false)
  }

  return (
    <BrowserRouter>
    <div className="App">{console.log(userInfo)}
      <Route exact path="/">
          <Mainpage
            isLogin={isLogin}
            handleLogout={handleLogout}
          />
        </Route>
      <Switch>
        <Route path="/mypage">
          <Mypage
            userInfo = {userInfo}
            isLogin={isLogin}
            handleLogout={handleLogout}
          />
        </Route>
        <Route path="/login">
          <Login 
            handleUserInfo={handleUserInfo}
          />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/board">
          {console.log(userInfo)}
          <Board animalName={userInfo.animalId} isLogin={isLogin} handleLogout={handleLogout}/>
        </Route>
        
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
