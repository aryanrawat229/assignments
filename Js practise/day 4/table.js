// write a program which takes a number from the user and print the table

// Function to print the multiplication table of a number
function printTable(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

// Taking input from the user
let number = prompt("Enter a number:");

// Ensuring the input is a number
number = parseInt(number);

// Printing the multiplication table
if (!isNaN(number)) {
    printTable(number);
} else {
    console.log("Please enter a valid number.");
}
