var http = require('http');

function requestHandler(request, response) {
	console.log("In comes a request to: " + request.url);
	response.end("Hello");
}

var server = http.createServer(requestHandler);

server.listen(3000);
