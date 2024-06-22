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

nerdyGuy.videogame = 'valorant';
console.log(nerdyGuy);

// getters and setters
class MyClass {
    constructor(name) {
        this._name = name;
    };

    get name() {
        console.log('Name Checked');
        return this._name;
    };

    set name(value) {
        console.log('Name Changed');
        this._name = value;
    };
};


const obj = new MyClass('lucy');

console.log(obj.name);

obj.name = 'New name';
console.log(obj);