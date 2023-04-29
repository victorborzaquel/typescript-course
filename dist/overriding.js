"use strict";
class Person4 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this._greet = 'Hello';
    }
    get greet() {
        return this._greet;
    }
    set greet(value) {
        this._greet = value;
    }
}
class Client4 extends Person4 {
    constructor(name, age, address) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.address = address;
    }
    balance() {
        console.log(`Hello, my name is ${this.name}!`);
    }
    get greet() {
        return `Hi, ${super.greet}!`;
    }
}
const client4 = new Client4('Dog', 1, 'Rua dos Bobos, 0');
console.log(client.greet());
//# sourceMappingURL=overriding.js.map