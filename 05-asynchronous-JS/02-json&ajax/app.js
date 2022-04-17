const getCustomer = document.querySelector('#get-customer');
const getCustomers = document.querySelector('#get-customers');

const customer = document.querySelector('#customer');
const customers = document.querySelector('#customers');

getCustomer.addEventListener('click', getCustomerData);
getCustomers.addEventListener('click', getCustomersData);

function getCustomerData() {
  const xhr = new XMLHttpRequest();

  xhr.open('get', './json/customer.json', true);

  xhr.onload = function () {
    if (this.status === 200) {
      //console.log(typeof this.responseText);  //string
      const data = JSON.parse(this.responseText);
      //console.log(typeof data);  //object

      customer.innerHTML = `
      <ul>
        <li>${data.id}</li>
        <li>${data.name}</li>
        <li>${data.address}</li>
        <li>${data.company}</li>
        <li>${data.phone}</li>
      </ul>`;
    }
  };

  xhr.send();
}

function getCustomersData() {
  const xhr = new XMLHttpRequest();

  xhr.open('get', './json/customers.json', true);

  xhr.onload = function () {
    if (this.status === 200) {
      console.log(typeof this.responseText); //string
      const data = JSON.parse(this.responseText);
      console.log(typeof data); //object
      console.log(data);

      data.forEach(function (item) {
        customers.innerHTML += `
        <ul>
          <li>${item.id}</li>
          <li>${item.name}</li>
          <li>${item.address}</li>
          <li>${item.company}</li>
          <li>${item.phone}</li>
        </ul>`;
      });
    }
  };

  xhr.send();
}
