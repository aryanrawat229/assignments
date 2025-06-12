// JavaScript program to find the maximum number of consecutive 1s or 0s

function maxConsecutiveCount(arr) {
    let maxCount = 0, count = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            count++;
        } else {
            maxCount = Math.max(maxCount, count);
            count = 1;
        }
    }

    return Math.max(maxCount, count);
}

let arr = [1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1];
console.log(maxConsecutiveCount(arr));
