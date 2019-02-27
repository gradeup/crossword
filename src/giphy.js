import React from 'react';
function getRandomInt() { 
  let randNum = Math.floor((Math.random() * 5) + 1);
  console.log(randNum);
  return randNum;
}

 

class Giphy extends React.Component {


	state = {
    	data: "",
  	};


  	getnewgiphy = (query) =>  {
	    this.getGiphy(query, data => {
	      console.log(data);
	      this.setState({data: data.data[0].images.downsized_medium.url});
	    });
  	}

  	getGiphy = (query, cb) => {
		fetch("http://api.giphy.com/v1/gifs/search?api_key=Hqwi3Et9FTXgy2tqE7O1bvGo6GFFJLrO&q="+query+"&limit=1&offset="+getRandomInt())
		.then(
		function(response) {
		  if (response.status !== 200) {
		    console.log('Looks like there was a problem. Status Code: ' +
		      response.status);
		    return;
		  }
		  // Examine the text in the response
		  response.json().then(function(data) {
		    cb(data);
		  });
		}
		)
		.catch(function(err) {
			console.log('Fetch Error :-S', err);
		});
	}

	
	componentDidMount() {

		this.props.getRef(this.getnewgiphy);

	    this.getGiphy('begin', data => {
	      // console.log(data);
	      this.setState({data: data.data[0].images.downsized_medium.url});
	    });
  	}
	
	render(){
		return (
		<div className="giphyWrapper">
			<img  className="giphyimage" src={this.state.data} id="giphy"/>
		</div>	
		);
	}
	
}

export default Giphy;