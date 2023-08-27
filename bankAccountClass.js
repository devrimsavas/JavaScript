//bank accounting class
class Account {
    #accountNumber; //declared private 
    #balance; //declared private 
    constructor(accountNumber, balance) {
        this.accountNumber=accountNumber;
        this.balance=balance; 

    }
    //set accountNumber, balance as private 
    set accountNumber(number) {
        //let us say account number should be 8 digits 
        if (number.length!=8) {
            console.log("it is not a valid account number")
            
        }
        else {
            
            this.#accountNumber=number;
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
    withdraw(amount) {
        if (amount>0 && this.#balance>=amount) {
            this.#balance-=amount;
            console.log("Account",this.#accountNumber, "new withdraw:" ,amount);
            console.log("new balance is:",this.#balance);

        }
        else {
            console.log("Invalid withdrawal amount or insufficient ")
        }
    }


    toString() {
        return `Account: ${this.#accountNumber}  Balance:  ${this.#balance}`;
    }

    

    
}

//test the class 
customer1= new Account("23456789",5000); //accountNumber, balance 
console.log("Account No ",customer1.accountNumber);
console.log("Balance   ",customer1.balance);
customer1.deposit(1000);
customer1.withdraw(300);
console.log(customer1.toString());




