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

const obj1 = {
  coord: {
    lon: 39.8261,
    lat: 21.4267,
  },
  weather: [
    {
      id: 800,
      main: 'Clear',
      description: 'clear sky',
      icon: '01n',
    },
  ],
  base: 'stations',
  main: {
    temp: 302.42,
    feels_like: 302.56,
    temp_min: 302.42,
    temp_max: 302.42,
    pressure: 1008,
    humidity: 45,
    sea_level: 1008,
    grnd_level: 972,
  },
  visibility: 10000,
  wind: {
    speed: 0.78,
    deg: 287,
    gust: 1.16,
  },
  clouds: {
    all: 0,
  },
  dt: 1650571547,
  sys: {
    country: 'SA',
    sunrise: 1650509807,
    sunset: 1650555704,
  },
  timezone: 10800,
  id: 104515,
  name: 'Makkah al Mukarramah',
  cod: 200,
};
