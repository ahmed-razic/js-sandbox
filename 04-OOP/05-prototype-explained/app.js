function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;

  this.getFullName = function () {
    return `First name ${this.firstName}, last name ${this.lastName} and age is ${this.age}`;
  };
}

const ahmed = new Person('ahmed', 'razic', 46);
const ibrahim = new Person('ibrahim', 'razic', 10);

console.log(ahmed);
console.log(ibrahim);

console.log(ahmed.hasOwnProperty('firstName'));
console.log(ahmed.hasOwnProperty('firstName1'));
console.log(ahmed.hasOwnProperty('getFullName'));

Person.prototype.getAge = function () {
  return `${this.firstName} is ${this.age} years old`;
};

console.log(ahmed);
console.log(ahmed.getAge());
console.log(ibrahim.getAge());

console.log(ahmed.hasOwnProperty('getAge'));

Person.prototype.setLastName = function (newLastName) {
  this.lastName = newLastName;
};

ahmed.setLastName('Razic Razic');
console.log(ahmed.getFullName());
