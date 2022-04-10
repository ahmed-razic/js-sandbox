const firstName = 'Ahmed';
const lastName = 'Razic';

let val;

//concatenation
val = firstName + ' ' + lastName;

//append

val = firstName;
val += lastName;

//concat methods

val = firstName.concat(' ', lastName, '.');

//length
let len = val.length;

//escape characters

val = "That's awsome, I can't wait";

//to upperCase, lowerCase

val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[3];
val = firstName[0];

//in ES6 (ES2015) template literals or template strings were introduced

val = `${firstName.concat('     ', lastName)}`;

//indexOf(), charAt(), substring(), slice(), split(), replace(), includes()
const text = 'Hello, my name is Ahmed.';

val = text.indexOf('my');
val = text.charAt(7);
val = text.substring(2, 8);
val = text.slice(2, 90);
val = text.split(' ');
val = text.split(' ', 3);
val = text.split(',');
val = text.replace('Ahmed', 'Ibrahim');
val = text.includes('Ahmed');
val = text.includes('Ahmedd');

console.log(val);
console.log(len);
console.log(text);
