
// 1. How do you create a string that includes both static text and the value of the variable name, using template literals?

const myName = 'igor';

console.log(`My name is ${myName}`);



// 2. Convert the following function into an arrow function syntax:

function add(a,b) {
  return a + b;
};

let add_with_arrow = (a,b) => { return a + b };

console.log(add_with_arrow(10,10));

  
  // 3. Given an object person with properties name and age, use object destructuring to create two variables name and age, extracting the values from the object.

  const person = {
    name: 'igor',
    age: 34
  };
  const {name, age} = person;

  console.log(name, age);
  

  // 4. Given an array colors with the values ['red', 'green', 'blue'], use array destructuring to create three variables named first, second, and third, assigning the first, second, and third elements of the array to them, respectively.

  const colors = ['red', 'green', 'blue'];

  const [first, second, third] = colors;
  console.log(first, second, third);
  

  
  // 5. How do you create a new array combined that contains all elements of arrays arr1 and arr2 using the spread operator?
  const arr1 = [1,2,3,3,3,3];
  const arr2 = [5,6,7,8,89,8,8];

  const arr3 = [...arr1] + [...arr2];

  console.log(arr3);
 
  
  // 6. How do you create a new object combinedObject that merges the properties of two objects obj1 and obj2, with properties from obj2 overwriting those in obj1 if they exist in both objects?
  const obj1 = {
    name: 'igor',
    age: 34,
    gender: 'male'
  };

  const obj2 = {
    name: 'jhones',
    age: 37
  };
  const combinedObject = {...obj1, ...obj2};
  console.log(combinedObject);
  

  
  // 7. How do you safely access the street property of address inside an object user that may not exist, using optional chaining?
  const user = {
    address: {
      houseColor: 'red'
    }
  }
  console.log(user?.address?.street);
 
  
  // 8. Define a function greet(name, greeting = "Hello") that takes a name and an optional greeting. If the greeting is not provided, it should default to "Hello".

  function greet(name, greeting = "Hello"){

    console.log(`${greeting}, ${name}`);

  };

  const greet1 = (name, greeting = "Hello") => {
    console.log(`${greeting}, ${name}`);
  };

  greet('Igor');

  
  // 9. Explain the difference between let and const keywords, and give an example of when you would use each.
// const can not be changed, but this can be modified its internal values, not the key... i dont know if that make sense
  const array = [1,2,3,4];
// let is a variable that can be changed
  let names = 'igor';
  
 
  
  // 10. Write a for...of loop that iterates over an array numbers and logs each number to the console.
  
arr2.forEach(element => {
  console.log('for each');
  console.log(element);
});

for (const element of arr1) {
  console.log('for of');
  console.log(element);
  
}
  
  // 11. Given an array of numbers, use the map method to create a new array with each number squared.
 
  
  // 12. How would you use the ternary operator to assign "adult" to a variable ageStatus if age is 18 or over, and "minor" if under 18?
  

  
  // 13. How do you use the logical AND operator to execute a function logMessage() only if the variable isLoggedIn is true?
  

  
  // 14. How can you use the logical OR operator to assign a default value of "guest" to a variable username if the current user.name is undefined or null?
  
