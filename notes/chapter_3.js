// data manipulation 

let example_sentence = 'is a string';
let string_length = example_sentence.length;

console.log('Value at the end of the string = ', example_sentence[string_length -1]);


let contains_the_letter_a = example_sentence.indexOf('a');

console.log(contains_the_letter_a);

const split_sentence = example_sentence.split('');

console.log(split_sentence);

const inclues_or_not = example_sentence.includes('s');

console.log(inclues_or_not);

const slice_string = example_sentence.slice(0, 3);

console.log(slice_string);

//talk about regex
// Regex stands for regular expressions 
// Regex is a little bit complicated but if I need to use it someday, just look how to write a regex check for a passaword.


// talking about arrays and objects

let simple_array = ['igor', 'Fernandes', 'Cordeiro' ];

//crud - create read update delete

//pop push shift unshift

console.log(simple_array);
// add a new item in the end of the array
simple_array.push('new world');

console.log(simple_array);

// remove the last item from an array
simple_array.pop();

console.log(simple_array);

// join a array and turned into a string because as an array of string
let check = simple_array.join(' ');

console.log(check);

let check2 = simple_array.sort();

console.log(check2);

//talked about for inside for

let simple_array2 = [1, 4, 2, 3, 5]; // 1 dimensional

//crud - create read update delete
// for (let i = 0; i < simple_array.length; i++) {
//     let subArray = simple_array[i]
//     for (let j = 0; j < subArray.length; j++) {
//         console.log(i, j, simple_array[i][j])
//     }
// }

let index_of_three = simple_array2.indexOf(3);
let start_array = simple_array2.slice(0, index_of_three);
let end_array = simple_array2.slice(index_of_three + 1);

let new_filtered_array = start_array.concat(end_array);

 console.log(new_filtered_array);


 // dictionaries or objects

const bio = {
    name: 'james',
    age: 27,
    hobbies: ['gym', 'coding', 'reading'],
    friends: {
        'juan': {
            description: 'good at maths'
        }
    }
};

console.log(bio['friends']['juan']['description']);

// console.log(Object.values(bio));
console.log(Object.keys(bio));


console.log(Object.entries(bio));