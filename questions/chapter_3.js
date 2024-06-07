// 1. Array Filtering: Write a function that filters out all the even numbers from an array of integers.
// My way with some research
function arrayFiltering(array) {
    return array.filter(number => number % 2 !== 0);
};
// Professor`s way
function arrayFilter(arr) {
    let new_array = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            new_array.push(arr[i]);
        };
    };
    return new_array;
}

const arrayNumbers = [1, 2, 3, 4, 5, 6, 7];

console.log(arrayFiltering(arrayNumbers));
console.log(arrayFilter(arrayNumbers));



//  2. Object Manipulation: Given an array of objects representing people with names and ages, write a function to find the person with the highest age.


const people = [
    { name: 'igor', age: 34 },
    { name: 'isabele', age: 30 },
    { name: 'Tainá', age: 40 },
    { name: 'jhones', age: 37 }
];

function highestAge(array) {
    let age = 0;
    let oldAge = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i]['age'] > age) {
            age = array[i]['age'];
            oldAge = array[i];
        }
    }
    return oldAge;
};

console.log(people[0]['age']);
console.log(highestAge(people));

function highestAge2(array) {
    let age = 0;
    let oldAge = [];
    for (const person of people) {
        if (person['age'] > age) {
            age = person['age'];
            oldAge = person;
        }
    }
    return oldAge;
};

console.log(highestAge2(people));

const people2 = [
    { name: 'igor', age: 34 },
    { name: 'isabele', age: 30 },
    { name: 'Tainá', age: 40 },
    { name: 'jhones', age: 37 }
];

function highestAge3(arr) {
    arr.sort((a, b) => b.age - a.age)
    return arr[0];
};


console.log(highestAge3(people));




// 3. Data Transformation: Convert an array of strings containing numbers into an array of actual number values.
const arrayOfStrings = ['1', '2', '3', '4'];
const arrayOfNumbers = arrayOfStrings.map(Number);
console.log(arrayOfStrings);
console.log(arrayOfNumbers);

// Professors solution

let array_of_strings = ['4', '8', '2', '10', '5']
let new_array_of_numbers = []

for (let i = 0; i < array_of_strings.length; i++) {
    let converted_string_value = parseInt(array_of_strings[i])
    new_array_of_numbers.push(converted_string_value)
}

console.log(new_array_of_numbers);



// 4. Array Sorting: Write a function that sorts an array of objects based on a specific property (e.g., 'price') in ascending order.

const arrayOfObjects = [
    {
        brand: 'Apple',
        product: 'iPhone',
        price: 100
    },
    {
        brand: 'Samsung',
        product: 'Galaxy',
        price: 110
    },
    {
        brand: 'Xiaomi',
        product: 'MiPro',
        price: 98
    },
    {
        brand: 'Nokia',
        product: 'C60',
        price: 200
    }
];

console.log('_________________________________________________ ');

function arraySorting(arr){
    return arr.sort((a, b) => a.price - b.price);
};

console.log(arraySorting(arrayOfObjects));

console.log('_________________________________________________ ');
console.log('_________________________________________________ ');

let array_of_objects = [
    { price: 4.2 },
    { price: 8.3 },
    { price: 2.2 }

]

array_of_objects.sort(function (a, b) {
    return b.price - a.price
})

console.log(array_of_objects)


// 5. Array Manipulation: Write a function that removes the first and last elements from an array and returns the modified array.

const arrayToRemove = ['1', '2', '3', '4', '5', '6', '7'];
arrayToRemove.pop();
arrayToRemove.shift();
console.log(arrayToRemove);


// 6. Object Iteration: Given an object representing a shopping cart with items and their quantities, write a function that calculates the total cost of the items.



// 7. Object Manipulation: Write a function that deep clones an object (i.e., copies all nested objects and arrays) to prevent unintended mutations.



// 8. Object Iteration: Given an object representing a student's grades in various subjects, calculate their average grade.



// 9. Scope and Closure: Create a function that returns a new function. The returned function should remember and log the number of times it's been called.



// 10. Array Sorting: Write a function that sorts an array of objects based on a specific property (e.g., 'date') in descending order.




// 11. Array Methods: Given an array of strings, filter out all the strings with a length less than 5 characters.



// 13. Object Iteration: Write a function that counts the number of occurrences of each word in a given string and stores the results in an object.

