class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string'); 
        this.icon = document.getElementById('w-icon');
        this.details = document.getElementById('w-details'); 
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.pressure = document.getElementById('w-pressure');
        this.wind = document.getElementById('w-wind');
    }
    paint(weather) {
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].description.charAt(0).toUpperCase() + weather.weather[0].description.slice(1);
        this.string.textContent = Math.round(weather.main.temp) + ' °C';
        this.icon.setAttribute('src', `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`);
        this.humidity.textContent = `Relative humidity: ${weather.main.humidity} %`;
        this.pressure.textContent = `Pressure: ${weather.main.pressure} hPa`;
        this.feelsLike.textContent = "Feels like: "+ Math.round(weather.main.feels_like) + "°C";
        this.wind.textContent = `Wind: ${weather.wind.speed} m/s`;
    }

}