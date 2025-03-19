/* A closure gives access to variable or other properties of outer function or parent to inner function
 or child function by creating a lexical enviroment
*/
function test(){
    var name="Cetpa"; //name is a local variable defined inside test

    function showName(){ //showName() is the inner function, a closure

        console.log(name); //use variable declared in the parent function
    }

    showName();
}

test();

/*
Event loop has one simple job: to monitor the callback queue. If the call stack is empty,
the event loop will take the first item from the callback queue and will push it to call stack
which will effectively runs it
*/

