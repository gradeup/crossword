import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { getGiphy } from './giphy.js'

class App extends Component {
  state = {
    data: "",
    matrix: [],
  };

  componentDidMount() {
    getGiphy('begin', data => {
      console.log(data);
      this.setState({data: data.data[0].images.downsized_medium.url});
    });
  }

  render() {
    console.log(this.state);
    return (
    <div>
      <div className="matrix">
        {}
      </div>
      <button onClick={()=>this.getnewgiphy('excellent')}>right</button>
      <button onClick={()=>this.getnewgiphy('wrong')}>wrong</button>
      <img  className="giphyimage" src={this.state.data} id="giphy"></img>
    </div>
    );
  }

  getnewgiphy = (query) =>  {
    getGiphy(query, data => {
      console.log(data);
      this.setState({data: data.data[0].images.downsized_medium.url});
    });
  }
  getRandomInt(num) { 
    let randNum = Math.floor((Math.random() * num) + 1);
    console.log(randNum);
    return randNum;
  }
}

export default App;
