// Day 7 - Exercise 4

let multiply: (val1: number, val2: number) => number;
let capitalize: (val: string) => string;

multiply = function(x: number, y: number): number {
  return x * y;
}

capitalize = function(value: string): string {
  return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}

console.log(capitalize(`nifty ${multiply(5, 10)}`));