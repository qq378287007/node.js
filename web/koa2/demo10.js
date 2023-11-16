const Koa = require('Koa');
const app = new Koa();

const fs = require('fs.promised');
const main = async function (ctx, _next) {
    ctx.response.type = 'html';
    ctx.response.body = await fs.readFile('template.html', 'utf8');
};

app.use(main);
app.listen(3000);