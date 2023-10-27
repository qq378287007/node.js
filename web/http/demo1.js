const http = require('http');

http.createServer(function (_request, response) {
    response.writeHead(200, { 'Content-Type': 'text-plain' });
    response.end('Hello World\n');
}).listen(8124);

//http://127.0.0.1:8124/
//curl -v http://127.0.0.1:8124/
