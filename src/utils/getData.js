let headers = new Headers({
	"Accept"       : "application/json",
    "Content-Type" : "application/json",
    "User-Agent"   : "dvdgatik"
});
const getData = api => {
	return fetch(api, {
		method: 'GET',
		headers: headers
	})
	.then(response => response.json())
	.then(response => response)
	.catch(error => error);
}

export default getData;