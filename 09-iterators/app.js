// function myIteratorFunction() {
//   let i = 1;

//   return {
//     nextNumber: function () {
//       return i < 6 ? { value: i++, done: false } : { done: true };
//     },
//   };
// }

// const numbers = myIteratorFunction();

// console.log(numbers.nextNumber().value);
// console.log(numbers.nextNumber().value);
// console.log(numbers.nextNumber().value);
// console.log(numbers.nextNumber().value);
// console.log(numbers.nextNumber());
// console.log(numbers.nextNumber().value);
// console.log(numbers.nextNumber());

//a function that takes an argument and iterates it one by one with each call of that function
//iterator function

function iterator(items) {
  let i = 0;

  return {
    nextItem: function () {
      console.log(i);
      return i < items.length + 1
        ? { value: items[i++], done: false }
        : { done: false };
    },
  };
}

const nums = ['one', 'two', 'three', 'four', 'five'];

const item = iterator(nums);

console.log(item.nextItem());
console.log(item.nextItem());
console.log(item.nextItem());
console.log(item.nextItem());
console.log(item.nextItem());
