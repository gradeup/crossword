
import React, { Component } from 'react';

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}

var nickNamesArray = [
'munni',
'budhiya',
'chuhiya',
'aalsi',
'ninja',
'motu',
'saanp',
'ashu',
'gujjar',
'amu',
'takla',
'god',
'hardik',
'pagal',
'nikki',
'bipis',
'vroom',
'lambu',
'bughay',
'chill',
'genda',
'ameer',
'kids',
'gareeb',
'midget',
'changu',
'baap'];


function generate_random_string(){
    let random_string = '';
    let random_ascii;
    let ascii_low = 65;
    let ascii_high = 90
    for(let i = 0; i < 1; i++) {
        random_ascii = Math.floor((Math.random() * (ascii_high - ascii_low)) + ascii_low);
        random_string += String.fromCharCode(random_ascii)
    }
    return random_string
}


class Board extends React.Component {
	constructor(props)
	{
		super(props);
	}
  renderSquare(i) {
    return <Square value={i} />;
  }

  loop2 = () => {
  	    let boards=[];
  	    for (let i=0; i<20; i++) {
        	  boards.push(<Square value={generate_random_string()} key={i}/>); 
        }
        return boards;
  }

  render() {

    return (
      <div>
         <div className="board-row">
          { this.loop2() }
        
        </div>
      </div>
    );
  }
}


class Game extends React.Component {


  loop = () => {
  	    let boards=[];
  	    for (let i=0; i<20; i++) {
        	  boards.push(<Board key={i}/>); 
        }
        return boards;
  }
  render() {
    return (
      <div className="game">
        <div className="game-board">
        { this.loop()
         }
        </div>
      
      </div>
    );
  }
}


export default Game;


