//interface segregation

class Fly {
    fly() {
        console.log("Птица летит");
    }
 }

 class UnFly{
    UnFly(){
        console.log("Эта птица не умеет летать");
    }
 }

 class Duck extends Fly { }
 class Penguin extends UnFly {}


 
 const birds = [new Duck(), new Penguin()];
 birds.forEach(bird=>
    {if(bird instanceof Fly){
        bird.fly()
    }
    // else{
    //     bird.UnFly()
    // }
    })
 