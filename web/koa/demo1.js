// 导入koa
const Koa = require('koa');

// 创建一个Koa对象表示web app本身:
const app = new Koa();

// 对于任何请求，app将调用该异步函数处理请求：
// ctx是由koa传入的封装了request和response的变量，我们可以通过它访问request和response，
// next是koa传入的将要处理的下一个异步函数。
// async标记的函数称为异步函数，返回值是promise对象。
app.use(async (ctx, next) => {
    //处理下一个异步函数
    await next();
    // 设置response的Content-Type:
    ctx.response.type = 'text/html';
    // 设置response的内容:
    ctx.response.body = '<h1>Hello, koa2!</h1>';
});

// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');