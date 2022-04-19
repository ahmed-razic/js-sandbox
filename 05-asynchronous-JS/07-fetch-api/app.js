const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const output = document.querySelector('#output');

button1.addEventListener('click', getText);
button2.addEventListener('click', getJSON);
button3.addEventListener('click', getAPIData);

function getText() {
  fetch('./text.txt')
    .then(function (result) {
      console.log(result);
      return result.text();
    })
    .then(function (data) {
      console.log(data);
      output.textContent = data;
    })
    .catch(function (err) {
      console.log(err);
    });
}

function getJSON() {
  fetch('./posts.json')
    .then(function (result) {
      return result.json();
    })
    .then(function (data) {
      let list = '';
      data.forEach(function (item) {
        list += `<li>${item.name}</li>`;
      });
      output.innerHTML = list;
    })
    .catch(function (err) {
      console.log(err);
    });
}

function getAPIData() {
  fetch('https://api.github.com/users')
    .then(function (result) {
      return result.json();
    })
    .then(function (data) {
      let list = '';
      data.forEach(function (item) {
        list += `<li>${item.login}</li>`;
      });
      output.innerHTML = list;
    })
    .catch(function (err) {
      console.log(err);
    });
}
