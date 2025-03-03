/*
Q2. Count the Heads 
Tina is given a string S which contains the first letter of all the student names in her class. 
She got a curiosity to check how many people have their names starting from the same alphabet. 
So given a string S, she decided to write a code that finds out the count of characters that occur
more than once in the string. Note: You have to complete Count Head function. No need to take any input. 

Input Format 
The first and the only line of the input contains a string S (with no space and contains only lowercase letters). 
Output Format 
Return updated String S as output, where the string contains the charcter followed by their occurrence 
(if greater than 1) in 
alphabetical order. 
*/

let S = "ababadriyhbwdvslhefwndvsehrj";

function countHead(S) {
    let charCount = {}; // Object to store character counts

    // Count occurrences of each character
    for (let i = 0; i < S.length; i++) {
        if (charCount[S[i]]) {
            charCount[S[i]] += 1;
        } else {
            charCount[S[i]] = 1;
        }
    }

    // Create an array of characters that have counts greater than 1
    let resultArr = [];
    for (let char in charCount) {
        if (charCount[char] > 1) {
            resultArr.push(char + charCount[char]);
        }
    }

    // Sort the result array alphabetically
    resultArr.sort();

    // Join the sorted array into a result string
    let result = resultArr.join('');

    return result;
}

console.log(countHead(S));
