let val;

val = document.all;

const arr = Array.from(val);
//console.log(arr);

//arr.forEach((item) => console.log(item));

val = document.title;
val = document.children;
val = document.childNodes[1].childNodes[2].childNodes;
val = document.doctype;
val = document.documentElement;
val = document.nodeType;

val = document.forms[0];
//val = document.forms[1];

val = document.links;

const links = Array.from(val);

console.log(val);
console.log(links);

console.log(val[0].classList);
console.log(val[0].className);
console.log(val[0].localName);
