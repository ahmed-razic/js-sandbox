const weather = new Weather('Mekka', 'SA');
const ui = new UI();
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
  weather
    .getWeather()
    .then((data) => ui.showResults(data))
    .catch((err) => console.log(err));
}
