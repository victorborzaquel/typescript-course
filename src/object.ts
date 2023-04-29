class UserClass {
  name: string
  balance: number

  constructor(name: string, balance: number) {
    this.name = name
    this.balance = balance
  }
}

class UserClassPublic {
  constructor(public name: string, private balance: number) {
  }

  addMony(amount: number) {
    this.balance += amount
  }

  getBalance() {
    return this.balance
  }
}

const user3 = new UserClass('John', 20)
const user4 = new UserClass('Jane', 20)