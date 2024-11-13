
//dependency inversion

class AllFunctions{
    save(user){

    }
}

class FunOfDataUser extends AllFunctions{
    save(user) {
        console.log(`Сохранение пользователя ${user.getName()} в базу данных`);
    }
}

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
 
    getName() {
        return this.name;
    }
    
 }
 
 const user = new User("Алексей", 30);
 const fun=new FunOfDataUser(user.name)
 fun.save(user)
 