var cp = require('child_process');
var path = require('path');

var command = 'gulp.cmd';
var args = [];
var cwd = './';

console.log(cwd);

var process = cp.spawn(command, args || [], {
  cwd: cwd
});

process.on('exit', function(code, signal) {
  if (!signal) {
    if (!code) {
      console.log('ok  (' + command + ')');
    } else {
      console.log('error (code ' + code + ')');
    }
  } else {
    console.error('interrupted');
  }
});
