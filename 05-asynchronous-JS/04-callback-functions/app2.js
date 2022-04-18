function parent(text, callback) {
  console.log(this);
  console.log(text + ' 1');
  callback(text);
}

function children(text) {
  console.log(this);
  console.log(text + ' 2');
}

parent('I am text', children);
