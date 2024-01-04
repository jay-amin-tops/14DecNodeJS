const fs = require("fs");
// Common use for File System module:

// Read Files
// Write Files
// Append Files
// Close Files
// Delete Files
// path: It holds the name of the file to read or the entire path if stored at other locations.
// flags: Flags indicate the behavior of the file to be opened. All possible values are ( r, r+, rs, rs+, w, wx, w+, wx+, a, ax, a+, ax+).
// mode: Sets the mode of file i.e. r-read, w-write, r+ -readwrite. It sets to default as readwrite.
 
 // err: If any error occurs.
// data: Contents of the file. It is called after the open operation is executed.

// Asynchronous read
// fs.readFile("input.txt",function (err,data) {
//     // console.log(data);
//     console.log("Asynchronous read: " + data);
// })


// fs.open('input.txt', 'r+', function(err, fd) {
//     if (err) {
//        return console.error(err);
//     }
//     console.log("File open successfully");    
//  });

// fs.writeFile('input.txt', 'Something new added', function(err) {
//     if (err) {
//         return console.error(err);
//     }
// console.log("Data written successfully!");
// console.log("Let's read newly written data");
// })
// var data = "\nLearn Node.js";
  
// // Append data to file
// fs.appendFile('input.txt', data, 'utf8',
//     // Callback function
//     function(err) {
//         if (err) throw err;
 
//         //  If no error
//         console.log("Data is appended to file successfully.")
// });
// fs.readFile('input.txt', function (err, data) {
// 	if (err) {
// 		return console.error(err);
// 	}
// 	console.log("Asynchronous read: " + data.toString());
// });


// console.log("deleting an existing file");
// fs.unlink('input.txt', function(err) {
// if (err) {
// 	return console.error(err);
// }
// console.log("File deleted successfully!");
// });
