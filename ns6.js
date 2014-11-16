var filter = require('./ns6-module.js'),
dir = process.argv[2], ext = "." + process.argv[3];
filter(dir, ext, console.log);