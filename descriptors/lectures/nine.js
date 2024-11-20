

// const person={
//     age:20,
//     city:"Vitebsk"
// }

// Object.defineProperty(person, 'name',{
    
//    value:"Alice",
//     writable:true,
//     enumerable: true,
//     configurable: false
//     })


// console.log(person.name)  


// function maxValue(){
//     let max=arguments[0]
//     for(let i=0;i<arguments.length;i++){
//         if(max<arguments[i]){
//             max=arguments[i]
//         }
//     }
//     return max

// }

// console.log(maxValue(1,3,5,22,1,0))


//Math.max(..arguments)


// const user={
//     name:'Alice',
//     sayHie(){
//         console.log(`HI, I'm ${this.name}`)
//     }
// };

// const admin={name:"Bob"}

// user.sayHie(user)

const polindrom=(str)=>str.toLowerCase()===str.split("").reverse().join("").toLowerCase();

console.log(polindrom("Anna"))







