const id = 100;

//comparison by value
if (id == 100) {
  console.log('Correct');
} else {
  console.log('Incorrect');
}

//comparison by value & type

if (id === 100) {
  console.log('Correct');
} else {
  console.log('Incorrect');
}

//test for undefined

if (typeof id !== 'undefined') {
  console.log(`id is ${id}`);
} else {
  console.log('no id');
}

//ternary operator
console.log(id === 100 ? 'correct' : 'incorrect');
