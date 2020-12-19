import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import About from './About';
import Main from './Main';
import {BrowserRouter,  Route, Switch} from 'react-router-dom';
import Navbarn from './Navbar';
import "./Background.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbarn />
    <Switch>
      <Route exact path='/'><App /></Route>
      <Route path='/main'><Main /></Route>
      <Route path='/about'><About /></Route>
    </Switch>
    </BrowserRouter>    
  </React.StrictMode>,
  document.getElementById('root')
);

