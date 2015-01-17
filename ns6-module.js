var fs = require('fs'), path = require("path");
module.exports = function filter(dir, ext, callback) {
    var filtered = [];
    fs.readdir(dir, function(err, list) {
        if (err)
    		return callback(err);
        list.forEach(function(val) {
            path.extname(val)==="." + ext?filtered.push(val):null;
        });
        return callback(null, filtered);
    });
};