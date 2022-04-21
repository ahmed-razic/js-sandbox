class Weather {
  constructor(city, state) {
    this.city = city;
    this.state = state;
    this.api_key = '710c6cc112097842960b03138d82fd30';
  }

  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.api_key}&units=metric`
    );

    const responseData = await response.json();
    return responseData;
  }

  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
