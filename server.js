const http = require('http');
http.createServer(function(req,res) {
	console.log(res);
	res.writeHead(200,{
		'Content-Type': 'text/plain'
	});
	res.end('Hello World\n');
}).listen(1337,'localhost');
console.log("Server runing at http://localhost:1337");