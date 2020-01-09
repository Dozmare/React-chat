import React from 'react';
import logo from './logo.svg';
import './App.css';
import {getmovies} from '../src/exercice/apifilm';
import Chat from "./component/Chat";
import {Provider} from "react-redux";
import store from "./redux/store/store"
import { createStore } from 'redux';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Adrien Stupnicki
        </p>
      </header>
      <Provider store = {store}>
        <Router>

          <ul>
            <li>
              <link to="/">Login</link>
            </li>
            <lito="Chat">Login</li>
          </ul>
        </Router>
        <Chat/>
      </Provider>
    </div>
  );
}

//getmovies();  //exo1
export default App;
