const posts = [
  {
    name: 'Ahmed',
    age: 46,
  },
  {
    name: 'Ibrahim',
    age: 10,
  },
];

// function setPost(post, callback) {
//   setTimeout(function () {
//     posts.push(post);
//     callback();
//   }, 3000);
// }

// function getPosts() {
//   setTimeout(function () {
//     console.log(posts);
//   }, 1000);
// }

// setPost({ name: 'Merjema', age: 3 }, getPosts);

function setPost(post) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      posts.push(post);

      const err = false;

      if (!err) {
        resolve();
      } else {
        reject('An error acurred');
      }
    }, 3000);
  });
}

function getPosts() {
  setTimeout(function () {
    console.log(posts);
  }, 1000);
}

setPost({ name: 'Merjema', age: 3 })
  .then(getPosts)
  .catch(function (err) {
    console.log(err);
  });
