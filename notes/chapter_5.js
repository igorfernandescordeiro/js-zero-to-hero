// OOP

const me = {

};

class Person {
    // class body
    constructor(name, age) {
        this.name = name; // name is a property of the class
        this.age = age;
    }
};

const you = new Person('igor', 34);
const them = new Person('jhones', 37);

console.log(you);
console.log(them);