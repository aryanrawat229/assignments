/*
Q3. Calculate the sum of all the numbers in the following array

var numbersArray = [1,13,22,123,49];

*/

var numbersArray = [1,13,22,123,49];
let sum=0;
for(let i=0;i<numbersArray.length;i++){
    sum+=numbersArray[i];
}
console.log(sum);

