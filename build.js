// Does build tasks
// Currently only needs to be run if styles.less is modified

var exec = require('child_process').exec;
var fs = require('fs');

function logErrors(prefix) {
	return function(e) {
		if(e) console.log(prefix + e);
	};
}

exec('lessc styles.less styles.css', logErrors('lessc: '));

fs.unlink('nul', function(){}); // This file shows up for me, and I'm not sure why
