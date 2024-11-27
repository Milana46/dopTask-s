
// function User(name) {
//     this.name = name;
//   }
  
//   let user = new User('John');
//   let user2 = new user.constructor('Pete');

//   console.log(user2)

//Object.assign(User.prototype,{qmethode1(),methode2()})


function Pet(name, age) {
    this.name = name;
    this.age = age;
  
    this.describe = function () {
      return `Имя: ${this.name}, возраст: ${this.age}`;
    };
  
    this.isOld = function () {
      return this.age > 10;
    };
  }
  
  
  Pet.compareAges = function (pet1, pet2) {
    if (pet1.age > pet2.age) {
      return "Первый питомец старше второго";
    } else if (pet2.age > pet1.age) {
      return "Второй питомец старше первого";
    } else {
      return "Оба питомца одинакового возраста";
    }
  };
  
  
  function Dog(name, age, breed) {
    Pet.call(this, name, age); 
    this.breed = breed;
  
    this.describe = function () {
      return `Имя: ${this.name}, возраст: ${this.age}, порода: ${this.breed}`;
    };
  
    this.bark = function () {
      console.log(`${this.name} лает`);
    };
  
    this.fetch = function (item) {
      console.log(`${this.name} приносит ${item}`);
    };
  }

  
  Dog.prototype = Object.create(Pet.prototype);
  Dog.prototype.constructor = Dog;
  
  
  function GuardDog(name, age, breed, trainingLevel) {
    Dog.call(this, name, age, breed); 
    this.trainingLevel = trainingLevel;
  
    this.guard = function () {
      console.log(`${this.name} охраняет территорию на уровне ${this.trainingLevel}`);
    };
  
    this.bark = function () {
      if (this.trainingLevel > 5) {
        console.log(`${this.name} лает громко!`);
      } else {
        console.log(`${this.name} лает нормально`);
      }
    };
  }
  
 
  GuardDog.prototype = Object.create(Dog.prototype);
  GuardDog.prototype.constructor = GuardDog;
  
  
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