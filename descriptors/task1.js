
const obj = {
    name: "Milana",
    age: 19,
    course: 3,
    level: 200,
    work: "student"
};

function countNumericValues(obj) {
   
    const descriptors = Object.getOwnPropertyDescriptors(obj);
     
    
    
    const numericValues = Object.values(descriptors)
        .filter(descriptor => typeof descriptor.value === "number")
        .map(descriptor => descriptor.value); 

    return numericValues.length;
}

const numericCount = countNumericValues(obj);
console.log(numericCount); 