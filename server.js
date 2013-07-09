#!/usr/bin/env node

var http = require("http");
var url = require("url");

function start() {
	function onRequest (request, response) { 
		
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname +" Received.");
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello World!");
		response.end();

	}

	http.createServer(onRequest).listen(8080);
	console.log("Server running at http://localhost:8080/....");
}


exports.start = start;
