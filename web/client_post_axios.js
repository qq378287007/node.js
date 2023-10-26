const axios = require('axios');

axios
    .post('http://nodejs.cn/todos', {
        todo: '做点事情'
    })
    .then(res => {
        console.log(`状态码: ${res.statusCode}`);
        console.log(res);
    })
    .catch(error => {
        console.error(error);
    });