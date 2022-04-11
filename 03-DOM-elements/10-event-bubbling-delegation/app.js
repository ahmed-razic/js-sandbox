//event bubbling

// document.querySelector('.card-title').addEventListener('click', function () {
//   console.log('card-title');
// });
// document.querySelector('.card-content').addEventListener('click', function () {
//   console.log('card-content');
// });
// document.querySelector('.card').addEventListener('click', function () {
//   console.log('card');
// });
// document.querySelector('.col').addEventListener('click', function () {
//   console.log('col');
// });
// document.querySelector('.row').addEventListener('click', function () {
//   console.log('row');
// });
// document.querySelector('.container').addEventListener('click', function () {
//   console.log('container');
// });

//event delagation

document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
  if (e.target.classList.contains('fa-remove')) {
    console.log(e.target);
    console.log(e.target.parentElement.parentElement);
    e.target.parentElement.parentElement.remove();
  }
}
