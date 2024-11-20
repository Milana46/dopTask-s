

const person = { 
    name: 'Alice',
    greet:function () {
        return (`Hello, ${this.name}`)
    }
 };  


const result=person.greet.bind(person)
console.log(result())
console.log(person.greet.call(person))
console.log(person.greet.apply(person))