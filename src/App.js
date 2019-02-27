import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from'./incomplete.js'


class App extends Component {

  render() {
    
    return (
    <div>

    <h1> BOOJHO TO JAANEIN!! </h1>

    <h3>Find as many nicknames of your team mates in 30 seconds as you can!</h3>
      <Game/>
    </div>
    );
  }



}

export default App;
