/* Q1. Find the Product. 
Write a program that takes an array as input from the user and find out the product of the elements. 
Note: You have to complete Find_Prod. No need to take any input. 
Input Format 
Example 
Sample Input 
5 1 2 3 4 5 
Sample Output 
120 */

let arr=[4,6,12,5,9];

function Find_Prod(arr){
    let product=1;
    for(let i=0;i<arr.length;i++){
        product*=arr[i];
    }

    return product;
}

console.log(Find_Prod(arr));