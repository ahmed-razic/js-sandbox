function Car(model, year, fuelType) {
  this.model = model;
  this.year = year;
  this.fuelType = fuelType;

  this.getDescription = function (cost) {
    return `Model is ${this.model}, and year is ${this.year}. Car uses ${this.fuelType} fuel and it costs ${cost}`;
  };

  console.log(this);
}

const car1 = new Car('audi', 2022, 'diesel');
const car2 = new Car('ford', 2021, 'petrol');

console.log(car1.getDescription(2000));
console.log(car2.getDescription(3000));
