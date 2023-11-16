const Koa = require('Koa');
const app = new Koa();

const main = ctx => {
    ctx.throw(500, 'Internal Server Error');
};

app.use(main);
app.listen(3000);