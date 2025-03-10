var person1 = { firstName: 'Prepbytes', lastName: 'Students' };

function test(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}

test.apply(person1, ['Hello']);
