class Solution {
  maxIndexDiff(arr) {
    const n = arr.length;
    const leftMin = new Array(n);
    const rightMax = new Array(n);

    // Step 1: Fill leftMin[]
    leftMin[0] = arr[0];
    for (let i = 1; i < n; i++) {
      leftMin[i] = Math.min(arr[i], leftMin[i - 1]);
    }

    // Step 2: Fill rightMax[]
    rightMax[n - 1] = arr[n - 1];
    for (let j = n - 2; j >= 0; j--) {
      rightMax[j] = Math.max(arr[j], rightMax[j + 1]);
    }

    // Step 3: Traverse both arrays
    let i = 0, j = 0, maxDiff = 0;
    while (i < n && j < n) {
      if (leftMin[i] < rightMax[j]) {
        maxDiff = Math.max(maxDiff, j - i);
        j++;
      } else {
        i++;
      }
    }

    return maxDiff;
  }
}
