/*
Q4. Second Smallest 
You are given 33 distinct integers X, Y and Z and your task is to find and return the second smallest integer among the three provided 
integers. 
Note: You have to complete findSndSmallest function. No need to take any input. 
*/

function findSndSmallest(X, Y, Z) {
    if ((X < Y && Y < Z) || (Z < Y && Y < X)) {
        return Y;
    } else if ((Y < X && X < Z) || (Z < X && X < Y)) {
        return X;
    } else {
        return Z;
    }
}

// Example
console.log(findSndSmallest(10, 20, 30)); // This will print: 20
