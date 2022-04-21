const weather = new Weather('Mekka', 'SA');
const ui = new UI();
document.addEventListener('DOMContentLoaded', getWeather);
document.getElementById('save-changes').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  weather.changeLocation(city, state);

  getWeather();

  //use jquery to close modal
  $('#locationModal').modal('hide');
});

function getWeather() {
  weather
    .getWeather()
    .then((data) => ui.showResults(data))
    .catch((err) => console.log(err));
}
