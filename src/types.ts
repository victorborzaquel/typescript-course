// ANY
let price: any = 1000
price = '1000'

let price2
price2 = 1000
price2 = '1000'

//  ARRAY
let values: number[] = [1, 3]
let values2: Array<number> = [1, 3]
let values3: (number | string)[] = [1, '3']
let values4: (number | string)[][] = [values3, values3]

// TUPLE
let tuple: [string, number] = ['a', 1]

// ENUM
enum Role {
  ADMIN = 1,
  USER = 2,
}

const user = {
  name: 'John',
  role: Role.ADMIN,
}

console.log(user)

// FUNCTION
function add(a: number, b: number): number {
  return a + b
}

function multiply(a: number, b: number) {
  return a * b
}

// VOID
function print(value: string): void {
  console.log(value)
}

// OBJECT
const obj: { name: string; age: number } = {
  name: 'John',
  age: 20,
}

// UNKNOWN
let itemInput: unknown
let item: string

itemInput = 1

if (typeof itemInput === 'string') {
  item = itemInput
} else {
  item = ''
}

console.log(item)

// NEVER
function throwError(message: string, errorCode: number): never {
  throw {
    message,
    errorCode,
  }
}

// throwError('Not found', 404)

// ALIAS
type User = {
  name: string
  age: number
}

const user1: User = {
  name: 'John',
  age: 20,
}

// UNION
let union: string | number = 1
union = '1'
union = 2

function concat(a: string | number, b: string | number) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b
  } else {
    return a.toString() + b.toString()
  }
}

console.log(concat(1, 2))
console.log(concat('1', '2'))

// LITERAL
let literal: 10 | 20 | 30
literal = 10

// INTERSECTION
type Admin = {
  name: string
  privileges: string[]
}

type Employee = {
  name: string
  startDate: Date
}

type ElevatedEmployee = Admin & Employee

const e1: ElevatedEmployee = {
  name: 'John',
  privileges: ['create-server'],
  startDate: new Date(),
}

// TYPE GUARD
// function product(a: number, b: number, c: number): number {
//   let intersection = 12

//   if (a > 20) {
//     return a * b
//   }
  
//   let d = a * b
// }

// 