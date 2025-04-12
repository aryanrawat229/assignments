/* Q2. Find the Sum. 
 Write a program which takes an array as input from the user and find out the sum of the array elements. 
 Note: You have to complete Find_Sum. No need to take any input. 
 Example 
 Sample Input 
 5 1 2 3 4 5 
 Sample Output 
 20 */

 let arr=[4,6,12,5,9];

 function Find_Sum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
 }

 console.log(Find_Sum(arr));