let val;

//Number to string

val = String(3);
val = String(333);
val = String(333 + 222);
val = (33333).toString();

//Bool to string
val = String(true);
val = true.toString();

//Date to string
val = String(new Date());

//Array to string
val = String([1, 2, 3, 4, 5]);

val = { a: 1, b: 2, c: 3 }.toString();

//String to number

val = Number('Ahmed');
val = Number('A');
val = Number('5');
val = Number('555');

val = parseInt('100.33');
val = parseInt('100.73');
val = parseFloat('100.30');

//Type coerrsion - automatic type conversion

const a = (4).toString();
const b = 5;
val = a + b;

const c = (4).toString();
const d = 5;
val = a * b;

//Console output
console.log(val);
console.log(typeof val);
//console.log(val.toFixed(2));
