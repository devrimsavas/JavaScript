//product class: later it will write an interface and random sell and restock 
// further ideas: price will be added and everyday random customers come 
// My Shop class will be add 

class Product {
    #productName; //not less than 5 letters 
    #productCode; //not less than 8 letters
    #stockCount;
    constructor(productName,productCode,stockCount) {
        this.productName=productName;
        this.productCode=productCode;
        this.stockCount=stockCount;
    }

    set productName(productTitle) {
        if (productTitle.length>5 ) {
            this.#productName=productTitle;
        } else {
            console.log("A product name cannot be shorten than 5 letters");
        }

    }
    get productName() {
        return this.#productName;
    }

    set productCode(codeOfProduct) {
        let numDigits=codeOfProduct.toString().length; //i prefer to keep it as numbers 
        if (numDigits==8) {
            this.#productCode=codeOfProduct;
        } else {
            console.log("A Product code should be 8 digits");
        }
    

        
    }
    get productCode() {
        return this.#productCode;
    }

    set stockCount(productInStock) {
        if (productInStock>0) {
            this.#stockCount=productInStock;
        } else {
            console.log("Product of",this.#productName," Number is 0");
        }
    }
    get stockCount() {
        return this.#stockCount;
    }

    sellProduct(amountOfProduct) {
        if (this.#stockCount>amountOfProduct) {
            this.#stockCount-=amountOfProduct;
        } else {
            console.log("Not enough product");
        }
    }

    reStock(addStock) {
        if (addStock>0) {
            this.#stockCount+=addStock;
        }
    }

    toString() {
        let productText=this.productCode;

        return productText;
    }
}



// add an automatic code producer
function autoCodeProducer(digits) {
    var autoCode="";
    for ( var i=0; i<digits; i++) {
        let digit=Math.floor(Math.random()*10);
        autoCode+=digit;
    }
    //console.log(autoCode);
    return parseInt(autoCode);


}
//test class 
let codeProduct1=autoCodeProducer(8);
let product1= new Product("Deodorant",codeProduct1,100);
console.log(product1);
//sell and restock 
product1.sellProduct(20);
product1.reStock(50);
 //re-write product1
console.log(product1);

//test if we try to sell more than stock
product1.sellProduct(500);






