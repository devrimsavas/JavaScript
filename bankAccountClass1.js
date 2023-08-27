//bank accounting class
class Account {
    #accountNumber;
    #balance;
    constructor(accountNumber, balance) {
        this.accountNumber=accountNumber;
        this.balance=balance; 

    }
    //set accountNumber, balance as private 
    set accountNumber(number) {
        //let us say account number should be 8 digits 
        if (number.length!=8) {
            console.log("it is not a valid account number")
            return 
        }
        else {
            return this.#accountNumber=number;
        }


    }

    get accountNumber() {
        return this.#accountNumber;
    }

    set balance(finalBalance) {
        if (finalBalance<0) {
            console.log("Balance cannot be negative Setting to zero");
            this.#balance=0;
            
        }
        else {
            this.#balance=finalBalance;
            return this.#balance;
        }
    }

    get balance() {
        return this.#balance;
    }

    deposit(amount) {
        if (amount>0) {
            this.#balance+=amount;
            console.log("Account",this.#accountNumber, "new deposit:" ,amount);
            console.log("new balance is :", this.#balance);

        }
    }
}