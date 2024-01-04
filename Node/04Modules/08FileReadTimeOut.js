var fs = require("fs");
// console.log("Data written successfully!");
// console.log("Let's read newly written data");
// function abcd(x) {
//     console.log("called abcd ");
//     setTimeout(async () => {
//         fs.appendFileSync('input.txt', "data")
//     },x);
//     return 1
// }

// experiment = ()=> {
//     console.log("called experiment");
//     // await abcd(2)
//     fs.appendFileSync('input.txt', "data")
//     // await setTimeout(async () => {
//     // },x);
//     console.log("after experiment");
//     setTimeout(() => {
//         console.log("called inside timeout");
//     //    await callbk()
//     }, 2000);
//     console.log("after callback");   
// }
// experiment()











 experiment = async(callbk,x)=> {
    console.log("called experiment");
    // await abcd(2)
    fs.appendFileSync('input.txt', "data")
    // await setTimeout(async () => {
    // },x);
    console.log("after experiment");
    // await setTimeout(async () => {
        // console.log("inside timeout");
       await callbk()
    // }, 2000);

    console.log("after callback......");   
}
experiment(otherFunction,"name")
function otherFunction() {    
    console.log("inside callback");
    return new Promise(resolve => {
        fs.readFile('input.txt', function (err, data) {
            if (err) {
                return console.error(err);
            }
            console.log("Asynchronous read: " + data.toString());
            resolve(data.toString());
        });
    })
}


