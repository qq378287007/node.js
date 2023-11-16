const Koa = require('koa');
const app = new Koa();

//3个middleware组成处理链，依次打印日志，记录处理时间，输出HTML：
//app.use()的顺序决定了middleware的顺序
//如果一个middleware没有调用await next()，后续的middleware将不再执行了。
//ctx.url相当于ctx.request.url，ctx.type相当于ctx.response.type
//ctx.method相当于ctx.request.method, ctx.body相当于ctx.response.body
/*
app.use(async (ctx, next) => {
    if (await checkUserPermission(ctx)) {
        await next();
    } else {
        ctx.response.status = 403;
    }
});
*/

// logger
app.use(async (ctx, next) => {
    await next(); // 调用下一个middleware
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

app.use(async (_ctx, next) => {
    const start = new Date().getTime(); // 当前时间
    await next(); // 调用下一个middleware
    const ms = new Date().getTime() - start; // 耗费时间
    ctx.set('X-Response-Time', `${ms}ms`);
    console.log(`Time: ${ms}ms`); // 打印耗费时间
});

app.use(async (ctx, next) => {
    await next();
    ctx.response.type = 'text/html';
    //ctx.response.body = '<h1>Hello, koa2!</h1>';
});
app.use(async ctx => {
    ctx.body = '<h1>Hello, koa2!</h1>';
});

app.listen(3000);
