const cars = [
  {
    id: 1,
    make: 'Audi',
    model: 'A3',
    year: 2022,
  },
  {
    id: 2,
    make: 'Ford',
    model: 'Mondeo',
    year: 2020,
  },
  {
    id: 3,
    make: 'Opel',
    model: 'Moka',
    year: 2021,
  },
];

function getCars() {
  return new Promise(function (resolve, reject) {
    const error = false;

    setTimeout(function () {
      cars.push({
        id: 4,
        make: 'VW',
        model: 'Golf',
        year: 2000,
      });
    }, 2000);

    if (!error) {
      resolve(cars);
    } else {
      reject('An error occured');
    }
  });
}

getCars()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (err) {
    console.log(err);
  });
