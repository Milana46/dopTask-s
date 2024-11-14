
//single responsobulity

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }
}

class UserRepository {
    save(user) {
        console.log(`Сохранение пользователя ${user.getName()} в базу данных`);
    }
}

const user = new User("Алексей", 30);
const userRepository = new UserRepository();
userRepository.save(user);