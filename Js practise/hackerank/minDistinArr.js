/**
 * Function to Minimum distance between two numbers
 * @param {number[]} arr
 * @param {number} x
 * @param {number} y
 * @returns {number[]}
 */
class Solution {

     minDist(arr, x, y) {
        
    let minDist = Infinity;
    let lastSeen = -1;
    let lastVal = null;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x || arr[i] === y) {
            if (lastSeen !== -1 && arr[i] !== lastVal) {
                minDist = Math.min(minDist, i - lastSeen);
            }
            lastSeen = i;
            lastVal = arr[i];
        }
    }

    return minDist === Infinity ? -1 : minDist;
}

    }
