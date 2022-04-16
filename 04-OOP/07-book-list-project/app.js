//create constructor for Books
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//create constructor for UI DOM manipulation
function UI() {}

//create prototype methods for UI constructor
UI.prototype.addBook = function (book) {
  // const tr = document.createElement('tr');
  // const td1 = document.createElement('td');
  // const td2 = document.createElement('td');
  // const td3 = document.createElement('td');
  // const td4 = document.createElement('td');

  // td1.innerText = book.title;
  // td2.innerText = book.author;
  // td3.innerText = book.isbn;
  // td4.innerText = book.title;
  // tr.appendChild(td1);
  // tr.appendChild(td2);
  // tr.appendChild(td3);
  // tr.appendChild(td4);

  const row = document.querySelector('#book-list');
  const tr = document.createElement('tr');
  tr.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete">X</a></td>`;

  row.appendChild(tr);
};

UI.prototype.clearInputs = function () {
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
  document.querySelector('#isbn').value = '';
};

//define submit event handler
document.querySelector('#book-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;

  const book = new Book(title, author, isbn);

  const ui = new UI();
  ui.addBook(book);
  ui.clearInputs();
});
