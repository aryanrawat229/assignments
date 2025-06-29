/**
 * 💼 Problem: Operating an Array (GeeksforGeeks)
 * 
 * Implement the following 3 functions on an array:
 * 
 * 1. searchEle(arr, x): Returns true if x exists in the array.
 * 2. insertEle(arr, y, yi): Inserts y at index yi. Returns true if successful.
 * 3. deleteEle(arr, z): Deletes the first occurrence of z. Returns true if successful.
 * 
 * Constraints:
 * - 0-based indexing
 * - Expected Time Complexity: O(n)
 * - Expected Auxiliary Space: O(1)
 * 
 * 📌 Example:
 * Input: arr = [2, 4, 1, 0, 2], x=1, y=2, yi=2, z=0
 * Output: true true true
 * 
 * 👇 Explanation of splice():
 * - arr.splice(startIndex, deleteCount, item1, item2, ...)
 * - It modifies the original array by adding/removing/replacing elements.
 *   - To insert: use deleteCount = 0
 *   - To delete: use deleteCount > 0 and no new elements
 */

class Solution {
  // 🔍 Searches for element x in arr
  searchEle(arr, x) {
    return arr.includes(x);
  }

  // ✍️ Inserts element y at index yi
  insertEle(arr, y, yi) {
    if (yi >= 0 && yi <= arr.length) {
      // Inserting y at yi using splice (no deletion)
      arr.splice(yi, 0, y);
      return true;
    }
    return false;
  }

  // ❌ Deletes first occurrence of element z
  deleteEle(arr, z) {
    const index = arr.indexOf(z);
    if (index !== -1) {
      // Removing 1 element at index using splice
      arr.splice(index, 1);
      return true;
    }
    return false;
  }
}
