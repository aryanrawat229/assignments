/*
This function partitions an array around the pivot element,
which is typically the last element in the sub-array.
Finding Pivot Index.
*/

function findPivotIndex(arr) {
      let totalSum = arr.reduce((sum, num) => sum + num, 0);
      let leftSum = 0;

      for (let i = 0; i < arr.length; i++) {
        if (leftSum === totalSum - leftSum - arr[i]) {
          return i;
        }
        leftSum += arr[i];
      }
      return -1;
    }
