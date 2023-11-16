const Koa = require('Koa');
const app = new Koa();

const { koaBody } = require('koa-body');
app.use(koaBody({
    multipart: true, // 支持文件上传
    formidable: {
        maxFieldsSize: 2 * 1024 * 1024, // 最大文件为2兆
        multipart: true // 是否支持 multipart-formdate 的表单
    }
}));

const static = require('koa-static');
const path = require('path');
app.use(static(path.join(__dirname)));

const router = require('koa-router')();
const fs = require('fs');
router.get('/', (ctx) => {
    // 设置头类型, 如果不设置，会直接下载该页面
    ctx.type = 'html';
    // 读取文件
    const pathUrl = path.join(__dirname, '/static/upload.html');
    ctx.body = fs.createReadStream(pathUrl);
});

const uploadUrl = "http://localhost:3001/static/upload";
// 上传文件
router.post('/upload', (ctx) => {
    const file = ctx.request.files.file;
    //console.log(file)

    // 读取文件流
    const fileReader = fs.createReadStream(file.filepath);
    console.log(file.filepath)

    const filePath = path.join(__dirname, '/static/upload/');
    // 组装成绝对路径
    const fileResource = filePath + `${file.originalFilename}`;
    console.log(fileResource)

    /*
     使用 createWriteStream 写入数据，然后使用管道流pipe拼接
    */
    const writeStream = fs.createWriteStream(fileResource);
    // 判断 /static/upload 文件夹是否存在，如果不在的话就创建一个
    if (!fs.existsSync(filePath)) {
        fs.mkdir(filePath, (err) => {
            if (err)
                throw new Error(err);
        });
    }
    fileReader.pipe(writeStream);
    ctx.body = {
        url: uploadUrl + `/${file.originalFilename}`,
        code: 0,
        message: '上传成功'
    };
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3001, () => {
    console.log('server is listen in 3001');
});