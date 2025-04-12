/* Q5. Find whether the number is present or not 
Write a program which takes an array as input from the user and a number. Check whether the number is present or not. 
Note: You have to complete Find_Num. No need to take any input. 
Input Format
Example 
Sample Input 
5 1 2 3 4 5 2 
Sample Output 
YES */

let arr=[2,3,4,5,6,7,8,0];
let find=0;

function Find_Num(arr){
    for(let i=0;i<arr.length;i++){
        if(find===arr[i]){
            return "YES";
        }
    }
    return "NO";
}

console.log("Is the Number present?"+ Find_Num(arr));