// Parent class
// 1. Encapsulation
export class Vehicle {
  #fuel;  // private property (encapsulated)

  constructor(type, fuel) {
    this.type = type;
    this.#fuel = fuel;  // private, only accessible inside class
  }

  // Getter (controlled access)
  get fuelType() {
    return this.#fuel;
  }

    // 2. Abstraction
  start() {
    console.log(`Starting the ${this.type}...`);
  }
}
