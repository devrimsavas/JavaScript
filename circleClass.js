class Circle {
    #radius;
    constructor(radius) {
        this.radius=radius; //private but matter if we want to use setter 
        
    }

    set radius(radiusOfCircle) {
        if (radiusOfCircle>0) {
            this.#radius=radiusOfCircle;
        }else {
            console.log("you have entered negative or zero value");
        }
    }
    get radius() {
        return this.#radius;
    }
    area() {
        let areaOfCircle=Math.PI*this.#radius**2;
        return areaOfCircle;
    }

    circumference() {
        let circOfCircle=2*Math.PI*this.#radius;
        return circOfCircle;
    }



}

//test 

let circle1=new Circle(12);
let area=circle1.area().toFixed(4);
let circum=circle1.circumference().toFixed(4);
console.log("Area of a circle of R=",circle1.radius,":",area);
console.log("circumference=",circum);
