//for loop - used when number of iteration is known

// contiune - goes to nex iteration
// break - exits loop
const array = [1, 2, 3, 4, 5];
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element);
}

//while loop / do-while - used when number of iteration is unknown

let i = 1;

while (i <= 20) {
  console.log(i++);
}

//loop through array

//1-using for loop
const letters = ['a', 'b', 'c', 'd', 'e'];

for (let i = 0; i < letters.length; i++) {
  const element = letters[i];
  console.log(element);
}

//2-using forEach loop
letters.forEach((letter, index) => console.log(index, letter));

//map loop

const users = [
  { a: 1, b: 2, c: 3 },
  { a: 11, b: 22, c: 33 },
  { a: 111, b: 222, c: 333 },
];

const a = users.map((item) => item.a);

console.log(a);

//for-in loop
//in case of arrays x return index
for (x in users) {
  console.log(`${x}: ${users[x].b}`);
}

//in case of object x is property name

const person = {
  firstname: 'ahmed',
  lastname: 'razic',
  age: 46,
  city: 'sarajevo',
  add: function (x, y) {
    return x + y;
  },
};

//this gives property names
for (x in person) {
  console.log(x);
}

//this gives property values
for (x in person) {
  console.log(person[x]);
}
