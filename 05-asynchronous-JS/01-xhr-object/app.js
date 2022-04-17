document.querySelector('#get-button').addEventListener('click', getData);

const output = document.querySelector('#output');

function getData() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', './text.txt', true);

  xhr.onprogress = function () {
    console.log('loading...');
  };

  xhr.onreadystatechange = function () {
    console.log(this.readyState);
  };

  xhr.onload = function () {
    if (this.status === 200) {
      output.innerHTML = `<h3>${this.responseText}</h3>`;
    }
  };

  console.log(xhr);

  xhr.send();
}
