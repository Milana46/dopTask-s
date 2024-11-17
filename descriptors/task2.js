
const car={

    model:"Dodje",
    year:1,
    type:"sedan",
    price:1000

}

Object.defineProperty(car, 'price',{
    writable: true,  
    enumerable: false,
    configurable: true  

})

console.log(car)
