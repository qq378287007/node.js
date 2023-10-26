const express = require('express');
const app = express();

app.get('/', function (_req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

//npm install express
//node demo1.js
