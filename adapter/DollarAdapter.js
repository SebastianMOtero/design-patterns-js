class Bank {
    constructor() {
        this.userBalance = 0;
    }

    deposit(money) {
        this.userBalance += money;
    }

    withdraw(money) {
        this.userBalance -= money;
    }

    getBalance() {
        return this.userBalance;
    }
}

class AmericanBank extends Bank {

}
  
class ArgentineBank extends Bank {
    transferToAmericanBank(bank, money) {
        const dollarAdapter = new DollarAdapter()
        this.withdraw(money);
        bank.deposit(dollarAdapter.arsToDollar(money));
    }
}
  
class DollarAdapter {
    constructor() {
        this.OneDollarEquals = 250;
    }

    arsToDollar(ars) {
      return ars / this.OneDollarEquals;
    }
  
    dollarToArs(dollar) {
      return this.OneDollarEquals / ars;
    }
}
  
const americanBank = new AmericanBank();
const argentineBank = new ArgentineBank();

argentineBank.deposit(1200);
argentineBank.transferToAmericanBank(americanBank, 1000);

let balance = americanBank.getBalance();
console.log(balance)
balance = argentineBank.getBalance()
console.log(balance)