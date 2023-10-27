var http = require("http");
var url = require('url');
var events = require('events');

// 创建 eventEmitter 对象 
var eventEmitter = new events.EventEmitter();

// route 根路径 
eventEmitter.on('/', function (method, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello World\n');
});

// route 404 
eventEmitter.on('404', function (method, url, response) {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end('404 Not Found\n');
});

// 启动服务 
http.createServer(function (request, response) {
    console.log(request.url);

    // 分发 
    if (eventEmitter.listenerCount(request.url) > 0) {
        eventEmitter.emit(request.url, request.method, response);
    }
    else {
        eventEmitter.emit('404', request.method, request.url, response);
    }
}).listen(5555);

console.log('Server running at http://127.0.0.1:5555/');