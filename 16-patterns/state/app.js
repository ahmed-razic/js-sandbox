class PageState {
  constructor() {
    let currentState = new HomeState(this);

    this.init = function () {
      this.change(new HomeState());
    };

    this.change = function (state) {
      currentState = state;
    };
  }
}

class HomeState {
  constructor(page) {
    document.querySelector('#heading').textContent = 'Home';
    document.querySelector('#content').innerHTML = `<h1>JUMBOTRON</h1>`;
  }
}

class AboutState {
  constructor(page) {
    document.querySelector('#heading').textContent = 'About Us';
    document.querySelector('#content').innerHTML = `<h1>About page</h1>`;
  }
}

class ContactState {
  constructor(page) {
    document.querySelector('#heading').textContent = 'Contact Us';
    document.querySelector('#content').innerHTML = `<h1>Contact page</h1>`;
  }
}

const page = new PageState();

page.init();

const home = document.getElementById('home'),
  about = document.getElementById('about'),
  contact = document.getElementById('contact');

home.addEventListener('click', (e) => {
  page.change(new HomeState());

  e.preventDefault();
});

about.addEventListener('click', (e) => {
  page.change(new AboutState());

  e.preventDefault();
});

contact.addEventListener('click', (e) => {
  page.change(new ContactState());

  e.preventDefault();
});
