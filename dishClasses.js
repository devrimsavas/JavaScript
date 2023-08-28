//create a superclass for restaurant 
class Dish {
    #price //we need to declare price as private in case price is entered below zero
    constructor(name,price) {
        this.name=name;
        this.#price=price;

    }
    //set method for price 
    set price(dishPrice) {
        if (dishPrice>0) {
            this.#price=dishPrice;
        } else {
            console.log("price cannot be under zero") 
        }
    }
    get price() {
        return this.#price;
    }
}

//pizza class is subclass of Dish 

class Pizza extends Dish {
    #ingredients; //the array should not be empty 
    constructor(name,price,ingredients) {
        super(name,price);
        this.#ingredients=ingredients; //ingredients are an array 
    } 
    set ingredients(pizzaIngredients) {
        if (pizzaIngredients && Array.isArray(pizzaIngredients) && pizzaIngredients.length>0) {
            this.ingredients=pizzaIngredients;
        } else {
            console.log("Pizza ingredients cannot be empty");
        }

    }
    get ingredients() {
        
        return this.#ingredients.join(",");
    }
}

//pancakes 
class Pancakes extends Dish {
    #sweet // private and it is boolean and true, because pancakes should be served sweet
    constructor(name,price,sweet=true) {
        super(name,price);
        this.#sweet=sweet;
    }
    set sweet(servedSweet) {
        if (typeof servedSweet==='boolean'&& servedSweet) {
            this.#sweet=servedSweet;
        } else {
            console.log("pancake shoud be served sweet");
        }
                
    }
    get sweet() {
        return this.#sweet;
    }
}

//Pasta 
class Pasta extends Dish {
    #isVegetarian; //private to see if vegetarian or not 
    constructor(name,price,isVegetarian=false) {
        super(name,price);
        this.isVegetarian=isVegetarian; 
    }

    set isVegetarian(vegan) {
        if (typeof vegan==='boolean') {
            
            this.#isVegetarian=vegan;
            if (vegan) {
                console.log("Pasta is Vegan ");
            } else {
                console.log("Pasta contains meet");
            }

        } else {
            console.log("Pasta should be vegan 1 or not 0");
        }
    }
    get isVegetarian() {
        return this.#isVegetarian;
    }

}

export { Pizza, Pancakes, Pasta };









