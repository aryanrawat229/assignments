//API

fetch("https://jsonplaceholder.typicode.com/users")
.then((res)=>res.json())
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err);
})

async function funData() {
    console.log("I am working")
    const res=await fetch("https://jsonplaceholder.typicode.com/users",
    console.log("Response is Received")
);

const users=await res.json();
console.log("User data is here");
return users;
}

funData();