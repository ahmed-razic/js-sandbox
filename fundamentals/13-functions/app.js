//function declaration

function sayHallo(firstName = 'Ahmed', lastName = 'Razic') {
  return `Hi ${firstName} ${lastName}`;
}

console.log(sayHallo());
console.log(sayHallo('Ibrahim', 'Razic'));

//function expression
//using named function
const square = function square(x = 3) {
  return x * x;
};

console.log(square());
console.log(square(5));
console.log(square(10));

//using anonimous  function (a function without a name)

const sum = function (m = 2, n = 3) {
  return m + n;
};

console.log(sum());
console.log(sum(5, 6));
console.log(sum(5, -6));

//immediately invokable function expression - iife
//they are used in module patterns

(function (m = 6, n = 3) {
  console.log(m / n);
})(10, 2);
(function (m = 6, n = 3) {
  console.log(m / n);
})();

//property method - a function inside of object
const todo = {
  getName: function (name) {
    console.log(name);
  },
};

todo.getName('ahmed');

todo.delete = function () {
  console.log('deleted');
};

todo.delete();

console.log(todo);
