let str = "Aryan Rawat";
let vowel = [];

str = str.toLowerCase().split('');

for (let i = 0; i < str.length; i++) {
    if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
        vowel.push(str[i]);
    }
}

console.log(vowel);
