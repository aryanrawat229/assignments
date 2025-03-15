async function bro() {
    let myPromise= new Promise(function(resolve,reject){
        resolve("Hello World");
    });
    const result=await myPromise;
    
}

bro().then(console.log)

/*undefined is that the async function bro does not return any value in your original code.
 By default, if a function doesn't explicitly return something, it returns undefined.*/