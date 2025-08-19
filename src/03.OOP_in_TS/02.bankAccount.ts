class BankAccount {
    private _balance: number;

    constructor(balance: number) {
        this._balance = balance;
    }

    getBalance(): number {
        return this._balance;
    }

    deposit(amount: number): void {
        this._balance += amount;
    }

    withdraw(amount: number): void {
        if (amount > this._balance) {
            throw new Error('Insufficient funds');
        }
        this._balance -= amount;
    }

}

const account = new BankAccount(100);
account.deposit(50);
account.withdraw(30);
console.log(account.getBalance());
