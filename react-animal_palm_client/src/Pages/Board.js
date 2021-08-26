import './Board.css'
import Board_list from './components/Board_list';
import Board_post from './components/Board_post';
import Board_write from './components/Board_write';
import Navigaitionbar from './components/navigationbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


export function Board() {
  const [context, setContext] = useState()
  const [comment, setComment] = useState()
  const [contentList, setContentList] = useState()

  const loadContent = (id, contextId) => {
    axios
     .get(
      `http://localhost:4000/boards/${id}/${contextId}`
     ).then( data => {
       setContext(data)
     })
  }

  const loadComment = (id, postId) => {
    axios
     .get(
       `http://localhost:4000/boards/${id}/${postId}`
     ).then( data => {
      setComment(data)
     })
  } 

  const loadContentList = (id) => {
    axios
     .get(
      `http://localhost:4000/boards/${id}`
     ).then( data => {
       setContentList(data)
     })
  }


  const postComment = () => {
    axios
      .post(
        `http://localhost:4000/comments/${1}`,
        {
          comment : 1
        }
      )
  }

  return (
  <div>    
    <Navigaitionbar />
    <BrowserRouter>
    <div className="Board">
      <Switch>
        <Route exact path="/board">
          <Board_list contentList={contentList} loadComment={loadComment} loadContent={loadContent} />
        </Route>
        <Route path="/board/post">
          <Board_post context={context} comment={comment} postComment={postComment} />
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


