function heavyCompute(n, callback) {
    var count = 0;
    for (let i = n; i > 0; --i) {
        for (let j = n; j > 0; --j) {
            count += 1;
        }
    }
    callback(count);
}

heavyCompute(10000, function (count) {
    console.log(count);
});

console.log('hello');