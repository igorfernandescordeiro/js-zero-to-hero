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

function arraySorting(arr) {
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
// professor's way
const arrayToRemove2 = ['1', '2', '3', '4', '5', '6', '7', '8'];

function trimArray(arr) {
    const trimmed_array = arr.slice(1, arr.length - 1);
    return trimmed_array;
}

console.log(trimArray(arrayToRemove2));



// 6. Object Iteration: Given an object representing a shopping cart with items and their quantities, write a function that calculates the total cost of the items.
const shoppingCar = [
    {
        item: 'Mouse',
        quantity: 2,
        value: 10
    },
    {
        item: 'Keyboard',
        quantity: 3,
        value: 15.5
    },
    {
        item: 'Monitor',
        quantity: 1,
        value: 100
    }
];

function totalCost(obj) {
    let total = 0;
    for (const item of obj) {
        total += item.quantity * item.value
    }
    return total;
};

console.log(totalCost(shoppingCar));


function totalCost2(obj) {
    return obj.reduce((accumulate, currentValue) => {
        return accumulate + (currentValue.quantity * currentValue.value)
    }, 0);
};
console.log(totalCost2(shoppingCar));

// professors way


let shopping_cart = {
    'cheese': {
        quantity: 4,
        price: 8
    },
    milk: {
        quantity: 10,
        price: 4
    }
}

function sumProducts(obj) {
    let object_keys = Object.keys(obj)
    let product_total = 0

    for (let i = 0; i < object_keys.length; i++) {
        let current_key = object_keys[i]
        const key_data = shopping_cart[current_key]
        product_total = product_total + key_data.price * key_data.quantity
    }

    return product_total
}

console.log(sumProducts(shopping_cart))


// 7. Object Manipulation: Write a function that deep clones an object (i.e., copies all nested objects and arrays) to prevent unintended mutations.

const objectToBeCloned = {
    'car': {
        color: ['black', 'blue'],
        year: 2020,
        price: 15.500
    }
};

function cloneAnObject(obj) {
    return { ...obj };
};

let clonedObj = cloneAnObject(objectToBeCloned);

objectToBeCloned.motocycle = {
    color: 'red',
    year: 2022,
    price: 3000
}
console.log(objectToBeCloned);
console.log(clonedObj);


// professor's way
console.log('\n\nPROFESSOR´s way\n\n')

let friend = {
    'rupert': {
        hobbies: ['gym', 'reading', 'mathematics']
    }
}

function deepClone(obj) {
    let new_object = {}

    let object_keys = Object.keys(obj)

    for (let i = 0; i < object_keys.length; i++) {
        let current_key = object_keys[i]
        new_object[current_key] = obj[current_key]
    }

    return new_object
}

let new_friends = deepClone(friend)

friend.james = {
    hobbies: ['sleep']
}
console.log(new_friends)


// 8. Object Iteration: Given an object representing a student's grades in various subjects, calculate their average grade.

console.log('\n\n ------------------- \n\n')

const grades = {
    math: {
        note: 10
    },
    grammar: {
        note: 8
    },
    physics: {
        note: 9
    },
    chemistry: {
        note: 5
    }
};


// all notes divided per quantity of subjects
const notes = Object.values(grades).map(subject => subject.note);
const quantityOfSubjects = notes.length;

const sumOfNotes = notes.reduce((accumulate, currentValue) => {
    return accumulate + currentValue
})

const average = sumOfNotes / quantityOfSubjects;

console.log('Average grade: ', average);

// the same solution but creation a fucntion

function calculateAverage(obj) {
    const quantitySub = Object.keys(obj).length;
    const subjectsNotes = Object.values(obj);
    const sumOfNotes = subjectsNotes.reduce((a, cv) => {
        return a + cv.note;
    }, 0)
    return sumOfNotes / quantitySub;
};
console.log(calculateAverage(grades))


console.log('\n\nPROFESSOR´s way\n\n')

let student = {
    chemistry: {
        grade: 9
    },
    physics: {
        grade: 7
    },
    maths: {
        grade: 1
    }
}

function findAverageGrade(obj) {
    let sum = 0
    let number_of_subjects = 0

    let list_of_subjects = Object.keys(obj)

    for (let i = 0; i < list_of_subjects.length; i++) {
        let current_key = list_of_subjects[i]
        let subject_grade = student[current_key].grade // he is using stundent here instead of obj.

        sum = sum + subject_grade
        number_of_subjects++
    }

    let average_grade = sum / number_of_subjects
    return average_grade
}


console.log(findAverageGrade(student))

// 9. Scope and Closure: Create a function that returns a new function. The returned function should remember and log the number of times it's been called.
    function counter(){
        let count = 0;
        return function(){
            count++;
            console.log('This function was called: '+ count + ' times');
        }
    };

    const count = counter();
    count();
    count();
    count();




// 10. Array Sorting: Write a function that sorts an array of objects based on a specific property (e.g., 'date') in descending order.




// 11. Array Methods: Given an array of strings, filter out all the strings with a length less than 5 characters.



// 13. Object Iteration: Write a function that counts the number of occurrences of each word in a given string and stores the results in an object.

