class Person2 {
    constructor(
      public name: string, 
      public age: number
    ) {}

    greet() {
      console.log(`Hello, my name is ${this.name}!`);
    }
}

class Client extends Person2 {
    constructor(
      public name: string, 
      public age: number, 
      public address: string
    ) {
      super(name, age);
    }

    balance() {
      console.log(`Hello, my name is ${this.name}!`);
    }
}

const client = new Client('Dog', 1, 'Rua dos Bobos, 0');

console.log(client.greet());