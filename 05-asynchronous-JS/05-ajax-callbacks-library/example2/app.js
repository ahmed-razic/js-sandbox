const xhr = new XHR();

xhr.get('./json/users.json', getNames);

function getNames(users) {
  let output = '';
  users.forEach(function (user) {
    output += `
      <li>${user.name}</li>
    `;
  });
  document.body.innerHTML = output;
}
