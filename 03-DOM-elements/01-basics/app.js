const node = document.documentElement.firstChild;

console.log(node.nodeType);

if (node.nodeType !== 8) {
  console.log('You should comment your code');
}

console.log(document.nodeType);
console.log(document.body.parentNode);
console.log(document.all);

let val = document.all;
console.log(Array.isArray(val));

const arr1 = Array.from(val);
console.log(Array.isArray(arr1));

arr1.forEach((item) => console.log(item.nodeName));
