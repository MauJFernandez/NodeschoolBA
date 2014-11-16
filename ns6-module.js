var fs = require('fs'), path = require("path"), filtered = [];
module.exports = function filter(dir, ext, callback) {
    fs.readdir(dir, function(err, list) {
        if (err)
    		return callback(err);
        list.forEach(function(val, index) {
            if (path.extname(val) == ext) {
                filtered.push(val);
            }
        });
        filtered.forEach(function(val, index) {
        	return callback(val);
        })
    });
};