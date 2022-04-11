const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item');

//console.log(list);
//console.log(listItem);

let val;

val = list.childNodes;
val = list.childNodes[0].nodeType;
val = list.childNodes[0].nodeValue;
val = list.childNodes[0].nodeName;
val = list.childNodes[0];
val = list.childNodes;

val = list.children;
val = list.children[0].textContent = 'New List Item';
val = list.children[0];
val.style.color = 'red';
val = list.children[1].children[0].classList;

val = list.firstChild;
val = list.firstElementChild;
val = list.lastElementChild;

val = listItem.parentElement;
val = listItem.parentNode;

val = listItem.nextElementSibling;
val = listItem.nextSibling;
val = listItem.previousSibling.previousSibling;
console.log(val);
