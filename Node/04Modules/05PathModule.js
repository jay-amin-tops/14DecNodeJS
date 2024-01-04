const { log } = require("console");
var path = require("path");

// Normalization
// console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));

// // Join
// console.log('joint path : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));

// path3 = path.join("users", "test", "check","..","checking" ,"index.html");
// console.log(path3)

// // Resolve
// console.log('resolve : ' + path.resolve('main.js'));

// // extName
// console.log('ext name : ' + path.extname('main.js'));



// const path = require('node:path'); 
// console.log(path);


// console.log(path.basename('C:\\temp\\myfile.html'));

// console.log(process.env.PATH);
// console.log(process.env.PATH.split(path.delimiter));

// querystring.parse( str[, sep[, eq[, options]]]) )
const querystring = require("querystring");
  
// // Specify the URL query string
// // to be parsed
// let urlQuery =  "username=user1&units=kgs&units=pounds&permission=false"; //string
//   console.log(urlQuery);
//   console.log(typeof urlQuery);
//   const ConvertToObject = querystring.parse(urlQuery) // using queryting.parse convert string to Object 
//     console.log(ConvertToObject);
//     console.log(ConvertToObject.username);
//   // Use the parse() method on the string
// let parsedObject = querystring.parse(urlQuery);

let parsedObjectAbc = querystring.stringify({ w: 'TEST', anything: 'bar' }, null, null, { encodeURIComponent: "gbkEncodeURIComponent" }); 



// console.log("Parsed Query:", parsedObject);
console.log("Parsed Query:", parsedObjectAbc);