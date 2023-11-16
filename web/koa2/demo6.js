const Koa = require('Koa');
const app = new Koa();


const about = ctx => {
    ctx.response.type = 'html';
    ctx.response.body = '<a href="/">Index Page</a>';
};

const main = ctx => {
    ctx.response.body = 'Hello World';
};

const route = require('koa-route');
app.use(route.get('/', main));
app.use(route.get('/about', about));

app.listen(3000); 
