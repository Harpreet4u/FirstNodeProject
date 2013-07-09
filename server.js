#!/usr/bin/env node

var http = require("http");

function start() {
	function onRequest (request, response) { 

		console.log("Request Received.");
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello World!");
		response.end();

	}

	http.createServer(onRequest).listen(8080);
	console.log("Server running at http://localhost:8080/....");
}


exports.start = start;
