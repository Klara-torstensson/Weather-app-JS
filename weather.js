class Weather {
    constructor (city, state) {
        this.apiKey = "b6ce6b49b98d294fd70b965648cee5c6";
        this.city = city;
        this.state = state;
    }

    // Fetch weather form API
    async getWeather() {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&units=metric&appid=${this.apiKey}`);
        let responseData = await response.json();
        return responseData;
       
        
    }

    // Change weather location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}