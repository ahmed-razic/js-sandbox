const form = document.querySelector('form');
const taskInput = document.getElementById('task');

//form.addEventListener('submit', runEvent);
// taskInput.addEventListener('keydown', runEvent);
// taskInput.addEventListener('keyup', runEvent);
// taskInput.addEventListener('keypress', runEvent);
// taskInput.addEventListener('focus', runEvent);
// taskInput.addEventListener('blur', runEvent);
// taskInput.addEventListener('cut', runEvent);
// taskInput.addEventListener('paste', runEvent);
taskInput.addEventListener('input', runEvent);

function runEvent(e) {
  console.log(`Event Type: ${e.type}`);
  // console.log(`Event Target: ${e.target}`);
  // console.log(taskInput.value);
  // taskInput.value = '';

  e.preventDefault();
}
