
class Person {
    #firstName;
    #lastName;
    #dateOfBirth;

    constructor(firstName, lastName, dateOfBirth) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.setDateOfBirth(dateOfBirth); // We still need validation for the birth date.
    }

    // No setters for firstName and lastName since there's no validation to do for this example.

    get firstName() {
        return this.#firstName;
    }

    get lastName() {
        return this.#lastName;
    }

    setDateOfBirth(birthYear) {
        let currentYear = new Date().getFullYear();
        if (birthYear && birthYear < currentYear) {
            this.#dateOfBirth = birthYear;
        } else {
            console.log("Invalid Birthday Year");
        }
    }

    get dateOfBirth() {
        return this.#dateOfBirth;
    }

    getAge() {
        let currentYear = new Date().getFullYear();
        return currentYear - this.#dateOfBirth;
    }
}

// Testing the class
let firstPerson = new Person("John", "Doe", 1976);
console.log(firstPerson.firstName); // Outputs: John
console.log(firstPerson.lastName);  // Outputs: Doe
console.log(firstPerson.getAge());  // Outputs: 47 (assuming the current year is 2023)
