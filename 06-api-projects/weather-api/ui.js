class UI {
  constructor() {
    this.location = document.getElementById('location');
    this.description = document.getElementById('description');
    this.temp = document.getElementById('temp');
    this.feelsLike = document.getElementById('feels-like');
    this.humidity = document.getElementById('humidity');
    this.pressure = document.getElementById('pressure');
    this.windSpeed = document.getElementById('wind-speed');
  }

  showResults(weather) {
    this.location.textContent = weather.name;
    this.description.textContent = weather.weather[0].description;
    this.temp.textContent = weather.main.temp.toFixed(1) + ' °C';
    this.feelsLike.textContent =
      'Feels like: ' + weather.main.temp.toFixed(1) + ' °C';
    this.humidity.textContent = 'Humidity: ' + weather.main.humidity + ' %';
    this.pressure.textContent = 'Pressure: ' + weather.main.pressure + ' mbar';
    this.windSpeed.textContent = 'Wind speed: ' + weather.wind.speed + ' m/s';
  }
}
