// 1. Define a variable called name and set it equal to a string that contains your name. Then, demonstrate how you would change its value to your full name.

let name = 'Igor';
name = 'Igor Fernandes Cordeiro';
console.log(name);


// 2. How would you compare two variables, a and b, to check equal?

let a = 1;
let b = 2;

console.log(a === b);

if ( a === b) {
    console.log('they are equals');
}else{
    console.log('they are not equals');
}

(a === b) ? console.log('they are equals') : console.log('they are not equals');


// 3. Write an if else statment in JavaScript that chekcs if a number stored in a variable age is greater than 18. If true, it should log "Adult" to the console; otherwise, it should log "Minor"

const age = 18;

if (age > 18) {
    console.log('Adult');
} else {
    console.log('Minor');
};

// 4. Create a for loop that iterates from 0 to 10, but only prints even numbers to the console.

for (let i = 0; i <= 10; i ++) {
    if( i % 2 === 0){
        console.log(`This is an even number: ${i}`);
    };
};


// 5. Given an array numbers, write a while loop that continues to sum the numbers until the sum is greater than 100, then exits the loop


// 6. Define a function named calculateArea that takes two parameters, width and height, and returns the area of a rectangle