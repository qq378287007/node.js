module.exports = {
    'GET /': async (ctx, _next) => {
        ctx.render('index.html', {
            title: 'Welcome'
        });
    }
};
