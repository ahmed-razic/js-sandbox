// async function sayHello() {
//   return 'Hello';
// }

// sayHello().then((result) => console.log(result));

async function myFunction() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello');
    }, 1000);
  });

  const res = await promise;
  //const err = await Promise.reject(new Error('An error'));

  console.log(res);

  if (false) {
    //return err;
  } else {
    return res;
  }
}

myFunction()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
