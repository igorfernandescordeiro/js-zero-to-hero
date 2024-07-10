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


