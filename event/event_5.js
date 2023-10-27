let http = require("http");

// Returns: <http.Server>
let server = http.createServer((req, res) => {
    // 通过 http 模块的 STATUS_CODES 方法，直接获取一个包含状态码和状态信息的对象。
    // 获取对应状态码 418 的状态信息
    res.writeHead(418, http.STATUS_CODES["418"], {
        'Content-Type': 'text/html'
    });
    // 为 http.ServerResponse 对象绑定对 finish 事件的监听
    res.addListener("finish", () => {
        console.log("server response is finished");
    });
    res.end("<h1>Hello World</h1>");
}).listen(8080, () => {
    console.log("http server starts at 8080 port");
});

// <http.Server> Extends: <net.Server>
// <net.Server> Extends: <EventEmitter>
// 既然最终 <http.Server> 构造函数继承自 <EventEmitter> 构造函数，那么根据原型链的原理，
// 它也可以调用 <EventEmitter> 的 emitter.on(eventName, listener) 方法。
server.on("connection", () => {
    console.log("a client has connected to the server!");
});

/**
 * 用户打开页面8080端口后，Node服务器控制台输出：
 * http server starts at 8080 port
 * a client has connected to the server!
 * a client has connected to the server!
 * server response is finished
 * server response is finished
 */