// Object - Collection of properties

let person = {
    firstName: "Brian",
    lastName: "Waititu",
    age: 24,
    fullName: function(){
        console.log(this.firstName + this.lastName);
    }
}

console.log(person.fullName());
console.log(person.firstName);
console.log(person['lastName']);
person.firstName = "Lawrence Muraya";  // Updating property
console.log(person.firstName);
person.gender = "Male";  // Add new property
console.log(person);
delete person.gender;  // Delete property
console.log(person);
console.log("gender" in person);  // Check if propoerty exist in object
// Print values of all the properties/object
for (let key in person){
    console.log(person[key]);
}