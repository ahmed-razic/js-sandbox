const xhr = new XHR();

//xhr.get('./json/users.json', getNames);

// xhr.post(
//   'https://jsonplaceholder.typicode.com/users',
//   { id: 11, name: 'Ahmed Razic', city: 'Sarajevo' },
//   setUser
// );

// xhr.put(
//   'https://jsonplaceholder.typicode.com/users/1',
//   { name: 'Ahmed Razic', city: 'Sarajevo' },
//   setUser
// );

xhr.delete('https://jsonplaceholder.typicode.com/users/1');

function getNames(users) {
  let output = '';
  users.forEach(function (user) {
    output += `
      <li>${user.name}</li>
    `;
  });
  document.body.innerHTML = output;
}

function setUser(user) {
  console.log(user);
}
