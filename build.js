var exec = require('child_process').exec;
var fs = require('fs');

function logErrors(e) { if (e) console.log(e); }

exec('browserify scripts/vm.js -o bundle.js', logErrors);

exec('lessc styles.less styles.css', logErrors);

fs.unlink('nul', function(){});
