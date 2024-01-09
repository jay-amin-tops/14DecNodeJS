
// ... Operator START

// Rest Operation with ... START
// while declaring the function we define parameter as ... it will consider as rest
function addition(a, ...b) {
// function addition(a, ...b,c) {
// function addition(...a) {
    
    // console.log(eval(b.join("+")));
    // [1, 2, 3, null, 'a'].filter((x) => !isNaN(x)).reduce((a, b) => a + b)


    // console.log(a+b);
    const sum = b.reduce((partialSum, a) => partialSum + a, 0);
    console.log(sum+a);
    // var total = 0;
    // for (var i in b) {
    //   total += b[i];
    // }
    // console.log(total+a);
    // console.log(total);
}

addition(50, 90)
addition(50, 90, 60)
addition(50, 90, 60, 968, 45, 79, 32, 65)
addition(50, 90)
// Rest Operation with ... END







// while we use ... in arguments it will considered as spread

// function userDetails(uname,pass,email,mobile) {
//     console.log(uname,pass,email,mobile);
// }

// userDetails("test","123","mail@mail.com","987987987")

function userDetails(uname,pass,email,mobile) {
    console.log(uname,pass,email,mobile);
}
userData = ["test","123","mail@mail.com","987987987"]
// userDetails(userData[0],userData[1],userData[2],userData[3])
userDetails(...userData)



// ... Operator END