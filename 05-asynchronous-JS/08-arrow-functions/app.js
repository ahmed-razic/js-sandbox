//function declaration
function sayHello1(name = 'Ahmed') {
  console.log(`Hello ${name}`);
}

sayHello1();

//function expression
const sayHello2 = function (name = 'Ibrahim') {
  console.log(`Hello ${name}`);
};

sayHello2();

//Imediately invocable function expression
(function (name = 'Amina') {
  console.log(`Hello ${name}`);
})('Merjema');

//arrow function
const sayHello4 = (name = 'Merjema') => {
  console.log(`Hello ${name}`);
};

sayHello4('Amina');
sayHello4();

const sayHello5 = (name) => 'Hello ' + name;

console.log(sayHello5('Muhammed'));

const returnObject = () => ({
  msg: 'Hello',
});

console.log(returnObject());

const letterA = [{ a: 1 }, { a: 2 }, { a: 3 }];

const as = letterA.map((item) => item.a);

console.log(as);
console.log(letterA);
