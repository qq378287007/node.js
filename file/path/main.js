var cache = {};

function store(key, value) {
    cache[path.normalize(key)] = value;
}

store('foo/bar', 1);
store('foo//baz//../bar', 2);
console.log(cache);  // => { "foo/bar": 2 }



path.join('foo/', 'baz/', '../bar'); // => "foo/bar"


path.extname('foo/bar.js'); // => ".js"


