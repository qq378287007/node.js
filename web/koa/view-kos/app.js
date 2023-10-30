const Koa = require('koa');
const app = new Koa();
//判断当前环境是否是production环境。如果是，就使用缓存，如果不是，就关闭缓存。
const isProduction = process.env.NODE_ENV === 'production';

// 检查用户权限
/*
app.use(async (ctx, next) => {
    var user = tryGetUserFromCookie(ctx.request);
    if (user) {
        ctx.state.user = user;
        await next();
    } else {
        ctx.response.status = 403;
    }
});
*/

// log request URL:
//第一个middleware是记录URL以及页面执行时间
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    var
        start = new Date().getTime(),
        execTime;
    await next();
    execTime = new Date().getTime() - start;
    ctx.response.set('X-Response-Time', `${execTime}ms`);
});

// static file support:
//第二个middleware处理静态文件：
if (!isProduction) {
    let staticFiles = require('./static-files');
    app.use(staticFiles('/static/', __dirname + '/static'));
}

// parse request body:
//第三个middleware解析POST请求：
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

// add nunjucks as view:
//第四个middleware负责给ctx加上render()来使用Nunjucks：
const templating = require('./templating');
app.use(templating('views', {
    noCache: !isProduction,
    watch: !isProduction
}));

// add controller:
//最后一个middleware处理URL路由：
const controller = require('./controller');
app.use(controller());

app.listen(3003);
console.log('app started at port 3000...');
