

const Vehicle={
    
    speed:120,
    //move:()=>
    move:function(){
        console.log(`Скорость данного транспорта составляет ${this.speed}`)
    }
}

const Car=Object.create(Vehicle, {
    fuelLevel:{
        value:0,
        writable:true,
    },

    refuel: {
        value(amount) {
          this.fuelLevel += amount;
          console.log(`Уровень: ${this.fuelLevel}`);
        },
      },
})

let myCar=Object.create(Car)
myCar.speed=120
myCar.move()
myCar.refuel(100)

