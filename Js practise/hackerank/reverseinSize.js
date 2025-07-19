/*
Given an array arr[] and an integer k, find the array after reversing every subarray of consecutive k elements in place. If the last subarray has fewer than k elements, reverse it as it is. Modify the array in place, do not return anything.
*/

function reverseInGroups(arr, k) {
    
    let n = arr.length; 

    for (let i = 0; i < n; i += k) {
        let left = i;

        // To handle case when k is not
        // multiple of n
        let right = Math.min(i + k - 1, n - 1);
        
        // Reverse the sub-array [left, right]
        while (left < right) {
            
            // Swap elements
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left += 1;
            right -= 1;
        }
    }
    return arr;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let k = 3;
let arr1 = reverseInGroups(arr, k);

console.log(arr1.join(" "));
