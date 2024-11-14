
//Liskov

class Bird {
    constructor(name) {
        this.name = name;
    }
}

class FlyableBird extends Bird {
    fly() {
        console.log(`${this.name} летит!`);
    }
}

class Sparrow extends FlyableBird {
    fly() {
        console.log(`${this.name} я летаю!`);
    }
}

class Penguin extends Bird {
    fly(){
        console.log(`${this.name} я не умею летать!`);

    }
    
}


const sparrow = new Sparrow("Воробей");
sparrow.fly(); 

const penguin = new Penguin("Пингвин");
penguin.fly();