
class Shape{

#name;
static count=0;
constructor(name){
    this.#name=name;
    Shape.count++;
    
}

 getAria(){
    console.log("Метод для подсчета площади фигуры")
}

getName(){
    return this.#name;
}

setCount(){
    return Shape.count;
}
}


class Rectangle extends Shape{

    constructor(name,w,h){
        super(name)
        this.w=w;
        this.h=h;
    }

     getAria(){
       return this.w*this.h;
    }
}


class Circle extends Shape{
constructor(name,r){
    super(name);
    this.r=r;
}


    getAria(){
        return Math.PI*Math.pow(this.r,3)
    }

}

const s1=new Rectangle("Rectangle",10,12)
console.log(s1.getAria());

const s2=new Circle("Circle",4)
console.log(s2.getAria())

const baseShape=new Shape();
console.log("Общее число фигур="+baseShape.setCount())
