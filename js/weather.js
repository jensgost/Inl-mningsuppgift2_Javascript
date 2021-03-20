"strict mode";

// definerar variabler för att kommma åt veckodag, temperatur, väder samt plats
const locationElement = document.querySelector(".location p");
const tempElement = document.querySelector(".temperature p");
const weatherCondElement = document.querySelector(".condition p")
const weather = document.querySelector("#weather");
const input = document.querySelector("#csearch");

// 
function getCityWeather(input) {

const url = new URL("https://api.openweathermap.org/data/2.5/weather");

url.searchParams.set("q", input.value);
url.searchParams.set("appid","f8f1da564369558f038f69a2bfa06360");
url.searchParams.set("mode", "json");
url.searchParams.set("units", "metric");
url.searchParams.set("lang", "se");

return url;
}
const url = getCityWeather(input);
window.url = url;

input.onchange = async function getWeatherData(){
    const url = getCityWeather(input);

    const weatherResponse = await fetch(url);
    const weatherData = await weatherResponse.json();
    
    locationElement.innerHTML = `Location: ${weatherData.name}, ${weatherData.sys.country}`;
    tempElement.innerHTML = `Temperature: ${weatherData.main.temp} °C`;
    weatherCondElement.innerHTML = `Weather condition: ${weatherData.weather[0].main}`;
    }