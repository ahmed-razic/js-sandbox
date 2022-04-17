const getButton = document.querySelector('#get-button');

getButton.addEventListener('click', fetchData);

function fetchData() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', './text.txt', true);

  xhr.onprogress = function () {
    console.log(this.status);
    console.log('ready state:', this.readyState);
  };

  xhr.onreadystatechange = function () {
    console.log(this.readyState);
  };

  xhr.onerror = function myFunction(myError) {
    console.log('there was an error:', myError);
  };

  xhr.onload = function () {
    if (this.status === 200) {
      const response = this.responseText;
      console.log(response);
    }
  };

  xhr.send();

  console.log(xhr);
}
