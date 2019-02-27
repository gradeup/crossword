import React from 'react';



class Timer2 extends React.Component
{

constructor(props)
{
	super(props);
  this.state={
    timer:30000
  };
  this.timeInt = setInterval(this.reduceTimer,1000);
}

	
reduceTimer = () => {
	if (this.state.timer === 0) {
		this.props.finishGame();
		clearInterval(this.timeInt);
		return;
	}
   this.setState(prevState => {
     return {timer: prevState.timer - 1000}
   });
 }
render(){
	return <p><h1>Time Left: {this.state.timer/1000}</h1></p>;
}

}

export default Timer2;