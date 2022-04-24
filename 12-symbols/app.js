const sym1 = Symbol();
const sym2 = Symbol('sym2');

console.log(sym1, sym2);
const sym3 = Symbol();

console.log(sym1 === sym3);
console.log(sym1 == sym3);

console.log(typeof sym3);
console.log(sym2.toString());
console.log();

const key1 = Symbol();
const key2 = Symbol();
const key3 = Symbol();
const key4 = 'key4';
const key5 = 'key5';
const key6 = 'key6';

const myObject = {};

myObject[key1] = 'Value of key 1';
myObject[key2] = 'Value of key 2';
myObject[key3] = 'Value of key 3';

myObject.key4 = 'Value of key 4';
myObject.key5 = 'Value of key 5';
myObject.key6 = 'Value of key 6';

for (let x in myObject) {
  console.log(x, myObject[x]);
}
