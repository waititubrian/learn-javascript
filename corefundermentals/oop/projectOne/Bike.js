import { Vehicle } from "./Vehicle.js";

export class Bike extends Vehicle {
  constructor(brand, fuel) {
    super("Bike", fuel);
    this.brand = brand;
  }

  // Polymorphism again
  start() {
    console.log(`${this.brand} bike is revving up...`);
  }
}
