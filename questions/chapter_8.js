// 1. Unique Characters in a String
// Question: Write a function to determine if a string has all unique characters. Return true if all characters are unique, and false otherwise. Assume the string only contains lowercase letters.

let string_1 = 'helloworldmynameisjamesandilikeicecream'
let string_2 = 'thequickbrownfoxjumpsoverthelazydog'
let string_3 = 'abcdefghijk'

function isUnique(str) {
    let count_dict = {}

    for (let i = 0; i < str.length; i++) {
        let current_char = str[i]
        console.log(current_char, count_dict)
        if (current_char in count_dict) {
            return false
        }
        count_dict[current_char] = 1
    }

    return true
}

console.log(isUnique(string_3))





// 2. Merge Sorted Arrays
// Question: Given two sorted arrays nums1 and nums2, write a function to merge them into a single, sorted array.

const nums1 = [1,23,23,24,5,45,4]
const nums2 = [6,78,9,45,4,8,0]

function MergeAndSort(arr1, arr2) {
    const mergedArray = [...arr1, ...arr2].sort();
    // const sortedArray = mergedArray.sort((a,b) => a - b);

    // return sortedArray;
    return mergedArray;
}

console.log(MergeAndSort(nums1, nums2));



// 3. Find All Duplicates in an Array
// Question: Given an array of integers where 1 ≤ a[i] ≤ n (n = size of the array), some elements appear twice and others appear once. Write a function that returns an array of all the elements that appear twice in the given array. You must achieve this with O(n) time complexity.



// 4. Rotate Array
// Question: Rotate an array to the right by k steps, where k is non-negative. 



// 5. Valid Parentheses
// Question: Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

