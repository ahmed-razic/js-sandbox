document.querySelector('#joke-form').addEventListener('submit', getJokes);
document.addEventListener('DOMContentLoaded', getNumberOfJokes);
document.addEventListener('DOMContentLoaded', getJokeCategories);

function getJokes(e) {
  e.preventDefault();
  const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();

  xhr.open(
    'GET',
    `http://api.icndb.com/jokes/random/${number}?exclude=[explicit]`,
    true
  );

  xhr.onload = function () {
    if (this.status === 200) {
      let output;
      const jokes = JSON.parse(this.responseText);

      if (jokes.type === 'success') {
        jokes.value.forEach(function (joke) {
          output += `
          <li>${joke.joke}</li>
          `;
        });
      } else {
        output = `<li>Something is wrong.</li>`;
      }
      document.querySelector('#jokes').innerHTML = output;
    }
  };

  xhr.send();
}

function getNumberOfJokes() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'http://api.icndb.com/jokes/count', true);

  xhr.onload = function () {
    if (this.status === 200) {
      let output = document.querySelector('#number-of-jokes');
      const numberOfJokes = JSON.parse(this.responseText);

      if (numberOfJokes.type === 'success') {
        output.textContent = `Total jokes in DB: ${numberOfJokes.value}.`;
      } else {
        output.textContent = 'Something is wrong.';
      }
    }
  };
  xhr.send();
}

function getJokeCategories() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'http://api.icndb.com/categories', true);

  xhr.onload = function () {
    if (this.status === 200) {
      let output = document.querySelector('#category-of-jokes');
      const categoryOfJokes = JSON.parse(this.responseText);

      if (categoryOfJokes.type === 'success') {
        output.textContent = `Jokes categories in DB: ${categoryOfJokes.value}.`;
      } else {
        output.textContent = 'Something is wrong.';
      }
    }
  };
  xhr.send();
}
