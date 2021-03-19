"strict mode";

// definerar variabler för att kommma åt veckodag, temperatur, väder samt plats
const locationElement = document.querySelector(".location p");
const weekdayElement = document.querySelector(".weekday p");
const tempValueElement = document.querySelector(".temperature p");
const tempDescElement = document.querySelector(".condition p");


function getCityWeatherURL(input) {

const url = new URL("https://api.openweathermap.org/data/2.5/weather");

url.searchParams.set("q", input.value);
url.searchParams.set("appid","f8f1da564369558f038f69a2bfa06360");
url.searchParams.set("mode", "json");
url.searchParams.set("units", "metric");
url.searchParams.set("lang", "se");

return url;
}

async getWeatherData(input) {

    const myKey = "f8f1da564369558f038f69a2bfa06360";

   // make request to url
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
    );

    const data = await response.json();
    console.log(data);
    return data;
    }

function displayWeather(data){
    weekdayElement.innerHTML = 
}

// tar in value från search bar
/*  
let searchBar = document.querySelector("#csearch");
searchBar.onchange = function(e){
    alert(searchBar.value);
}*/