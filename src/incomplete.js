import { getGiphy } from './giphy.js'

import React, { Component } from 'react';
  let clickCount = 0;
  let firstSelectedIndex=[-1, -1];
    let lastselectedIndex=[-1, -1];


class Square extends React.Component {
  handleClick = ev => {
    const { pix, cix } = ev.currentTarget.dataset;


    if(clickCount==0)
    {
      firstSelectedIndex=[Number(pix), Number(cix)];
      clickCount +=1;
      {
      alert("Please mark the end of the word");
        }

    }
    else if(clickCount ==1)
    {
      lastselectedIndex = [Number(pix), Number(cix)];
      clickCount = 0;

       if(checkIfWordExists(Number(pix), Number(cix), this.props.boards))
       {

        console.log(checkIfWordExists(Number(pix), Number(cix), this.props.boards));

       }
       else
       {

       }
               //console.log(checkIfWordExists(Number(pix), Number(cix), this.props.boards));

      firstSelectedIndex = [-1, -1];
      lastselectedIndex = [-1, -1];

    }



   // console.log(pix, cix, this.props.boards[pix][cix]);
  }
  render() {
    const { value, boards, ...rest } = this.props;
    return (
      <button className="square" {...rest} onClick={this.handleClick} style={{width:'30px', height:'30px'}}>
        {value}
      </button>
    );
  }
}


function checkIfWordExists(x, y, boards)
{
  console.log(boards);
  var charString = '';

console.log(firstSelectedIndex, lastselectedIndex);
if(firstSelectedIndex[0]==lastselectedIndex[0])
{
  var fixedIndex = firstSelectedIndex[0];
  for(let i=0; i<=lastselectedIndex[1]-firstSelectedIndex[1]; i++)
  {
    console.log(boards[fixedIndex], firstSelectedIndex[1]);
  charString = charString+boards[fixedIndex][firstSelectedIndex[1]+i];
}

console.log(charString);

}
else if( firstSelectedIndex[1]==lastselectedIndex[1])
{


  var fixedIndex = firstSelectedIndex[1];
  for(let i=0; i<=lastselectedIndex[0]-firstSelectedIndex[0]; i++)
  {
    console.log(boards[fixedIndex], firstSelectedIndex[0]);
  charString = charString+boards[firstSelectedIndex[0]+i][fixedIndex];
}

console.log(charString);
if(nickNamesArray.includes(charString))
{
  return "yes";
}
return "no";


}
else
{
          alert("You can coose a vertical or horizontal direction only!");

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
          boards[i] = [];
  	    for (let k=0; k<20; k++) {
        	boards[i].push(generate_random_string()); 
        }
      }

        return boards;
  }

  render() {

    const boards = this.loop2();

    return (
      <div>
         <div className="board-row">
          { boards.map((ar, ix) => {
            return (
              <div key={ix}>
                {
                  ar.map((el, idx) => <Square key={idx} value={el} data-pix={ix} data-cix={idx} boards={boards}/>)
                }
              </div>

            );
          }) }
        
        </div>
      </div>
    );
  }
}


class Game extends React.Component {


  
  render() {
    return (
      <div className="game">
        <div className="game-board">
        { <Board/>
         }
        </div>
      
      </div>
    );
  }
}


export default Game;


