import { Vehicle } from "./Vehicle.js";

// 3. Inheritance
export class Car extends Vehicle {
  constructor(brand, fuel) {
    super("Car", fuel);  // calls parent constructor
    this.brand = brand;
  }

  // 4. Polymorphism (method overriding)
  start() {
    console.log(`${this.brand} car is roaring to life...`);
  }
}
