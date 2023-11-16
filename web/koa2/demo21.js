const Koa = require('Koa');
const app = new Koa();

const os = require('os');
const path = require('path');
const fs = require('fs');
const main = async function (ctx) {
    const tmpdir = os.tmpdir();
    const filePaths = [];
    const files = ctx.request.body.files || {};

    for (let key in files) {
        const file = files[key];
        const filePath = path.join(tmpdir, file.name);
        const reader = fs.createReadStream(file.path);
        const writer = fs.createWriteStream(filePath);
        reader.pipe(writer);
        filePaths.push(filePath);
    }

    ctx.body = filePaths;
};

const { koaBody } = require('koa-body');
app.use(koaBody({ multipart: true }));
app.use(main);
app.listen(3000);

//curl -v -X POST -F "files=@demo1.js" http://127.0.0.1:3000 

//curl -v --form upload=@C:/Users/HP/Desktop/node.js/web/koa2/template.html http://127.0.0.1:3000
