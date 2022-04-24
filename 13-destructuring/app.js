// let [a, b] = [200, 300, 400, 300, 300, 300];
// let [c, d, ...rest] = [200, 300, 400, 300, 300, 300];

// console.log(a, b);
// console.log(c, d, rest);

// const arr1 = [1, 2, 3, 4, 5];

// const m1 = arr1[0];
// const m2 = arr1[1];
// const m3 = arr1[2];
// const m4 = arr1[3];
// const m5 = arr1[4];

// console.log(m1, m2, m3, m4, m5);

// let [cc, dd, ee, ff, gg] = arr1;

// console.log(cc, dd, ff, gg, ee);

let q, p;

({ q, p } = { q: 1, p: 2, c: 3, d: 4, e: 5 });

console.log(q, p);

let a, b;

({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });

console.log(a, b);

// let firstName, lastName;

// ({ firstName, lastName } = {
//   firstName: 'Ahmed',
//   lastName: 'Razic',
//   age: 46,
//   city: 'Sarajevo',
// });

// console.log(firstName, lastName);

const arr2 = ['one', 'two', 'three'];

const [mmm, nnn] = arr2;

console.log(mmm, nnn);

const person = {
  firstName: 'Ahmed',
  lastName: 'Razic',
  age: 46,
  city: 'Sarajevo',
};

const { firstName, lastName, age, city } = person;

console.log(firstName, lastName, age, city);
