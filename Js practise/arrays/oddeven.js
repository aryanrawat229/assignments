let str = [1, 4, 31, 15, 22, 18, 9];
let odd=[];
let even=[];

for(let i=0;i<str.length;i++){
    if(str[i]%2==0){
        even.push(str[i]);
    }
    else
    odd.push(str[i]);
}

console.log(odd);
console.log(even);