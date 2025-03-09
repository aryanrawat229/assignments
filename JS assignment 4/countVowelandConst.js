//Count the Vowels and Consonants
function Count_Vowels(S) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    
    for (let char of S) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
function Count_Consonants(S) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of S){
        if(!vowels.includes(char)){
            count++;
        }

    }
    return count;
}

let S = "I am mernstack developer";
console.log(Count_Vowels(S), Count_Consonants(S)); 
