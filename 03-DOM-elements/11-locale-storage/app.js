const input = document.getElementById('task');
const form = document.getElementById('task-form');

form.addEventListener('submit', saveInput);

function saveInput(e) {
  const inputTask = input.value;

  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  console.log(tasks);

  tasks.push(inputTask);
  localStorage.setItem('tasks', JSON.stringify(tasks));

  console.log(localStorage.getItem('tasks'));

  e.preventDefault();
}

const myTasks = JSON.parse(localStorage.getItem('tasks'));
console.log(myTasks);
