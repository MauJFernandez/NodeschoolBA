var argv = process.argv, tot = 0;
argv.forEach(function(val, index) {
	index>=2?tot+=Number(val):null;
});
console.log(tot);