// OOP

const me = {

};

class Person {
    // class body
    constructor(name, age) {
        this.name = name; // name is a property of the class
        this.age = age;
    }

    greet() {
        console.log(`hello my name is ${this.name}`);
    };


};

const you = new Person('igor', 34);
const them = new Person('jhones', 37);

console.log(you);
console.log(them.greet());


class Gamer extends Person {
    constructor(name, age, videogame){
        super(name, age);
        this.videogame = videogame;
    };
};

const nerdyGuy = new Gamer('arlan', 32, 'hellblade');


console.log(nerdyGuy);