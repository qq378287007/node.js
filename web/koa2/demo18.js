const Koa = require('Koa');
const app = new Koa();

const handler = async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.response.status = err.statusCode || err.status || 500;
        ctx.response.type = 'html';
        ctx.response.body = '<p>Something wrong, please contact administrator.</p>';
        //ctx.app.emit()手动释放error事件，才能让监听函数on('error')监听到。
        ctx.app.emit('error', err, ctx);
    }
};

const main = ctx => {
    ctx.throw(500);
};

app.on('error', function (err) {
    console.log('logging error ', err.message);
    console.log(err);
});

app.use(handler);
app.use(main);
app.listen(3000);