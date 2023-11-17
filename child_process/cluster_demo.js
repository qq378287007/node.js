const cluster = require('cluster');
if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    const numCPUs = require('os').cpus().length;
    for (let i = 0; i < numCPUs; i++)
        cluster.fork();

    cluster.on('exit', (worker, _code, _signal) => {
        console.log(`Worker ${worker.process.pid} died`);
        cluster.fork() //进程守护 再开启一个进程
    });
} else {
    const http = require('http');
    http.createServer((_req, res) => {
        res.writeHead(200);
        res.end('Hello World');
    }).listen(8000);

    console.log(`Worker ${process.pid} started`);
}
