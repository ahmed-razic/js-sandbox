// document.querySelector('.clear-tasks').addEventListener('click', function (e) {
//   console.log('Hello');

//   e.preventDefault();
// });

// document.querySelector('.clear-tasks').addEventListener('click', onClick);

// function onClick(e) {
//   e.preventDefault();

//   let val = e;

//   val = e.target;
//   val = e.target.className;
//   val = e.target.id;
//   val = e.target.classList;

//   val = e.type;
//   val = e.timeStamp;

//   val = e.clientX;
//   val = e.offsetX;

//   console.log(val);
// }

//document.querySelector('.clear-tasks').addEventListener('click', runEvent);
//document.querySelector('.clear-tasks').addEventListener('mousedown', runEvent);
//document.querySelector('.clear-tasks').addEventListener('mouseup', runEvent);
//document.querySelector('.clear-tasks').addEventListener('mouseenter', runEvent);
//document.querySelector('.clear-tasks').addEventListener('mouseleave', runEvent);

// document.querySelector('.card').addEventListener('mouseenter', runEvent);
// document.querySelector('.card').addEventListener('mouseleave', runEvent);
// document.querySelector('.card').addEventListener('mouseover', runEvent);
// document.querySelector('.card').addEventListener('mouseout', runEvent);

document.querySelector('.card').addEventListener('mousemove', runEvent);

function runEvent(e) {
  console.log(`Event Type: ${e.type}`);

  document.querySelector(
    'h5'
  ).textContent = `MouseX: ${e.offsetX}, MouseY: ${e.offsetY},`;

  document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY}, 50 )`;

  e.preventDefault();
}
