// 导入WebSocket模块:
const WebSocket = require('ws');

// 引用Server类:
const WebSocketServer = WebSocket.Server;

// 实例化:
const wss = new WebSocketServer({
    port: 3000
});

wss.on('connection', function (ws) {
    console.log(`[SERVER] connection()`);
    ws.on('message', function (message) {
        console.log(`[SERVER] Received: ${message}`);
        ws.send(`ECHO: ${message}`, (err) => {
            if (err)
                console.log(`[SERVER] error: ${err}`);
        });
    })
});

/*
wss.on('error', function (err) {
    console.log(`[SERVER] error: ${err}`);  // 监听错误事件 
});

wss.on('close', function () {
    console.log(`[SERVER] close()`);  // 监听关闭事件
});
*/

