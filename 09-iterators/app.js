function myIteratorFunction() {
  let i = 1;

  return {
    nextNumber: function () {
      return i < 6 ? { value: i++, done: false } : { done: true };
    },
  };
}

const numbers = myIteratorFunction();

console.log(numbers.nextNumber().value);
console.log(numbers.nextNumber().value);
console.log(numbers.nextNumber().value);
console.log(numbers.nextNumber().value);
console.log(numbers.nextNumber().value);
console.log(numbers.nextNumber());
