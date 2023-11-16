const Koa = require('Koa');
const app = new Koa();

const one = (_ctx, next) => {
    console.log('>> one');
    next();
    console.log('<< one');
}

const two = (_ctx, next) => {
    console.log('>> two');
    next();
    console.log('<< two');
}

const three = (_ctx, next) => {
    console.log('>> three');
    next();
    console.log('<< three');
}

app.use(one);
app.use(two);
app.use(three);

app.listen(3000);