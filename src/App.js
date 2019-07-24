import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <div className="toolbar">Toolbar here</div>
        <img 
          className="logo"
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png">
        </img>
          <input className="search-box" placeholder="WRITE YOUR NAME HERE" />
          <div className="action-button-container">
            <button className="action-button" onclick="callServer()">Google Search</button>
            <button className="action-button">I'm Feeling Lucky</button>
          </div>
    </div>
  );
}

export default App;
