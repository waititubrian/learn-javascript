import { Car } from "./Car.js";
import { Bike } from "./Bike.js";

let toyota = new Car("Toyota", "Petrol");
let yamaha = new Bike("Yamaha", "Diesel");

console.log("Encapsulation (fuel type):", toyota.fuelType);  // Petrol
console.log("Encapsulation (fuel type):", yamaha.fuelType);  // Diesel

// Abstraction: user doesn't know internal steps, just calls start()
toyota.start(); // Toyota car is roaring to life...
yamaha.start(); // Yamaha bike is revving up...

// Polymorphism: same method name → different behavior
let vehicles = [toyota, yamaha];
vehicles.forEach(v => v.start());
