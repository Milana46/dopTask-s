
// function User(name) {
//     this.name = name;
//   }
  
//   let user = new User('John');
//   let user2 = new user.constructor('Pete');

//   console.log(user2)

//Object.assign(User.prototype,{qmethode1(),methode2()})


class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    describe() {
        return `Имя: ${this.name}, возраст: ${this.age}`;
    }

    isOld() {
        return this.age > 10;
    }

    static compareAges(pet1, pet2) {
        if (pet1.age > pet2.age) {
            return "Первая собака старше второй";
        } else if (pet2.age > pet1.age) {
            return "Вторая собака старше первой";
        } else {
            return "Обе собаки одинакового возраста";
        }
    }
}

class Dog extends Pet {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }

    describe() {
        return `Имя: ${this.name}, возраст: ${this.age}, порода: ${this.breed}`;
    }

    bark() {
        console.log(`${this.name} лает`);
    }

    fetch(item) {
        console.log(`${this.name} приносит ${item}`);
    }
}

class GuardDog extends Dog {
    constructor(name, age, breed, trainingLevel) {
        super(name, age, breed);
        this.trainingLevel = trainingLevel;
    }

    guard() {
        console.log(`${this.name} охраняет территорию на уровне ${this.trainingLevel}`);
    }

    bark() {
        if (this.trainingLevel > 5) {
            console.log(`${this.name} лает громко!`);
        } else {
            console.log(`${this.name} лает нормально`);
        }
    }
}


let dog = new Dog("Doggy", 2, "shpitz");
console.log(dog.describe()); 
dog.bark(); 
dog.fetch("палка"); 
console.log(dog.isOld()); 

let pet1 = new Pet("Pitty", 3);
let pet2 = new Pet("Biggy", 12);
console.log(Pet.compareAges(pet1, pet2)); 

let guardDog = new GuardDog("Mixxy", 6, "Shepherd", 7);
console.log(guardDog.describe()); 
guardDog.guard(); 
guardDog.bark(); 

