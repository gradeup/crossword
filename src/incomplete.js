import Giphy from './giphy.js';
import Timer2 from './timer.js';


import React, { Component } from 'react';
let clickCount = 0;
let firstSelectedIndex=[-1, -1];
let lastselectedIndex=[-1, -1];


var selectedString = "";
class Square extends React.Component {
  handleClick = ev => {
    const { pix, cix } = ev.currentTarget.dataset;


    if(clickCount==0)
    {
      firstSelectedIndex=[Number(pix), Number(cix)];
      clickCount +=1;
    }
    else if(clickCount ==1)
    {
      lastselectedIndex = [Number(pix), Number(cix)];
      clickCount = 0;

      var matchedString = checkIfWordExists(Number(pix), Number(cix), this.props.boards, this.props.setGameState);
      if(matchedString=="")
      {
        this.props.callgetgiphy('wrong');
        this.handleColoring('red');
      }
      else
      {
        this.handleColoring('green');
        console.log(typeof matchedString);
        var stringForGiphy = giphyMapping[matchedString.toLowerCase()];
        console.log("hahahahha"+stringForGiphy);
        this.props.callgetgiphy(stringForGiphy);
        console.log(matchedString);
      }

      firstSelectedIndex = [-1, -1];
      lastselectedIndex = [-1, -1];

    }



   // console.log(pix, cix, this.props.boards[pix][cix]);
  }

  handleColoring = (color) => {
    if (firstSelectedIndex[0]===lastselectedIndex[0]) {
      let first = firstSelectedIndex[1];
      let last = lastselectedIndex[1];
      if (firstSelectedIndex[1]>lastselectedIndex[1]) {
        first = lastselectedIndex[1];
        last = firstSelectedIndex[1];
      }

      for (let i = first; i <= last; i++) {
        {document.getElementById(`${firstSelectedIndex[0]}-${i}`).style.background=`${color}`}
      }
    }
    if (firstSelectedIndex[1]===lastselectedIndex[1]) {
      let first = firstSelectedIndex[0];
      let last = lastselectedIndex[0];
      if (firstSelectedIndex[0]>lastselectedIndex[0]) {
        first = lastselectedIndex[0];
        last = firstSelectedIndex[0];
      }

      for (let i = first; i <= last; i++) {
        {document.getElementById(`${i}-${firstSelectedIndex[1]}`).style.background=`${color}`}
      }
    }
  }
  render() {
    const { value, boards, ...rest } = this.props;
    return (
      <button className="square" {...rest} onClick={this.handleClick} style={{width:'45px', height:'45px'}}>
        {value}
      </button>
    );
  }
}


function checkIfWordExists(x, y, boards, setGameState)
{
  var charString = '';


console.log(firstSelectedIndex, lastselectedIndex);
if(firstSelectedIndex[0]==lastselectedIndex[0])
{
  var fixedIndex = firstSelectedIndex[0];
  for(let i=0; i<=lastselectedIndex[1]-firstSelectedIndex[1]; i++)
  {
  charString = charString+boards[fixedIndex][firstSelectedIndex[1]+i];
}


}
else if( firstSelectedIndex[1]==lastselectedIndex[1])
{

  var fixedIndex = firstSelectedIndex[1];
  for(let i=0; i<=lastselectedIndex[0]-firstSelectedIndex[0]; i++)
  {
  charString = charString+boards[firstSelectedIndex[0]+i][fixedIndex];
}

}
else
{
  alert("You can coose a vertical or horizontal direction only!");
}

console.log(charString, nickNamesArray);

setGameState(charString.toLowerCase());

if(nickNamesArray.includes(charString.toLowerCase()))
{

  return charString.toLowerCase();
}
return "";

}
const nickNamesArray = [
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
'baap',
'buddies'];



var giphyMapping = {
"munni": "high",
"budhiya": "old",
"chuhiya": "rat",
"aalsi":  "lazy",
"ninja": "coder",
"motu": "fat",
"saanp": "snake",
"ashu": "snake",
"gujjar": "bakwas",
"amu": "crazy",
"takla": "bald",
"god": "intelligent",
"hardik": "high",
"pagal": "mad",
"nikki": "intelligent",
"bipis": "bike",
"vroom": "panda",
"lambu": "tall",
"bughay": "excited",
"chill": "cool",
"genda": "fat",
"ameer": "rich",
"kids": "kids",
"gareeb": "poor",
"midget": "short",
"changu": "stupid",
"baap": "dad",
"buddies": "friends"}; 



var nickNameMapping = {
"munni": "Ashok",
"budhiya": "Faheem",
"chuhiya": "Unnati",
"aalsi":  "Gyan",
"ninja": "Sanjeev",
"motu": "Vipul",
"saanp": "Ashutosh",
"ashu": "Ashutosh",
"gujjar": "Gunjit",
"amu": "Amardeep",
"takla": "Prashant",
"god": "Nikhil",
"hardik": "Ashok",
"pagal": "Gunjit",
"nikki": "Nikhil",
"bipis": "Bipin",
"vroom": "Varun",
"lambu": "Ashutosh",
"bughay": "Abhay",
"chill": "Ashok",
"genda": "Vipul",
"ameer": "Anmol",
"kids": "kids",
"gareeb": "Vipul",
"midget": "Aman",
"changu": "Tech team",
"baap": "Piyush",
"buddies": "Tech team"}; 
 





