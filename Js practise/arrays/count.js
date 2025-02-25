let str=[0,1,0,1,1,1,0,0,0,1,0];
let countone=0;
let countzero=0;
for(let i=0;i<=str.length-1;i++){
    if(str[i]==0){
        countzero+=1;
    }

    if(str[i]==1){
        countone+=1;
    }

}

console.log(countone);
console.log(countzero);