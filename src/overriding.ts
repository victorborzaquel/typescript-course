class Person4 {
  protected _greet: string = 'Hello';
  
  constructor(
    public name: string, 
    public age: number
  ) {}

  get greet() {
    return this._greet;
  }

  set greet(value: string) {
    this._greet = value;
  }
}

class Client4 extends Person4 {
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

  override get greet() {
    return `Hi, ${super.greet}!`;
  }
}

const client4 = new Client4('Dog', 1, 'Rua dos Bobos, 0');

console.log(client.greet());