const map1 = new Map();

const emptyObj = {};

const firstName = 'Ahmed';
const myFunc = function () {
  console.log('Hi');
};

const arr1 = [1, 2, 3];

map1.set(emptyObj, 'Value of key 1');
map1.set(firstName, 'Value of key 2');
map1.set(myFunc, 'Value of key 3');
map1.set(arr1, 'Value of key 1');

console.log(map1.get(emptyObj));
console.log(map1.get(firstName));
console.log(map1.get(myFunc));
console.log(map1.get(arr1));

console.log(map1);

const map2 = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
  ['key3', 'value3'],
]);

console.log(map2);

map2.forEach((key, value) => {
  console.log(key, value);
});

for (let [key, value] of map2) {
  console.log(key, value);
}
for (let key of map2.keys()) {
  console.log(key);
}
for (let value of map2.values()) {
  console.log(value);
}

const arr10 = Array.from(map2);
console.log(arr10);
