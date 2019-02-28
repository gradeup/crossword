import React from 'react';



class Timer2 extends React.Component
{

constructor(props)
{
	super(props);
  this.state={
    timer:50000
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
	return <h3>Time left: {this.state.timer/1000}</h3>;
}

}

export default Timer2;