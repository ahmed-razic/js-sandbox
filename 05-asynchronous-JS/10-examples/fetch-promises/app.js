const http = new HTTP();

//http.get('https://api.github.com/users').then((data) => console.log(data));

// http
//   .post('https://jsonplaceholder.typicode.com/posts', {
//     id: 1000000000,
//     login: 'ahmed',
//     type: 'begginer',
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// http
//   .delete('https://jsonplaceholder.typicode.com/posts/10')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

http
  .put('https://jsonplaceholder.typicode.com/posts/10', {
    id: 1000000000,
    login: 'ahmed',
    type: 'begginer',
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
