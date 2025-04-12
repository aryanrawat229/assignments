/* Q8. Pass or Fail 
You are given an array A containing the maths marks of students in your class, and your task is to determine if all the 
students pass in your class or not. A student is declared pass if his maths marks are greater than or equal to 32. 
If all the students pass in your class, return "YES" (without quotes); otherwise, return "NO" (without quotes). 
Note: You have to complete isAllPass function. No need to take any input. 
Input Format 
Example 
Sample Input 
7 13 89 45 98 67 45 54 
Sample Output 
NO */

let marks=[33,56,78,19,99,30];

function isAllPass(marks){
    for(let i=0;i<marks.length;i++){
        if(marks[i]<32){
            return "No";
        }
    }
    return "Yes";

}

console.log(isAllPass(marks));