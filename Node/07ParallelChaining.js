const async = require('async');


// parallel(tasks, callback): The tasks is a collection of functions that runs parallel in practice through I/O switching. If any function in the collection tasks returns an error, the callback function is fired. Once all the functions are completed, the data is passed to the callback function as an array. The callback function is optional.
async.parallel([
	(callback) => {
		setTimeout(() => {
			console.log('This is the first function');
			callback(null, 1);
		}, 2000);
	},
	(callback) => {
		console.log('This is the second function');
		callback(null, 2);
	},
	(callback) => {
		console.log('This is the third function');
		callback(null, 2);
	}
], (err, results) => {
	if (err) console.error(err);
	console.log(results);
});
