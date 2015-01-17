var http = require('http'),
    bl = require('bl'),
    async = require('async'),
    param = process.argv;
async.series([
    function(callback) {
        http.get(param[2], function(request) {
            request.setEncoding('utf8');
            request.pipe(bl(function (err, data) {
                callback(console.log(data.toString()));
            }))
        })
    },
    function(callback) {
        http.get(param[3], function(request) {
            request.setEncoding('utf8');
            request.pipe(bl(function (err, data) {
                callback(console.log(data.toString()));
            }))
        })
    },
    function(callback) {
        http.get(param[4], function(request) {
            request.setEncoding('utf8');
            request.pipe(bl(function (err, data) {
                callback(console.log(data.toString()));
            }))
        })
    }
])