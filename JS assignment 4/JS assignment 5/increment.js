/*
Q7. Increment the Array Elements 
You are provided an array of integers and you have to increment all array elements by 1 and then print whole array. 
You have to complete Inc_Arr. No need to take any input. 
Input Format 
The input contains a single number N, then N array elements as input. 
Output Format 
Print the required answer in the function itself. 
Constraints 
1≤N≤1001≤ElementoftheArray≤1000 
Example 
Sample Input 
5 1 2 3 4 5 
Sample Output 
2 3 4 5 6 
*/

let arr = [8, 4, 5, 0, 1, 3, 7, 3, 2, 1];

function increment(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i] + 1); // Add incremented value
    }
    return newArr;
}

console.log(increment(arr));