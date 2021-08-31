import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Mainpage from './Pages/Mainpage';
import { Mypage } from './Pages/Mypage';
import { Login } from './Pages/Login';
import { Signup } from './Pages/Signup';
import { Board } from './Pages/Board';
import { useState } from 'react';
import axios from 'axios';
const {test, real} = require('./Pages/Dummy/url');

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
    // const signOutURL = `${test}/user/signout`;
    // axios.put(signOutURL, null, { withCredentials : true })
    // .then((res) => {
    //   const message = res.data;
    //   if(message === 'successfully signout') {
    //     alert('로그아웃 되었습니다.');
    //     history.push('/');
    //   } else {
    //     alert('잘못된 접근입니다.');
    //     return;
    //   }
    // })
    // .catch((err) => alert(err))
    setIsLogin(false)
  }

  return (
    <BrowserRouter>
    <div className="App">
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
          <Board userInfo={userInfo}/>
        </Route>
        
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
