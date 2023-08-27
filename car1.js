class Cars {
    constructor(name,model,speed,year) {
        this.name=name;
        this.model=model;
        this.speed=speed;
        this.year=year;
    }
    age() {
        const date=new Date();
        return date.getFullYear()-this.year;
    }

    changeTime() {
        if (this.age()>5) {
            console.log("your car is ",this.age(), "years old time to change");

        }
        else {
            console.log("your car is ",this.age(), "no need to change");
        }
    }


}

const myCar= new Cars("Mercedes","xl",240,2013);
myCar.changeTime();
