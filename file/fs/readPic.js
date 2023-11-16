const fs = require('fs');

fs.readFile('sample.png', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        console.log(data.length + ' bytes');
    }
});


var data = fs.readFileSync('sample.png');
console.log(data);
console.log(data.length + ' bytes');

