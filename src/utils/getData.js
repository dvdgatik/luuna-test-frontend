import React from 'react';
import axios from 'axios';

// With Fetch
/*const getData = api => {
	return fetch(api)
	.then(response => response.json())
	.then(response =>response)
	.catch(error => error);
}*/

//With Axios
// Create a token from github
const token = process.env.TOKEN;
const getData = api => {
		const request = axios.get(api, {
		headers: {
		'Authorization': 'Bearer ' + token,
		}
		});
		return request;
}

// Verify that the rate limit be 5000, not 60 with help of the token
getData('https://api.github.com/rate_limit')
.then(
	response => {
		console.log(response.data);
	}
).catch(function(e) {
  console.log(e); // "oh, no!"
});

export default getData;