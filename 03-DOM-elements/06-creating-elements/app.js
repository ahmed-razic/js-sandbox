const li = document.createElement('li');
li.className = 'collection-item';
const text = document.createTextNode('New Task');
li.appendChild(text);

const link = document.createElement('a');
link.className = 'delete-item secondary-content';
link.innerHTML = '<i class="fa fa-remove"></i>';
li.appendChild(link);

const ul = document.querySelector('ul.collection');
ul.appendChild(li);

console.log(li);
console.log(ul);
