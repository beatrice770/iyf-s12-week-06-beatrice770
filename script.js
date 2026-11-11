const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherDiv = document.getElementById("weather");

searchBtn.addEventListener("click", getWeather);

async function getWeather() {
    const city = cityInput.value.trim();

    if (!city) {
        alert("Please enter a city name");
        return;
    }

    weatherDiv.textContent = "Loading...";

    try {
        const response = await fetch(`https://wttr.in/${encodeURIComponent(city)}?format=j1`);

        if (!response.ok) {
            throw new Error("Weather data could not be fetched");
        }

        const data = await response.json();
        const current = data.current_condition[0];

        weatherDiv.innerHTML = `
            <h2>${city}</h2>
            <p>Temperature: ${current.temp_C} °C</p>
            <p>Humidity: ${current.humidity}%</p>
            <p>Wind Speed: ${current.windspeedKmph} km/h</p>
        `;

    } catch (error) {
        weatherDiv.textContent = "Unable to fetch weather data.";
        console.error("Error:", error);
    }
}
