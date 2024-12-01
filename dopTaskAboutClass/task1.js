class Person {
    _name;

    constructor(name) {
        this._name = name;
    }

    getName() {
        return this._name;
    }

    setName(value) {
        this._name = value;
        return this._name; 
    }
}

class Student extends Person {
    _grade;

    constructor(name, grade) {
        super(name);
        this._grade = grade; 
    }

    getGrade() { 
        return this._grade;
    }

    setGrade(value) { 
        if (value >= 1 && value <= 5) {
            this._grade = value;
        } else {
            console.log("Оценка не входит в ожидаемый диапазон!");
        }
    }
}

const person = new Person("Sergey"); 
console.log(person.getName());

console.log(person.setName("Evgen")); 

const stud = new Student("Lexa", 2);
console.log(stud.getGrade()); 