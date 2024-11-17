// const user={
//     name:"Milana",
//     age:19,
//     adress:{
//         city:"Vitebsk",
//         street:"Moskovsky",
//         numberOfHouse:117,
//     },

//     hobby:{
//         first:"Football",
//         second:"Dancing"

//     }
// }

// let res;
// res=delete user.name
// console.log(user)
// console.log(res)  

// const newUser=Object.create(user);
// newUser.city="SPB";
// newUser.work="it";
// for(let key in newUser){
//     if(newUser.hasOwnProperty(key)){
// console.log(key + ":" + newUser[key]);
// }
// }

//2

// const Products={
//     apple:1.2,
//     banana:0.8,
//     orange:1.5,
//     mango:2.0
// }

// const productNames=Object.keys(Products);
// productNames.forEach(key=>{
//     console.log("Название товара:"+key)}
// )

const original={
    name:"Alice",
    age:25,
    address:{city:"New Yourk", zip:1000}};

const copy={...original}
copy.address.city="30";

console.log(original.address.city)
