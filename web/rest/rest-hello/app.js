// log request URL:
const Koa = require('koa');
const app = new Koa();
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

// curl -H 'Content-Type: application/json' -X POST -d '{"name":"XBox","price":3999}' http://localhost:3000/api/products
// {"name":"XBox","price":3999}

// http://localhost:3000/api/products
// {"products":[{"name":"iPhone","price":6999},{"name":"Kindle","price":999},{"name":"XBox","price":3999}]}
