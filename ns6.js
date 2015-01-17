var filter = require('./ns6-module.js'),
dir = process.argv[2], ext = process.argv[3];
filter(dir, ext, function(err, data) {
    if(err) {
        console.log(err);
    } else {
        data.forEach(function(val) {
            console.log(val)
        })
    }
});