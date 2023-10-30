const Koa = require('koa');
const app = new Koa();

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// parse request body:
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

// add controller:
const controller = require('./controller');
app.use(controller());

app.listen(3000);
console.log('app started at port 3000...');
