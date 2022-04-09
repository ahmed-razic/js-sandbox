const person = 'Ahmed';
const age = 46;
const job = 'Programmer';
const city = 'Sarajevo';

function hello() {
  return 'Hello, World!';
}

const list = `<ul>
  <li>Name: ${person}</li>
  <li>Job: ${job}</li>
  <li>City: ${city}</li>
  <li>Age: ${age}</li>
  <li>Birth Year: ${2022 - age}</li>
  <li>Greeting: ${hello()}</li>
  <li>Years: ${age > 40 ? 'Over 40' : 'Under 40'}</li>
</ul>`;

document.body.innerHTML = list;
