const http = new HTTP();

const post = { name: 'Ahmed', age: 46, city: 'Sarajevo' };
const post2 = { name: 'Ahmed Razic', age: 46, city: 'Sarajevo' };

// http.get(
//   'https://jsonplaceholder.typicode.com/posts',
//   function (response, error) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log(response);
//     }
//   }
// );

// setTimeout(function () {
//   console.log('------------------------------------------------');
// }, 2000);

// setTimeout(function () {
//   http.get(
//     'https://jsonplaceholder.typicode.com/posts/3/comments',
//     function (response, error) {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log(response);
//       }
//     }
//   );
// }, 3000);

// http.post(
//   'https://jsonplaceholder.typicode.com/posts',
//   post,
//   function (response, error) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log(response);
//     }
//   }
// );

// http.put(
//   'https://jsonplaceholder.typicode.com/posts/100',
//   post2,
//   function (response, error) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log(response);
//     }
//   }
// );

http.delete(
  'https://jsonplaceholder.typicode.com/posts/100',
  function (response, error) {
    if (error) {
      console.log(error);
    } else {
      console.log(response);
    }
  }
);
