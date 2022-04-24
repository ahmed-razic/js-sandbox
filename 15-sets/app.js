const set1 = new Set();

set1.add(100);
set1.add({ a: 1, b: 2, c: 3 });
set1.add([1, 2, 3]);

console.log(typeof set1);

console.log(set1.has(0));
console.log(set1.has(100));
console.log(set1.has([1, 2, 3]));

for (let x of set1) {
  console.log(x);
}

console.log('--------------------------------------');
set1.forEach((item) => console.log(item));

console.log('--------------------------------------');
const arr1 = Array.from(set1);
console.log(arr1);
console.log(arr1[2]);
console.log('--------------------------------------');

console.log(set1.entries());
console.log(set1);

console.log('--------------------------------------');
const numbers = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];

const set3 = new Set(numbers);
console.log(numbers);
console.log(set3);
