
let arrayOfKeys = ['name', 'age', 'course'];
let arrayOfValues = ['Milana', 19, 3];

function combineKeysAndValues(arrayOfKeys, arrayOfValues) {
    
    const combo = arrayOfKeys.map((key, i) => [key, arrayOfValues[i]]);
    return Object.fromEntries(combo);
}

const comboObject = combineKeysAndValues(arrayOfKeys, arrayOfValues);
console.log(comboObject); 