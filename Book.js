class Book {
    #title;
    #author;
    #price;
    #quantity;
    constructor(title,author,price,quantity) {
        this.#title=title;
        this.#author=author;
        this.#price=price;
        this.#quantity=quantity;

    }

    set title(bookName) {
        if (bookName!=null && bookName.trim().length>0) {
            this.#title=bookName;

        }


    }
    get title() {
        return this.#title;
    }

    set author(writer) {
        if (writer!=null) {
            this.#author=writer;
        }
    }
    get author() {
        return this.#author;
    }

    set price(bookPrice) {
        if (bookPrice>0) {
            this.#price=bookPrice;
        }
    }
    get price() {
        return this.#price;
    }
    set quantity(bookQuantity) {
        if (bookQuantity>0) {
            this.#quantity=bookQuantity;
        }
    }
    get quantity() {
        return this.#quantity;
    }

    getTotalPrice() {
        if (this.#price>0 && this.#quantity>0) {
            let totalPrice=this.#price*this.#quantity;
            return totalPrice;
        } else {
            console.log("Error with price or quantity. Check Again")
        }
        
    }

}

let firstBook=new Book("Aslan","Kaplan Artin",100,12);
console.log(firstBook.price);
let bookTotal=firstBook.getTotalPrice();
console.log(bookTotal);

