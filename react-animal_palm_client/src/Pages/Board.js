import './Board.css'
import Board_list from './components/Board_list';
import Board_post from './components/Board_post';
import Board_write from './components/Board_write';
import Navigaitionbar from './components/navigationbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
const {test, real} = require('./Dummy/url');



export function Board({animalName}) {
  // const animalId = userInfo.animalName;
  console.log(animalName)
  // animalId = 'animalId'
  const server =  `{tets}/`;
  return (
  <div>    
    <Navigaitionbar />
    <BrowserRouter>
    <div className="Board">
      
      <Switch>
        <Route exact path="/board">
          <Board_list animalId={animalName} />
        </Route>
        <Route path="/board/post">
          <Board_post />
        </Route>
        <Route path="/board/write">
          <Board_write />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
    </div>

  );
}


