import "./styles.css";

const btn = document.querySelector(".btn");

btn.addEventListener("click", getCurrentWeather);
function getCurrentWeather() {
  // console.log("click");
  // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
  const apiKey = "7c29a3a0b8862faeb96ca3b1be764114";
  const city = "London";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  // Make the API request
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // Extract the weather description from the API response

      // console.log(data);
      const weatherDescription = data.weather[0].description;

      console.log(weatherDescription);

      // Update the content of the weatherData div
      const weatherDataDiv = document.getElementById("weatherData");
      weatherDataDiv.textContent = `Current weather in ${city}: ${weatherDescription}`;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      // const weatherDataDiv = document.getElementById("weatherData");
      // weatherDataDiv.textContent =
      //   "Error fetching weather data. Please try again later.";
    });
}

// getCurrentWeather();
