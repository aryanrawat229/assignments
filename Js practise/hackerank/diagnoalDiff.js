/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.
For example, the square matrix  is shown below:
1 2 3
4 5 6
9 8 9

The left-to-right diagonal 1+5+9=15 .
The right-to-left diagonal 3+5+9 =17 .
Their absolute difference is |15-17|=2.

Return: int: the absolute difference in sums along the diagonals
*/


function diagonalDifference(arr) {
    let primarySum = 0;
    let secondarySum = 0;
    let n = arr.length; // Square matrix size
    
    for (let i = 0; i < n; i++) {
        primarySum += arr[i][i];
        // Primarydiagonal: (i, j)
        secondarySum += arr[i][n-i-1];
     // Secondary diagonal: (i, n-i-1)
    }
    
    return Math.abs(primarySum-secondarySum); // Absolute difference
}