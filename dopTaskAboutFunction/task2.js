
function evenNumbers(...arr){
   return arr.filter(it=>it%2===0)
}

let arr=[1,2,3,4,5,6,7,8]
console.log(evenNumbers(...arr))