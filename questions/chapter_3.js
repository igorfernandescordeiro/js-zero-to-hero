// 1. Array Filtering: Write a function that filters out all the even numbers from an array of integers.
// My way with some research
function arrayFiltering(array){
    return array.filter(number => number %2 !== 0);
};
// Professor`s way
function arrayFilter(arr) { 
    let new_array = [];

    for ( let i = 0; i < arr.length; i++){
        if( arr[i] % 2 !== 0) {
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
    {name: 'igor', age: 34},
    {name: 'isabele', age: 30},
    {name: 'Tainá', age: 40},
    {name: 'jhones', age: 37}
];

function highestAge(array){
    let age = 0;
    let oldAge = [];
    for(let i = 0; i < array.length; i++){
        if (array[i]['age'] > age){
            age = array[i]['age'];
            oldAge = array[i];
        }
    }
    return oldAge;
};

console.log(people[0]['age']);
console.log(highestAge(people));




// 3. Data Transformation: Convert an array of strings containing numbers into an array of actual number values.


// 4. Array Sorting: Write a function that sorts an array of objects based on a specific property (e.g., 'price') in ascending order.



// 5. Array Manipulation: Write a function that removes the first and last elements from an array and returns the modified array.



// 6. Object Iteration: Given an object representing a shopping cart with items and their quantities, write a function that calculates the total cost of the items.



// 7. Object Manipulation: Write a function that deep clones an object (i.e., copies all nested objects and arrays) to prevent unintended mutations.



// 8. Object Iteration: Given an object representing a student's grades in various subjects, calculate their average grade.



// 9. Scope and Closure: Create a function that returns a new function. The returned function should remember and log the number of times it's been called.



// 10. Array Sorting: Write a function that sorts an array of objects based on a specific property (e.g., 'date') in descending order.




// 11. Array Methods: Given an array of strings, filter out all the strings with a length less than 5 characters.



// 13. Object Iteration: Write a function that counts the number of occurrences of each word in a given string and stores the results in an object.

