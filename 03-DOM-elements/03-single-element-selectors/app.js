const title = document.getElementById('task-title');

title.style.color = 'red';
title.style.backgroundColor = '#333';
title.style.paddingLeft = '20px';
//title.style.display = 'none';

title.textContent = 'All Tasks';
title.innerText = 'All Listed Tasks';
title.innerHTML = '<b style="color: green">New Task</b>';

console.log(title);

let val = document.querySelector('li');
val.style.color = 'orange';
val.style.fontWeight = 'bold';
val.style.fontSize = 'large';

val = document.querySelector('li:first-child');
val = document.querySelector('li:last-child');
val = document.querySelector('li:nth-child(odd)');
val.style.color = 'red';
val = document.querySelector('li:nth-child(even)');
val.style.color = 'red';

val = document.querySelector('li:nth-child(3');
val.style.color = 'blue';
console.log(val);
