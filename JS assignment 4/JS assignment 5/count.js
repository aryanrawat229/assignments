/* Q3. Count Occurrences 
You are given an array A containing N integer elements and an integer K, and your task is to return the count of 
occurrences of K in array A. 
Note: You have to complete findCount function. No need to take any input. 
Input Format 
The first line of the input contains two space-separated integers N and K, denoting the number of elements in the array A 
and the element whose count needs to be determined, respectively. The second line of the input contains N space-separated 
integers, denoting the elements of the array A. 
Output Format 
Return the count of occurrences of K in array A. 
Constraints 
1≤N≤1001≤K≤1001≤Ai≤1000≤100 
Example 
Sample Input 
4 3 3 3 1 2 
Sample Output 
2 */

let arr=[4,3,3,3,1,2,3]
let k=3;

function Countk(arr){
    let count=0;
    for(let i=0;i<arr.length;i++){
        if (arr[i]===k) {
            count++;
        }
    }

    return count;
}

console.log(Countk(arr));