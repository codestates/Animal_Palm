import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import { AnimalTest } from './components/SignupComponent/AnimalTest';
import { SignupComponent } from './components/SignupComponent/Signup';
import { Success } from './components/SignupComponent/Success';
import './Signup.css'
require('dotenv').config();

export const Signup = () => {
  const history = useHistory()
  const [isState,setIsState] = useState('one')
  const moveLogin = () => {
    history.push('/login')
  }
  return (
    <div className="container">
      <div className="stepContainer">
        {/*진행상황*/} 
        <span className={`step ${isState==='one'   ? 'stepComplete' : ''}`}>1</span>
        <span className={`step ${isState==='two'   ? 'stepComplete' : ''}`}>2</span>
        <span className={`step ${isState==='three' ? 'stepComplete' : ''}`}>3</span>
      </div>
      <center className="signupBox">
        <BrowserRouter>
          <Switch>
            <Route exact path="/signup">
              <SignupComponent setIsState={setIsState} moveLogin={moveLogin}/>
            </Route>
            <Route path="/signup/animalTest">
              <AnimalTest setIsState={setIsState} />
            </Route>
            <Route path="/signup/success">
              <Success setIsState={setIsState} moveLogin={moveLogin} />
            </Route>
          </Switch>
        </BrowserRouter>
      </center>
    </div>
  );
};