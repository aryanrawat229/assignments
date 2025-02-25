let str = [1, 4, 31, 15, 22, 18, 9];
let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < str.length; i++) {
    if (str[i] > largest) {
        secondLargest = largest;
        largest = str[i];
    } else if (str[i] > secondLargest && str[i] !== largest) {
        secondLargest = str[i];
    }
}

console.log(secondLargest);