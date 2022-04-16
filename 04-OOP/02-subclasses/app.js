class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getDescription() {
    return `${this.make}, ${this.model}, ${this.year}`;
  }

  static newModel = 'audi a3';

  static getModelName() {
    return `Name model is ${this.newModel}`;
  }

  static fuel = 'diesel';
  static getFuel() {
    return this.fuel;
  }
}

const car1 = new Car('bmw', '318x', 2022);
console.log(car1);

Car.prototype.color = 'green';

console.log(car1);

const car2 = new Car('222', '333', 444);
console.log(car2);

class Automobile extends Car {
  constructor(make, model, year, maxSpeed, noOfDoors) {
    super(make, model, year);

    this.maxSpeed = maxSpeed;
    this.noOfDoors = noOfDoors;
  }

  getMaxSpeedDoubled() {
    return this.maxSpeed * 2;
  }
}

const car3 = new Automobile('dsfsf', 'terter', 2019, 290, 4);
console.log(car3);

console.log(car3.getDescription());
//console.log(car2.getMaxSpeedDoubled());
console.log(car3.getMaxSpeedDoubled());

console.log(Automobile.getModelName());
