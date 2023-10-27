/* parent.js */
var child = child_process.spawn('node', ['child.js'], {
    stdio: [0, 1, 2, 'ipc']//通过ipc开启了一条IPC通道
});

//监听子进程对象的message事件接收来自子进程的消息
child.on('message', function (msg) {
    console.log(msg);
});

//给子进程发送消息
child.send({ hello: 'hello' });

/* child.js */
//process对象上监听message事件接收来自父进程的消息
process.on('message', function (msg) {
    msg.hello = msg.hello.toUpperCase();
    process.send(msg);//向父进程发送消息
});

//数据在传递过程中，会先在发送端使用JSON.stringify方法序列化，再在接收端使用JSON.parse方法反序列化。
