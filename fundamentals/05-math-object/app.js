let val;

val = 8 % 3;
val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.round(2.5);
val = Math.ceil(3.2);
val = Math.floor(5.9);

val = Math.sqrt(4);
val = Math.pow(2, 4);
val = Math.abs(-8);
val = Math.max(4.545, 564, 54564);
val = Math.min(4.545, 564, 54564);

val = Math.random();

val = Math.floor(Math.random() * 5 + 1);

const min = 10;
const max = 21;

function find10() {
  return Math.floor(Math.random() * min + (max - min));
}

let result;

// while (true) {
//   const result = find10();
//   console.log(result);
//   if (result === 10) break;
// }
