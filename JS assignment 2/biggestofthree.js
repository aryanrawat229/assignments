/*
Take three numbers and print the largest number among them if all of three are same print −1−1. 
Note: You have to complete Max_out_of_three. No need to take any input. 
Input Format 
The input contains three numbers A, B and C. 
Output Format 
Return the maximum number out of the three numbers as result. 
*/

function big_out_of_three(A, B, C) {
    if (A === B && B === C) {
        return -1;
    } else {
        let max;
        if (A >= B && A >= C) {
            max = A;
        } else if (B >= A && B >= C) {
            max = B;
        } else {
            max = C;
        }
        return max;
    }
}

// Example
console.log(big_out_of_three(10, 20, 30)); // This will print: 30
console.log(big_out_of_three(5, 5, 5));    // This will print: -1
