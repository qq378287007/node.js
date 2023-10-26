const express = require('express');
const fs = require('fs');

const app = express();

app.get('/test', function (_req, res) {
    fs.readFile('demo2.js', function (err, _data) {
        if (err) {
            res.status(500).send('read file1 error');
        } else {
            fs.readFile('demo1.js', function (err, data) {
                if (err) {
                    res.status(500).send('read file2 error');
                }
                else {
                    res.type('text/plain');
                    res.send(data);
                }
            });
        }
    });
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

//npm i express
//node demo2.js