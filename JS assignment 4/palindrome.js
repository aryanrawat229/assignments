function Palindrome_Check(s) {
    let reverse_string = "";
    for (let i = s.length - 1; i >= 0; i--) {
        reverse_string += s[i]; 
    }
    return reverse_string === s ? "Palindrome" : "Not a Palindrome";
}

console.log(Palindrome_Check("malayalam")); 
console.log(Palindrome_Check("buggati")); 
