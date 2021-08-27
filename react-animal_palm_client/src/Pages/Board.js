import './Board.css'
import Board_list from './components/Board_list';
import Board_post from './components/Board_post';
import Board_write from './components/Board_write';
import Navigaitionbar from './components/navigationbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';



export function Board({animalId}) {
  animalId = 'animalId'

  return (
  <div>    
    <Navigaitionbar />
    <BrowserRouter>
    <div className="Board">
      <Switch>
        <Route exact path="/board">
          <Board_list animalId={animalId} />
        </Route>
        <Route path="/board/post">
          <Board_post animalId={animalId} />
        </Route>
        <Route path="/board/write">
          <Board_write animalId={animalId} />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
    </div>

  );
}


