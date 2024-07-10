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
