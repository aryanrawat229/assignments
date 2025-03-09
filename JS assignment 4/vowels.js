// Q3. Count the Vowels
function  Count_Vowel (str) {
    let vowels="AEIOUaeiou";
    let count = 0;
    for(let char of str)
        if (vowels.includes(char)){
            count ++;
        }
    return count;
}
let string ="I am learning javscript";
console.log(Count_Vowel(string));
