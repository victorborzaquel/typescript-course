"use strict";
let price = 1000;
price = '1000';
let price2;
price2 = 1000;
price2 = '1000';
let values = [1, 3];
let values2 = [1, 3];
let values3 = [1, '3'];
let values4 = [values3, values3];
let tuple = ['a', 1];
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["USER"] = 2] = "USER";
})(Role || (Role = {}));
const user = {
    name: 'John',
    role: Role.ADMIN,
};
console.log(user);
function add(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b;
}
function print(value) {
    console.log(value);
}
const obj = {
    name: 'John',
    age: 20,
};
let itemInput;
let item;
itemInput = 1;
if (typeof itemInput === 'string') {
    item = itemInput;
}
else {
    item = '';
}
console.log(item);
function throwError(message, errorCode) {
    throw {
        message,
        errorCode,
    };
}
const user1 = {
    name: 'John',
    age: 20,
};
let union = 1;
union = '1';
union = 2;
function concat(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else {
        return a.toString() + b.toString();
    }
}
console.log(concat(1, 2));
console.log(concat('1', '2'));
let literal;
literal = 10;
const e1 = {
    name: 'John',
    privileges: ['create-server'],
    startDate: new Date(),
};
//# sourceMappingURL=index.js.map