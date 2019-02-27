function getRandomInt() { 
  let randNum = Math.floor((Math.random() * 10) + 1);
  console.log(randNum);
  return randNum;
}

function getGiphy(query, cb) {
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

export {
	getGiphy
}