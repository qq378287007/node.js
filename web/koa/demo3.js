const Koa = require('koa');
const app = new Koa();

const router = require('koa-router')();

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// add url-route:
router.get('/hello/:name', async (ctx, _next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
});

router.get('/', async (ctx, _next) => {
    ctx.response.body = '<h1>Index</h1>';
});

// add router middleware:
app.use(router.routes());

app.listen(3000);
//npm i koa-router