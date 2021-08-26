import './App.css';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Mainpage from './Pages/Mainpage';
import { Mypage } from './Pages/Mypage';
import { Login } from './Pages/Login';
import { Signup } from './Pages/Signup';
import { Board } from './Pages/Board';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* {체크할 컴포넌트} */}
      <Route exact path="/">
          <Mainpage />
        </Route>
      <Switch>
        <Route path="/mypage">
          <Mypage />
        </Route>
        <Route path="/login">
          <Login />
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
