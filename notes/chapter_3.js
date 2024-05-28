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