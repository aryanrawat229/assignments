// find the largest number in the array

let str = [1, 4, 31, 15, 22, 18, 9];
let largest = str[0];

for (let i = 1; i < str.length; i++) {
    if (str[i] > largest) {
        largest = str[i];
    }
}

console.log(largest);