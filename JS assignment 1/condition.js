//--Q2. Find if the conditions are obeyed or not? 
//You are given two number first as A and second as B and check if both conditions 
//(A<10 B<10 and A>B) are satisfied or not with the help of operators. 
// Note: You have to complete Is_Valid function. No need to take any input. 

function Is_Valid() {
    let A = 5;
    let B = 3;
    if (A < 10 && B < 10 && A > B) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

Is_Valid();