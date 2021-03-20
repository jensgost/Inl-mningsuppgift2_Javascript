"strict mode";

// definerar variabler för att kommma åt veckodag, temperatur, väder samt plats
const locationElement = document.querySelector(".location p");
const tempElement = document.querySelector(".temperature p");
const weatherCondElement = document.querySelector(".condition p")
const weather = document.querySelector("#weather");
const input = document.querySelector("#csearch");

function getCityWeatherURL(input) {

const url = new URL("https://api.openweathermap.org/data/2.5/weather");

url.searchParams.set("q", input.value);
url.searchParams.set("appid","f8f1da564369558f038f69a2bfa06360");
url.searchParams.set("mode", "json");
url.searchParams.set("units", "metric");
url.searchParams.set("lang", "se");

return url;
}
const url = getCityWeatherURL(input);
window.url = url;

input.onchange = async function getWeatherData(){
    const url = getCityWeatherURL(input);

    const response = await fetch(url);
    const data = await response.json();
    
    console.log(data);
    locationElement.innerHTML = `Location: ${data.name}, ${data.sys.country}`;
    tempElement.innerHTML = `Temperature: ${data.main.temp} °C`;
    weatherCondElement.innerHTML = `Weather condition: ${data.weather[0].main}`;
    }

    function search(){
        this.getWeatherData(document.querySelector("#csearch").value);
        document.querySelector("#csubmit").addEventListener("click", function() {
            weather.search();
        });
        document.querySelector(".form-check-input1").onchange = function showWeather (){
            if (form-check-input1.checked === true) {
                weather.style.display = "block";
            } else {
                weather.style.display = "none";
            }
        };
    
    }