"strict mode";
// tar in value från search bar
/*  
let searchBar = document.querySelector("#csearch");
searchBar.onchange = function(e){
    alert(searchBar.value);
}*/

/*
function getCityWeatherURL(input) {

const url = new URL("https://api.openweathermap.org/data/2.5/weather");

url.searchParams.set("q", input.value);
url.searchParams.set("appid","f8f1da564369558f038f69a2bfa06360");
url.searchParams.set("mode", "json");
url.searchParams.set("units", "metric");
url.searchParams.set("lang", "se");

outputElement.innerText = url;

return url;
}*/

// definerar variabler för att kommma åt veckodag, temperatur, väder samt plats
const weekdayElement = document.querySelector(".weekday p");
const tempValueElement = document.querySelector(".temperature-value p");
const tempDescElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
