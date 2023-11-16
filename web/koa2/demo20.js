const Koa = require('Koa');
const app = new Koa();

const main = async function (ctx) {
    const body = ctx.request.body;
    if (!body.name)
        ctx.throw(400, '.name required');
    ctx.body = { name: body.name };
};

const { koaBody } = require('koa-body');
app.use(koaBody());
app.use(main);
app.listen(3000);

//curl -v -X POST --data "name=Jack" 127.0.0.1:3000
//curl -v -X POST --data "name" 127.0.0.1:3000
