const Koa = require('Koa');
const app = new Koa();

const main = ctx => {
    ctx.throw(500);
};

app.on('error', (err, _ctx) => {
    console.error('server error', err);
});

app.use(main);
app.listen(3000);