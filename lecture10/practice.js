// function other(){
//     let answer="I am..."

//     function innerFunction(){
//         console.log(answer)
//     }

//     innerFunction()
// }

// other()
//возвращает объект!!!(в замыкании)

//замыкание
function makeCounter(){
    let count=0;

    return{
        plusCounter(){
           count++
           console.log(count)
        }
    }
}

const myFun=makeCounter()
//объект(поэтосу обращаться к методу внутреннему через него!!!)
myFun.plusCounter()


//карирование функция, которая возвращает дргуие функции!!! создавать частично завершенные функции

function createMultiplier(factor){
    return function(number){
       return number*factor
    }

}

const math=createMultiplier(3)
console.log(math(2))

//анонимные относятся к functionExp

//NFE

const factorial=function comp(n){
    if(n<=1) return 1;
    return n*comp(n-1)
}

console.log(factorial(5))


//числа Фибоначи
const fib=function count(n){
   if(n<=1){
    return n;
    }
     return count(n-1)+count(n-2)

}

console.log(fib(4))

//стрелочные функции!!!


// const users = [​
//       { name: "Alice", age: 25 },​
//       { name: "Bob", age: 20 },​
//       { name: "Charlie", age: 30 },​
//       { name: "David", age: 22 }​
//     ];

//     const filterByAge=(userList, ageLimit)=>{
//         return userList.filter(it=>it.age>=ageLimit)
//     }

// const result=filterByAge(users,22)

//самовызывающ функции 

(function (){
    let message="Hello";
    console.log(message)
})()  //переменная message недоступна за пределами функции!!!
 

(function (l,w){
    let squere=l*w
    console.log(squere)

})(3,4)  //не забывать передавать аргументы!!!

//функции декораторы

function*generatorExample(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

const gen=generatorExample()  //gen-объект итератора!!!
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
