const student = {
    name: "Aman",
    age: 20,
    class: 10
};

for (let key in student) {
    console.log(`${key}=${student[key]}`);
}
