//define new class
//define class constructor
//define properties and methods
//define static properties
//make an instances of class
//check prototype object and its methods

class Cat {
  constructor(name, age, color, note) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.note = note;

    this.add = function (x, y) {
      return x + y;
    };
  }

  catDescription() {
    return `Cat name is ${name}, age is ${this.age} and color is ${this.color}`;
  }

  static species = 'domestic';
  static catSpecies(name) {
    return name + ' ' + this.species;
  }
}

const cat1 = new Cat('sparkles', 5, 'black&white', 'can attack whenever');

console.log(cat1.name);
console.log(cat1.age);
console.log(cat1.color);
console.log(cat1.note);
console.log(cat1.species);

console.log(cat1.catDescription());
//console.log(cat1.catSpecies());
console.log(Cat.catSpecies('spot'));

const cat2 = new Cat('sparkles', 5, 'black&white', 'can attack sometimes');

console.log(cat1.add == cat2.add);
console.log(cat1.catDescription == cat2.catDescription);

console.log(cat1);
console.log(cat2);

Cat.prototype.getNote = function () {
  return this.note;
};

console.log(cat1.getNote());
console.log(cat2.getNote());

console.log(cat1);
console.log(cat2);

Cat.prototype.setNote = function (newNote) {
  this.note = newNote;
};

cat1.setNote('Now the cat is ok');
console.log(cat1.getNote());

Cat.prototype.weight = 12;
Cat.prototype.height = 120;

console.log(cat1.weight);
console.log(cat1);

console.log(Cat);
