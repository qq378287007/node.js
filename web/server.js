const http = require('http');

const port = 5555;

const server = http.createServer(function (req, res) {
    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain。并用charset=UTF-8解决输出中文乱码
    //res.writeHead(200, { 'Content-Type': 'text/plain; charset=UTF-8' });
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=UTF-8');

    // 下句是发送响应数据
    res.end('Hello World! 这是简单的web服务器测试。\n');
});

//server.listen(port);
server.listen(port, "127.0.0.1");

// 终端打印如下信息
console.log(`Server running at http://127.0.0.1:${port}/`);
