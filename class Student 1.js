class Student {
    constructor(name,birthDay) {
        this.name=name;
        this.birthDay=birthDay; 
    }

    set birthDay(newYear) {
        let date=new Date();
        if (newYear>date.getFullYear()) {
            this._birthDay=date.getFullYear();
        }

        else {
            this._birthDay=newYear;
        }
    }

    get birthDay() {
        return this._birthDay;
    }

}

firstStudent=new Student("George",2100);
console.log(firstStudent.name);

console.log(firstStudent.birthDay);
console.log(firstStudent._birthDay);

