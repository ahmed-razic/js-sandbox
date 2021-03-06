//create constructor for Books
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

//create constructor for UI DOM manipulation
class UI {
  constructor() {}
  //create prototype methods for UI constructor
  addBook(book) {
    //one option
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

    //better option
    const row = document.querySelector('#book-list');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>`;

    row.appendChild(tr);
  }
  clearInputs() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }
  showAlert(message, className) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert ${className}`;
    alertDiv.appendChild(document.createTextNode(message));

    const form = document.querySelector('#book-form');
    const parent = document.querySelector('.container');

    parent.insertBefore(alertDiv, form);

    setTimeout(function () {
      document.querySelector('.alert').remove();
    }, 3000);
  }
  deleteBook(target) {
    if ((target.className = 'delete')) {
      target.parentElement.parentElement.remove();
      this.showAlert('Book deleted', 'success');
    }
  }
}

class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static displayBooks() {
    const books = Store.getBooks();
    const ui = new UI();

    books.forEach(function (book) {
      ui.addBook(book);
    });
  }

  static addBook(book) {
    let books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static deleteBook(isbn) {
    const books = Store.getBooks();

    books.forEach(function (book, index) {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}

//DOM loaded event listener

document.addEventListener('DOMContentLoaded', Store.displayBooks);

//submit event listener
document.querySelector('#book-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;
  const ui = new UI();

  if (title === '' || author === '' || isbn === '') {
    ui.showAlert('Please fill all inputs.', 'error');
  } else {
    const book = new Book(title, author, isbn);

    ui.addBook(book);
    Store.addBook(book);

    ui.showAlert('Book added', 'success');
    ui.clearInputs();
  }
});

//delete event listener
document.querySelector('#book-list').addEventListener('click', function (e) {
  const ui = new UI();
  ui.deleteBook(e.target);

  Store.deleteBook(e.target.parentElement.previousElementSibling.textContent);
  console.log(ui);
});