function generate_random_string(){
    let random_string = '';
    let random_ascii;
    let ascii_low = 65;
    let ascii_high = 90
    for(let i = 0; i < 1; i++) {
        random_ascii = Math.floor((Math.random() * (ascii_high - ascii_low)) + ascii_low);
        random_string += String.fromCharCode(random_ascii).toLowerCase();
    }
    return random_string
}


class Board extends React.Component {
	state = { 

  }

  constructor(props)
	{
		super(props);
	}

  renderSquare(i) {
    return <Square value={i} />;
  }

  loop2 = () => {
        let boards=[];
        for (let i=0; i<12; i++) {
          boards[i] = [];
  	    for (let k=0; k<12; k++) {
        	boards[i].push(generate_random_string()); 
        }
      }

        return boards;
  }

  render() {

    let boards = this.loop2();
    boards = this.alterboard(boards);

    return (
      <div>
         <div className="board-row">
          { boards.map((ar, ix) => {
            return (
              <div key={ix}>
                {
                  ar.map((el, idx) => <Square className="buttons" key={idx} value={el} data-pix={ix} data-cix={idx} id={`${ix}-${idx}`} boards={boards} callgetgiphy={this.props.callgetgiphy}  setGameState={this.props.setGameState}/>)
                }
              </div>

            );
          }) }
        
        </div>
      </div>
    );
  }

  getRandomInt = (num) => { 
    let randNum = Math.floor((Math.random() * num) + 1);
    return randNum;
  }
  verifyWord = (word,x,y,ind,boards) => {
    for (let i = 0; i < word.length; i++) {
      if(word[i] === boards[x][y]) {
        if(ind==0) {
          x=x+1;
        }else {
          y=y+1;
        }
        continue;
      }
      if(boards[x][y] === boards[x][y].toUpperCase()){
        return false;
      }
      if(ind==0) {
        x=x+1;
      }else {
        y=y+1;
      }
    }
    return true;
  }
  alterboard = (boards) => {
    const res =[];
    for (let i = 0; i < 10; ++i) {
      let presentWord = nickNamesArray[this.getRandomInt(22)];
      let orientation = this.getRandomInt(10)%2;
      let startidx = this.getRandomInt(12-presentWord.length);
      let startidy = this.getRandomInt(12-presentWord.length);
      while (res.includes(presentWord) || !this.verifyWord(presentWord,startidx,startidy,orientation,boards)) {
        presentWord = nickNamesArray[this.getRandomInt(22)];
        orientation = this.getRandomInt(10)%2;
        startidx = this.getRandomInt(12-presentWord.length);
        startidy = this.getRandomInt(12-presentWord.length);
      }
      console.log(presentWord,'presentWord');
      res.push(presentWord);
      for (let i = 0; i < presentWord.length; i++) {
        boards[startidx][startidy] = presentWord[i].toUpperCase();
        if (orientation===0) {
          startidx=startidx+1;
        }
        else {
          startidy=startidy+1;
        }
      }
    }
    boards = boards.map(x => {
      return x.map(y=> y.toUpperCase());
    })
    return boards;
  }

}


class Game extends React.Component {

  state = {
    getnewgiphy: () => {},
    finish: false,
  };


  getRef = (ref) => {
    console.log('settings ref');
    this.setState({ getnewgiphy: ref });
  }

  setGameRef = (value) =>{
    document.getElementById('selectedValue').innerHTML = ` You selected: <strong>${value}</strong>`;
    if (nickNameMapping[value.toLowerCase()]) {
      document.getElementById('selectedValueName').innerHTML = ` AKA <strong>${nickNameMapping[value.toLowerCase()] || '' }</strong>`;
    }
    else {
      document.getElementById('selectedValueName').innerHTML = 'changu hai kya?';
    }
  };


  finishGame = () => {
    this.setState({ finish: true });
    alert("Game over!!!!");

    window.location.reload();
    this.forceUpdate();
  }
  render() {

    return (

      <div className="game col-md-12 col-sm-12">
      <h1 className="heading"> BOOJHO TO JAANEIN!! </h1>
       <h3>Find as many nicknames of your team mates in 30 seconds as you can!</h3>
      <div class="game-board-wrapper">
        <Board className="game-board" callgetgiphy={this.state.getnewgiphy} setGameState={this.setGameRef}/>
        <div>
        <Timer2 finishGame={this.finishGame}/>
          <h1 id="selectedValue"> You selected: Nothing</h1>
          <p id="selectedValueName">Chal Select Kar..</p>
          <Giphy query='start' getRef={this.getRef}/>  
        </div>      
      </div>

      </div>
    );
  }

}


export default Game;


