export class Person{
    age = 25
    // location = "Canada"
    get location(){
        return "Canada"
    }
    
    // Constructor - Method which executes by default when you create object of the class
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Methods
    fullName(){
        return this.firstName + this.lastName;
    }
}

// let person = new Person("Brian ", "QA"); // Object instattiation from a class
// let person1 = new Person("John ", "Who");
// console.log(person.age);
// console.log(person.location);
// console.log(person.fullName());
// console.log(person1.fullName());


