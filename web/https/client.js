var options = {
    hostname: 'www.example.com',
    port: 443,
    path: '/',
    method: 'GET'
};

var request = https.request(options, function (response) { });

request.end();