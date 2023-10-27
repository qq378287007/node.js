setTimeout(function () {
    console.log('world');
}, 100);

console.log('hello');


function heavyCompute(n) {
    var count = 0;
    for (let i = n; i > 0; --i) {
        for (let j = n; j > 0; --j) {
            count += 1;
        }
    }
}

var t = new Date();

setTimeout(function () {
    console.log(new Date() - t);
}, 10);

heavyCompute(50000);