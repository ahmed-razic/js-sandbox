const person = {
  firstName: 'Ahmed',
  lastName: 'Razic',
  age: 46,
  email: 'ahmed.razic@gmail.com',
  hobbies: ['it', 'hiking', 'cycling'],
  address: {
    street: 'Main street 101',
    city: 'Sarajevo',
    state: 'BA',
  },
  getBirthYear: function () {
    return 2022 - this.age;
  },
};

let val;

val = person;

console.log(val.hasOwnProperty('firstName'));
console.log(val.hasOwnProperty('firstNames'));
console.log(val.hasOwnProperty('getBirthYear'));

val = person.firstName;
val = person['lastName'];
val = person.hobbies;
val = person.hobbies[2];
val = person.address.city;
val = person.getBirthYear();

console.log(val);

const people = [
  { name: 'Ahmed1', age: 46 },
  { name: 'Ahmed2', age: 26 },
  { name: 'Ahmed3', age: 36 },
  { name: 'Ahmed4', age: 16 },
  { name: 'Ahmed5', age: 56 },
];

people.forEach((person) => {
  console.log(person.name);
  console.log(person.age);
});
