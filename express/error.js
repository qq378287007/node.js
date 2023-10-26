app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("出错了！");
});

//错误处理中间件在所有其他 app.use() 和路由调用后才能调用，因此它们是需求处理过程中最后的中间件。

