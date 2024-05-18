document.getElementById('searchButton').addEventListener('click', getWeather);

async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'c4ad6636911a35489dcaa909843b2bf3'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod === 200) {
            document.getElementById('location').innerText = `${data.name}, ${data.sys.country}`;
            document.getElementById('description').innerText = data.weather[0].description;
            document.getElementById('temperature').innerText = `${data.main.temp} °C`;
        } else {
            document.getElementById('location').innerText = 'City not found';
            document.getElementById('description').innerText = '';
            document.getElementById('temperature').innerText = '';
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
