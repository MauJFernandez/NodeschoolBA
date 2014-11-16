var fs = require("fs"), tot = 0;
fs.readFile(process.argv[2], function(err, data) {
	if (err) throw err;
	console.log(data.toString().split('\n').length-1);
});