async function bro() {
    let myPromise= new Promise(function(resolve,reject){
        resolve("Hello World");
    });
    const result=await myPromise;
    
}

console.log(bro());

/*
The bro() function is async, so it always returns a Promise.

When console.log(bro()) is called, it logs the Promise object immediately.
 At that moment, the Promise has not yet resolved or rejected because JavaScript
  doesn't wait for the await inside the bro() function to complete.

Since the Promise is still in the process of being resolved, it is in the pending state.
*/