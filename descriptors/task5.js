const obj = { a: 1, b: 2, c: 3, d: 4 };

function deleteKeys(obj, keys) {
    keys.forEach(it => {
        if (Object.keys(obj).includes(it)) {
            delete obj[it]; 
        }
    });
    return obj; 
}


const result = deleteKeys(obj, ['a', 'b']);
console.log(result);