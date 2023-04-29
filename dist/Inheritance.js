"use strict";
class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}!`);
    }
}
class Client extends Person2 {
    constructor(name, age, address) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.address = address;
    }
    balance() {
        console.log(`Hello, my name is ${this.name}!`);
    }
}
const client = new Client('Dog', 1, 'Rua dos Bobos, 0');
console.log(client.greet());
//# sourceMappingURL=Inheritance.js.map