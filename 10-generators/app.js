function* sayNames() {
  yield 'Ahmed1';
  yield 'Ahmed2';
  yield 'Ahmed3';
  yield 'Ahmed4';
  yield 'Ahmed5';
}

const names = sayNames();

console.log(names.next().value);
console.log(names.next().value);
console.log(names.next());
console.log(names.next());
console.log(names.next());
console.log(names.next());

function* createIDs() {
  let index = 0;

  while (true) {
    yield index++;
  }
}

const ids = createIDs();

console.log(ids.next().value);
console.log(ids.next().value);
console.log(ids.next().value);
console.log(ids.next().value);
