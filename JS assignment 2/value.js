/*
You are provided with a table containing some characters and their corresponding values. Your task will be to find the value from the 
table corresponding to an input character and return it. 
| P or p - PrepBytes | 
| Z or z - Zenith |  
| E or e - Expert Coder |  
| D or d - Data Structure | 
Note: You have to complete getValue function. No need to take any input. 
Input Format 
The first and the only line of the input contain a character C, representing the character that you will get in input. 
Output Format 
Return the value corresponding to the input character.
*/

function getValue(C) {
    switch (C.toLowerCase()) {
        case 'p':
            return "PrepBytes";
        case 'z':
            return "Zenith";
        case 'e':
            return "Expert Coder";
        case 'd':
            return "Data Structure";
        default:
            return "Invalid character";
    }
}

// Example
console.log(getValue('P')); // This will print: PrepBytes
console.log(getValue('z')); // This will print: Zenith
console.log(getValue('E')); // This will print: Expert Coder
console.log(getValue('d')); // This will print: Data Structure
console.log(getValue('A')); // This will print: Invalid character
