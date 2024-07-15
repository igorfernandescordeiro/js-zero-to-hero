// arrow functions



// normal function
function myFunction(input) {
    // code that is repeatable
};

// arrow function
(input) => { 
    console.log('Executed function');
};

// naming an arrow function
const myFunction2 = (input) => { 
    console.log('Executed function');
};


// Ternary operator ? 

let friends = ['igor', 'jhones', 'arlan'];

let isIgorFriend;
let isIgorFriend2;

if(friends.includes('igor')){
    isIgorFriend = true;
} else {
    isIgorFriend = false;
};

console.log(isIgorFriend);

friends.includes('igor') ? isIgorFriend2 = true : isIgorFriend2 = false;

console.log(isIgorFriend2);

// optional chaining

const igor = {
    hobbies: {
        soccer: {
            pairs_of_boots: 1
        }
    }
};
// using the optional chaining witch is '?' 
// if in this case return an undefined it will no longer brake the code, just return undefined
console.log(igor?.hobbies?.skiing?.pairs_of_boots);


// object destructuring

let person = {
    name: 'igor',
    age: 34
};

let person2 = {
    name: 'jhones',
    age: 37
};
//  to the destructuring works the name of the variables should be the same of the variables of the object.
const {name, age} = person;

// it is possible to rename the variable this way:

const {name: person2_name, age: person2_age} = person2;


console.log(name, age);

console.log(person2_name, person2_age);

// array destructuring

let oldArray = [4, 5];

// the index of the positions have to match the index of the array values 
const [value1, value2] = oldArray;



console.log(value2, value1);



// template literal string

let my_name = 'Igor';


console.log(`My name is ${my_name}`);

// short circuits && ||

// AND && 

let person_dictionary = {name: 'igor'};
console.log(person_dictionary);

// this is a short circuits
// if this is true (person_dictionary.name) the value 'IGOR' will be assign to the person_name_2
let person_name_2 = person_dictionary.name && 'IGOR';
console.log(person_name_2);

// this below is the same as above

if (person_dictionary.name) {
    person_name_2 = 'IGOR'
}

// in this case, if the person_dictionary.name is true nothing happens but if it is false the value will be assigned as 'default name' 
let person_name_3 = person_dictionary.name || 'default name';

console.log(person_name_3);


// enhanced object literals

let breed = 'corgi';
let animal = 'dog';

const animal_info = {
    breed,
    animal
};


// spread operator

