'use strict';
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    speak(){
        console.log(`${this.name}: hello!`)
    }
}
const Aperture = new Person('Aperture', 22);
console.log(Aperture.name);
console.log(Aperture.age);
Aperture.speak();

//Getter and setters
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age;
    }

    set age(value){
        //if (value < 0){
        //    throw Error('age cannot be negative');
        //}
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Jobs', -1);
console.log(user1.age);

//상속과 다양성
class Shape{
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`Drawing ${this.color} color of`);
    }

    getArea(){
        return this.width * this.height;
    }
}
class Rectangle extends Shape {};
class Triangle extends Shape {
    
    draw(){
        super.draw(); //부모의 method도 받아올 수 있다.
        console.log(`Drawing ${this.color} color of TRIANGLE`);
    }

    getArea(){
        return this.width * this.height / 2;
    }
};

const rectangle = new Rectangle(20, 20, 'blue');
const triangle = new Triangle(20, 20, 'red');

rectangle.draw();
console.log(rectangle.getArea());
triangle.draw();
console.log(triangle.getArea());

//instantsOf
console.log(rectangle instanceof Rectangle); //t
console.log(triangle instanceof Rectangle); //f
console.log(triangle instanceof Triangle); //t
console.log(triangle instanceof Shape); //t
console.log(triangle instanceof Object); //t


