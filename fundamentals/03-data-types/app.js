//Primitive data types:
// 1-String
// 2-Number
// 3-Boolean
// 4-Null   //although typeof null returns object type (it's a bug)
// 5-Undefined
// 6-Symbol

//Reference data types
// 1-Arrays
// 2-Objects Literals
// 3-Functions //typeof returns function
// 4-Dates
// 5-ObjectWrapers for strings and numbers

//JS is dynamically typed language. Types are associated with values not variables. Same variable can hold diferente types. Type of variable is not defind explicitly during declaration. C++ or Java are statically typed languages. Supersets of JS can allow static typing (TypeScript, Flow)

let a = 3;
console.log(typeof a); //Number
a = 'Three';
console.log(typeof a); //String
a = { a: 1, b: 2, c: 3 };
console.log(typeof a); //Object Literal

//string aa = "Ahmed"

//Primitive types
console.log('\nPrimitive types');
let val;

val = 'Ahmed';
val = 45;
val = true;
val = null;
let ba;
let sym = Symbol('I am a string');

console.log(typeof ba);
console.log(typeof sym);
console.log(sym);
console.log(sym.description);
console.log(sym.valueOf());

//Reference types (all are tye of Object)

console.log('\nReference types');
let ref;
ref = [1, 2, 3];
ref = { a: 1 };
ref = new Date();
ref = function () {
  return true;
};

console.log(typeof ref);
