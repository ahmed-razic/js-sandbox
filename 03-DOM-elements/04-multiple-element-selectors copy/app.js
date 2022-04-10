//getElementsByClassName

const items1 = document.getElementsByClassName('collection-item');
const items2 = document.getElementsByClassName('secondary-content');
console.log(items1);
console.log(items2);

items1[2].style.color = 'red';

//getElementsByTagName

const items3 = document.querySelector('ul').getElementsByTagName('li');
console.log(items3);

const items4 = document.getElementsByTagName('li');
console.log(items4);

const items5 = document.querySelectorAll('li:nth-child(odd)');
console.log(items5);

const items6 = document.querySelectorAll('li:nth-child(even)');
console.log(items6);

//items1.forEach((item) => (item.style.color = 'red'));
items5.forEach((item) => (item.style.color = 'blue'));
items6.forEach((item) => (item.style.color = 'green'));

for (let index = 0; index < items4.length; index++) {
  items4[index].style.color = 'magenta';
}
