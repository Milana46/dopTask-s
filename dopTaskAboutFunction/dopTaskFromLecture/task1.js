
function sum(arr) {
    return arr.reduce((akk, value) => {
        return akk + value;
    }, 0);
}

let arr = [1, 3, 4, 5, 7];
console.log(sum(arr))
