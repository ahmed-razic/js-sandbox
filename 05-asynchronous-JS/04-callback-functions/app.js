let posts = [
  {
    name: 'Post one',
    body: 'This is post one.',
  },
  {
    name: 'Post one',
    body: 'This is post two.',
  },
  {
    name: 'Post one',
    body: 'This is post three.',
  },
];

function setPost(post, callback) {
  setTimeout(function () {
    posts.push(post);
    callback();
  }, 2000);
}

function getPost() {
  let output = '';

  posts.forEach(function (post) {
    output += `<li>${post.body}</li>`;
  });

  document.body.innerHTML = output;
}

setPost(
  {
    name: 'Post four',
    body: 'This is post four.',
  },
  getPost
);
