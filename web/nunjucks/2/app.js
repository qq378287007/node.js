const nunjucks = require('nunjucks');

function createEnv(path, opts) {
    const autoescape = opts.autoescape === undefined ? true : opts.autoescape;
    const noCache = opts.noCache || false;
    const watch = opts.watch || false;
    const throwOnUndefined = opts.throwOnUndefined || false;
    const env = new nunjucks.Environment(
        new nunjucks.FileSystemLoader(path, {
            noCache: noCache,
            watch: watch,
        }), {
        autoescape: autoescape,
        throwOnUndefined: throwOnUndefined
    });
    if (opts.filters)
        for (let f in opts.filters)
            env.addFilter(f, opts.filters[f]);
    return env;
}

const env = createEnv('views', {
    watch: true,
    filters: {
        hex: function (n) { return '0x' + n.toString(16); }
    }
});


const s = env.render('hello.html', {
    name: '<Nunjucks>',
    fruits: ['Apple', 'Pear', 'Banana'],
    count: 12000
});
console.log(s);

console.log(env.render('extend.html', {
    header: 'Hello',
    body: 'bla bla bla...'
}));

//npm i nunjucks
//npm i chokidar
