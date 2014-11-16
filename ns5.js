var fs = require("fs"), path = require("path"),
dir = process.argv[2], ext = "." + process.argv[3];
fs.readdir(dir, function(err, list) {
	if (err) throw err;
	list.forEach(function(val, index) {
		if (path.extname(val) == ext) {
			console.log(val);
		}
	});
});
//val.substr(-extl, extl)==ext?console.log(val):null;