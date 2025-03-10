//Create a object using function and class
// constructor both and give two properties
// to it name and age

function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person("Aryan", 25);
console.log(person1); // Output: Person { name: 'Aryan', age: 25 }


