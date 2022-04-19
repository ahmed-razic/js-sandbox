function getData() {
  return new Promise(function (resolve, reject) {
    const error = false;
    const data = 'Ahmed';
    if (!error) {
      resolve(data);
    } else {
      reject('an error');
    }
  });
}

getData()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (err) {
    console.log(err);
  });
