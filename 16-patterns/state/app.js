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
    document.querySelector('#heading').textContent = null;
    document.querySelector(
      '#content'
    ).innerHTML = `  <div class="p-5 mb-4 bg-light rounded-3">
    <div class="container-fluid py-5">
      <h1 class="display-5 fw-bold">Custom jumbotron</h1>
      <p class="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
      <button class="btn btn-primary btn-lg" type="button">Example button</button>
    </div>
  </div>`;
  }
}

class AboutState {
  constructor(page) {
    document.querySelector('#heading').textContent = 'About Us';
    document.querySelector('#heading').innerHTML = `<p>This is about page</p>`;
  }
}

class ContactState {
  constructor(page) {
    document.querySelector('#heading').textContent = 'Contact Us';
    document.querySelector('#heading').innerHTML = `<form>
    <div class="form-group">
      <label>Name</label>
      <input type="text" class="form-control">
    </div>
    <div class="form-group">
    <label>Email address</label>
    <input type="email" class="form-control">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  </form>`;
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

// About
about.addEventListener('click', (e) => {
  page.change(new AboutState());

  e.preventDefault();
});

// Contact
contact.addEventListener('click', (e) => {
  page.change(new ContactState());

  e.preventDefault();
});
