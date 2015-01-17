var http = require('http'), bl = require('bl'), url = process.argv[2];
http.get(url, function(request) {
    request.setEncoding('utf8');
    request.pipe(bl(function (err, data) {
        console.log(data.toString().length);
        console.log(data.toString());
    }))
})