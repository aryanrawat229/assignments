/* Q4. Even Odd 
You are given an array A containing N integer elements, and your task is to return an array B
((having a size equal to 22)), 
where B[0] contains the sum of all even elements of array A and B[1] has the sum of all odd elements of the array A. 
Note: You have to complete findEvenOdd function. No need to take any input. 

Input Format 
The first line of the input contains an integer N, denoting the number of elements in the array A. The second line of the input 
contains N space-separated integers, denoting the elements of array A. 
Output Format 
Return array B as output. 
Constraints 
1≤N≤1001≤100 0≤Ai≤1000≤100 
Example 
Sample Input 
7 1 2 3 4 5 6 7 
Sample Output 
12 16 */

let arr = [7,1,2,3,4,5,6,11];

function findEvenOdd(arr){
    let evenA = 0;
    let oddB = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            evenA += arr[i];
        } else {
            oddB += arr[i];
        }
    }
    return { evenSum: evenA, oddSum: oddB }; // Returning both values as an object
}

// Store returned values
let sums = findEvenOdd(arr);

console.log("Sum of Even Numbers is " + sums.evenSum);
console.log("Sum of Odd Numbers is " + sums.oddSum);



