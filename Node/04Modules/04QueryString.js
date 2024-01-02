// querystring = require('querystring');  
// const qs1=querystring.stringify({name:'sonoo',company:'javatpoint'});  
// console.log(qs1);  
querystring = require('querystring');  
const obj1=querystring.parse('name=sonoo&company=javatpoint');  
console.log(obj1);  