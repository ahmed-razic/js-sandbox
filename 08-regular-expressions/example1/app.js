//let regexp = /hello/;
// let regexp = /hello/g;
let regexp = /hello/i;

// let result = regexp.exec('heldlo Hello world hellololo');
// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// result = regexp.test('hello');
// console.log(result);

// result = regexp.test('helslo');
// // console.log(result);

// let result = regexp.test('hello');
// console.log(result);
// result = regexp.test('hsello');
// console.log(result);

// let str = 'Hello, my name is Ahmed.';

// const result = str.match(regexp);
// console.log(result);

let str = 'Hello, my name is Ahmed.';

const result = str.replace(regexp, 'HI');
console.log(result);
