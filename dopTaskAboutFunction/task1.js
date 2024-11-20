
function sum(arguments){
    let sum=0
    for(i in arguments){
        sum+=arguments[i]
    }

    return sum

}


let arr=[1,2,3,4,5,6,7,8]
console.log(sum(arr))