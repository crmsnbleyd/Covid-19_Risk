import React from "react";
import {NavLink} from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import dashboard from './img/dashboard.png';
import './App.css';

const first = "Calculate your risk of contracting Covid-19 in a few clicks"
const second = "Predictions using State-of-the-art models"

function App() {
  return (
      <div className="container landing">
      <h1 className="Display text-center text-info text-dark mx-auto fade-in"><Typewriter options = {{delay: 50, autoStart:true, strings:[first, second], pauseFor:3000, loop: true}}  /></h1>
      <div className="but"><NavLink className="link mx-auto mt-3 mb-4 justify-content-center" to="/main"><button className="btn btn-success ">Start Now!</button></NavLink></div>
      <img src={dashboard} className = "img-fluid mt-auto fade-in-long landing" alt=""/>
      </div>
  );
}

export default App;
