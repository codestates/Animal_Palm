import './Board.css'
import Navigaitionbar from './components/navigationbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BoardList from './components/BoardComponents/BoardList';
import BoardPost from './components/BoardComponents/BoardPost';
import BoardWrite from './components/BoardComponents/BoardWrite';

export function Board({animalName}) {
  return (
    <div>    
      <Navigaitionbar />
      <BrowserRouter>
        <div className="Board">
          <Switch>
            <Route exact path="/board">
              <BoardList animalId={animalName} />
            </Route>
            <Route path="/board/post">
              <BoardPost />
            </Route>
            <Route path="/board/write">
              <BoardWrite />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>

  );
}


