function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid; // Target found, return its index
    } else if (arr[mid] < target) {
      low = mid + 1; // Target is in the right half
    } else {
      high = mid - 1; // Target is in the left half
    }
  }

  return -1; // Target not found
}
