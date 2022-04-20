const http = new HTTP();

// http
//   .get('https://api.github.com/users')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// http
//   .post('https://jsonplaceholder.typicode.com/posts', {
//     id: 100,
//     city: 'Sarajevo',
//     year: 2022,
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// http
//   .put('https://jsonplaceholder.typicode.com/posts/5', {
//     id: 10000,
//     city: 'Sarajevo',
//     year: 2025,
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

http
  .delete('https://jsonplaceholder.typicode.com/posts/5')
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
