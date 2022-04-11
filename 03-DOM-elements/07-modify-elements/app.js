//replace element

const newHeading = document.createElement('h2');
newHeading.id = 'task-title';
newHeading.appendChild(document.createTextNode('Task List'));

const oldHeading = document.querySelector('#task-title');

const parent = document.querySelector('.card-action');

parent.replaceChild(newHeading, oldHeading);

//remove element

const listItem = document.querySelector('li:first-child');
listItem.remove();

const list = document.querySelector('ul.collection');
list.removeChild(list.children[0]);
//console.log(listItem);

const link = list.children[0].children[0];

val = link.className;
val = link.classList;
//link.className = 'dddd';
link.classList.add('test');

val = link.getAttribute('href');
link.setAttribute('href', 'http://google.com');
val = link.getAttribute('href');

val = link.hasAttribute('href');
link.removeAttribute('href');

console.log(val);
console.log(link);
