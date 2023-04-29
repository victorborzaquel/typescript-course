"use strict";
class UserClass {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }
}
class UserClassPublic {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }
    addMony(amount) {
        this.balance += amount;
    }
    getBalance() {
        return this.balance;
    }
}
const user3 = new UserClass('John', 20);
const user4 = new UserClass('Jane', 20);
//# sourceMappingURL=object.js.map