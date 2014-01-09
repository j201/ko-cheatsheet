var exec = require('child_process').exec;

exec('browserify scripts/vm.js -o bundle.js', function(err) {
	if (err)
		console.log(err);
});
