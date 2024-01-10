abstract class User {
    firstName: string
    lastName: string

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
    }

    abstract getMoney(): number
}

class Lender extends User {
    money: number
    borrower?: Borrower
    lendAmount: number = 0

    constructor(firstName: string, lastName: string, money: number) {
        super(firstName, lastName)
        this.money = money
    }

    getMoney(): number {
        return this.money
    }

    lend(br: Borrower, amount: number): boolean {
        if (this.borrower != null || this.money < amount) return false

        this.borrower = br
        this.lendAmount = amount
        this.money -= amount

        return true
    }

    getMoneyBack(): boolean {
        if (this.borrower != null && !this.borrower.returnMoney(this.lendAmount)) return false

        this.money += this.lendAmount
        this.lendAmount = 0
        this.borrower = undefined

        return true
    }
}

class Borrower extends User {
    cash: number
    lender?: Lender

    constructor(firstName: string, lastName: string, cash: number) {
        super(firstName, lastName)
        this.cash = cash
    }

    getMoney(): number {
        return this.cash
    }

    borrow(lender: Lender, amount: number): boolean {
        if (this.lender != null || !lender.lend(this, amount)) {
            return false
        }

        this.lender = lender
        this.cash += amount

        return true
    }

    returnMoney(amount: number): boolean {
        if (this.lender == null || this.cash < amount) return false

        this.cash -= amount
        this.lender = undefined

        return true
    }
}

let johny = new Borrower("Johny", "Poor", 50)
let peter = new Lender("Peter", "Rich", 3000)

// Johny wants to lend some money from Peter 
// peter.money -= 1000
// johny.cash += 1000

// Johny wants to lend some money from Peter 
console.log(johny.getMoney(), peter.getMoney())
johny.borrow(peter, 1000)
console.log(johny.getMoney(), peter.getMoney())
peter.getMoneyBack()
console.log(johny.getMoney(), peter.getMoney())
