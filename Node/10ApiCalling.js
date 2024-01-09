// fetch("https://fakestoreapi.com/products").then((res)=>res.json())
// fetch("https://fakestoreapi.com/products").then((res)=>{res.json()}).then((result)=>{
//     console.log(result);
// })
// fetch("https://fakestoreapi.com/products").then((res)=>{ return res.json()}).then((result)=>{
//     console.log(result);
//     result.forEach(element => {
//         console.log(element.title);
//     });
// })
// fetch("https://fakestoreapi.com/products").then((res)=>res.json()).then((result)=>{
//     console.log(result);
//     result.forEach(element => {
//         console.log(element.title);
//     });
// })
// fetch("https://fakestoreapi.com/products").then((res)=>res.json()).then((result)=>{
//     console.log(result);
//     result.forEach(element => {
//         console.log(element.title);
//     });
// })
var lat = 23.0216238
var lng = 72.5797068

// https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=faed4d9eb29d483a866000c901ccb680
fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=faed4d9eb29d483a866000c901ccb680`).then((res)=>res.json()).then((result)=>{
    console.log(result);
})