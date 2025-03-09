function findLength(s){
    let count =0;
    for (let char of s){
        count ++;
    }
    return count;
}
let str = "good bye cruel world";
console.log(findLength(str));
