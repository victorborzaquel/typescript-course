// Day 5 - Exercise 2

interface IPerson {
    name: string;
    age: number;
}

class Person implements IPerson {
    constructor(public name: string, public age: number) {}
  }

  const jane = new Person('Jane', 31);

  console.log(`${jane.name} is ${jane.age} years old.`);