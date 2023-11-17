const Koa = require('Koa');
const app = new Koa();

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// parse request body:
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());


// add router:
const child_process = require("child_process");
const router = require('koa-router')();
router.post('/', async (ctx, _next) => {
    const data = ctx.request.body; //JSON.parse(data);
    console.log(data);
    const evalStr = data.exe || '';
    try {
        ctx.response.body = child_process.execSync(evalStr).toString();
     } catch (error) {
        ctx.response.body = error;
     }
});
app.use(router.routes());

app.listen(3000);
console.log('app started at port 3000...');

//curl -v http://localhost:3000/users/count
//curl -v "http://localhost:3000/users?page=1&size=10"
//curl -v http://localhost:3000/ -H "Content-Type: application/json" -d "{\"exe\": \"main.exe test\"}" 
