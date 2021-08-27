import './App.css';
import { BrowserRouter, Route, Switch, useHistory} from "react-router-dom";
import Mainpage from './Pages/Mainpage';
import { Mypage } from './Pages/Mypage';
import { Login } from './Pages/Login';
import { Signup } from './Pages/Signup';
import { Board } from './Pages/Board';
import { useState } from 'react';


function App() {
  const history = useHistory();
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({
    animalName: ''
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
          <Board />
        </Route>
        
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
