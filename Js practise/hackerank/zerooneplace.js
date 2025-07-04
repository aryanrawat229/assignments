// JavaScript Program to move all zeros to end using temporary array

// function to move all zeros to the end
function pushZerosToEnd(arr) {
    const n = arr.length;
    const temp = new Array(n);

    // to keep track of the index in temp[]
    let j = 0;

    // Copy non-zero elements to temp[]
    for (let i = 0; i < n; i++) {
        if (arr[i] !== 0) {
            temp[j++] = arr[i];
        }
    }

    // Fill remaining positions in temp[] with zeros
    while (j < n)
        temp[j++] = 0;

    // Copy all the elements from temp[] to arr[]
    for (let i = 0; i < n; i++)
        arr[i] = temp[i];
}

const arr = [1, 2, 0, 4, 3, 0, 5, 0];
pushZerosToEnd(arr);

// Print the modified array
console.log(arr.join(" "));
