let a = 1;
const b = 2;
var c = 3;
console.log('Global scope:', a, b, c);

function funScope() {
  let a = 10;
  const b = 20;
  var c = 30;
  console.log('Function scope:', a, b, c);
}
funScope();
console.log('Global scope:', a, b, c);

if (true) {
  let a = 100;
  const b = 200;
  var c = 300;
  console.log('Block scope 1:', a, b, c);
}

for (let i = 0; i < 1; i++) {
  let a = 1000;
  const b = 2000;
  var c = 3000;
  console.log('Block scope 2:', a, b, c);
}

console.log('Global scope:', a, b, c);
