const fs = require('fs');

fs.stat('use_stat.js', function (err, stat) {
    if (err) {
        console.log(err);
    } else {
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            console.log('size: ' + stat.size);
            console.log('birth time: ' + stat.birthtime);
            console.log('modified time: ' + stat.mtime);
        }
    }
});