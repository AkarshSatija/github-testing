// http://nodejs.org/api.html#_child_processes
var util = require('util')
var exec = require('child_process').exec;
var shell = require('./shellHelper');

//init();

function init() {
	// execute multiple commands in series
	shell.series([
			'git status',
			'git diff',
		])
		.catch((err) => console.log(err))
}
var committer = ' --author="satijaakarsh satija.akarsh@gmail.com"'

var dates = ["2016-03-28\ 15:14:16",
	"2016-03-29 15:14:16 +0530",
	"2016-04-03 15:14:16 +0530",
	"2016-04-10 15:14:16 +0530",
	"2016-04-17 15:14:16 +0530",
	"2016-04-24 15:14:16 +0530"
]

function bringTheChange(d) {
	d='"'+d+'"';
	shell
		.series([
			'export GIT_AUTHOR_DATE='+d,
			'export GIT_COMMITTER_DATE='+d,
			'touch '+d,
			'git status'
		])
		.catch((err) => console.log(err))
}


bringTheChange(dates[0])
