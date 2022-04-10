//A - for each loop

//1-arrays of primitives

const arr1 = [1, 2, 3, 4, 5];
arr1.forEach(function (item) {
  console.log(item);
});

arr1.forEach((item) => {
  if (item > 2 && item < 5) console.log('item ', item);
});

const arr2 = new Array('One', 'Two', 'Three', 'Four', 'Five');

arr2.forEach(function (item) {
  console.log(item.length);
});

//2-arrays of objects

const trees = [
  { name: 'Oak', age: 50, location: 'West forest' },
  { name: 'Pine', age: 15, location: 'East slopes' },
  { name: 'Birch', age: 28, location: 'Yellow river valey' },
  { name: 'Chestnut', age: 37, location: 'Misty mountain' },
];

console.log(trees);

trees.forEach((tree) => console.log(tree.location));

//B - map loop

const locations = trees.map((tree) => {
  return tree.location;
});

console.log(locations);

//C - for in loop

const tree = {
  name: 'Oak',
  age: 50,
  location: 'West forest',
  park: 'Park & Co',
};

for (x in tree) {
  console.log(x, tree[x]);
}

console.log('-------------------');
for (const key in tree) {
  if (Object.hasOwnProperty.call(tree, key)) {
    const element = tree[key];
    console.log(key, element);
  } else {
    console.log('There is no such property.');
  }
}

console.log('-------------------');

const car = {
  add: function (a, b) {
    return a + b;
  },
};
for (const key in car) {
  if (Object.hasOwnProperty.call(car, key)) {
    const element = car[key];
    console.log(key, element);
  } else {
    console.log('There is no such property.');
  }
}

//Arrays methods

//1-push, pop, unshift, shift, length, concat

const arr3 = [10, 101, 20, 202, 230, 30, 356, 40, 444, 50];
const arr4 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];
const arr5 = [1, 2, 3, 4, 5];

arr5.push(6);
arr5.push(6);
arr5.pop();
arr5.unshift(0);
arr5.unshift(0);
arr5.shift();

console.clear();
console.log(arr5);
console.log(arr5.length);

const arr6 = arr5.concat(arr1);
console.log(arr6);

console.log(arr5);
console.log(arr5.splice(0, 2));
console.log(arr5);

const deletedElement = arr4.splice(arr4.indexOf('three'), 1);
console.log(deletedElement);
console.log(typeof deletedElement);
console.log(arr4);
