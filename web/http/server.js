const http = require('http');

http.createServer(function (request, response) {
    console.log(request.method + ': ' + request.url);

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    // 发送响应数据 "Hello World"
    response.end('Hello World\n');

    /*
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<h1>Hello world!</h1>');
    */
}).listen(5555);

/*
function onRequest(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }
server = http.createServer(onRequest);
server.listen(8888);
*/  

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:5555/');

//node server.js
//http://127.0.0.1:5555/
