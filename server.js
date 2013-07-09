#!/usr/bin/env node

var http = require("http");

http.createServer(function (request, response) {

	response.writeHead(200, {"Content-type": "text/plain"});
	response.write("Hello World!");
	response.end();

}).listen(8080);

console.log("Server running at http://localhost:8080/....");
