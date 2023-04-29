// Day 5 - Exercise 3
interface IMC {
    greet(event: string): string;
}
class MC implements IMC {
    greet(event = 'party') {
      return `Welcome to the ${event}`;
    }
  }

  const mc = new MC();
  console.log(mc.greet('show'));