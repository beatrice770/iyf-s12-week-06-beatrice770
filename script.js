const cityInput =document.getElementById("cityInput");
const searchBtn =document.getElementById("searchBtn");
const weatherDiv =document.getElementById("weather");
searchBtn.addEventListener("click",getWeather);
async fuction get weather() {
  const city = cityInput.value;
  if (!city) {
    alert("Please enter a city name");
    return;
  }
  weatherDiv.textContent = "loading...";
  try {
    const response = await
      fetch('https://wttr.in/&{city}?format=j1');
    const data = await response.json();
    const current =
      data.current_condition[0];
    `weatherDiv.innerHTML = ``
      <h2>{city}/h2>
      <p>Temperature: ${current.temp_C} C</P>
    <P>Weather: ${current.WeatherDesc[0].value}</p>
    `;
  } catch (error) {
    WeatherDiv.textContent = "Unable to fetch weather data.;
  }
