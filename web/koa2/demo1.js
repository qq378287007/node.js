const Koa = require('Koa');  // 引入Koa
const app = new Koa();  // 创建Koa实例，定义Application

// 使用use方法来处理上下文
app.use(async ctx => {
    // ctx是包含整个应用的上下文，可以对用户的请求做一些处理
    ctx.body = 'hello, World!'
});

app.listen(3000);  // 设置端口号，让Koa应用运行在3000端口上

//node demo1.js
//localhost:3000