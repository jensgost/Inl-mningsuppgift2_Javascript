"use strict";

// definerar variabler för att kommma åt veckodag, temperatur, väder samt plats

const locationElement = document.querySelector(".location");
const tempElement = document.querySelector(".temperature");
const weatherCondElement = document.querySelector(".condition")
const weather = document.querySelector("#weather");
const input = document.querySelector("#csearch");
const attractionName1 = document.querySelector(".attractionName1");
const attractionName2 = document.querySelector(".attractionName2");
const attractionName3 = document.querySelector(".attractionName3");
const address1 = document.querySelector(".address1");
const address2 = document.querySelector(".address2");
const address3 = document.querySelector(".address3");
const attraction1 = document.querySelector(".col-md bg-success");
const attraction2 = document.querySelector(".col-md bg-danger");
const attraction3 = document.querySelector(".col-md bg-primary");


/*
document.querySelector("#csubmit").addEventListener("click", function() { getCityWeather.search();
});

function search() {
    this.getCityWeather(document.querySelector("#csearch").value);
    };
*/

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

function getTopAttractions(input) {
    const topAttraction = new URL("https://api.foursquare.com/v2/venues/explore");
  
    topAttraction.searchParams.append(
      "client_id",
      "K5LHSQC2RKNDU3XDTR0M1L2P1HJ0DCJELXMWNMQ4TMDGVHSM"
    );
    topAttraction.searchParams.append(
      "client_secret",
      "4PR5RGQAB5I1L2C3JXMHBVNNMKQMP4BDSBE2VKJO0MLHTGMK"
    );
    topAttraction.searchParams.append("near", input.value);
    topAttraction.searchParams.append("limit", "10");
    topAttraction.searchParams.append("v", "20210212");
  
    return topAttraction;
  }
  const topAttraction = getTopAttractions(input);
  window.topAttraction = topAttraction;




input.onchange = async function getWeatherData(){
    const url = getCityWeather(input);
    const topAttraction = getTopAttractions(input);

    const weatherResponse = await fetch(url);
    const weatherData = await weatherResponse.json();

    const attractionResponse = await fetch(topAttraction);
    const attractionData = await attractionResponse.json();
    
    locationElement.innerHTML = `Location: ${weatherData.name}, ${weatherData.sys.country}`;
    tempElement.innerHTML = `Temperature: ${weatherData.main.temp} °C`;
    weatherCondElement.innerHTML = `Weather condition: ${weatherData.weather[0].main}`;

    attractionName1.innerHTML =
    attractionData.response.groups[0].items[0].venue.name;
  attractionName2.innerHTML =
    attractionData.response.groups[0].items[1].venue.name;
  attractionName3.innerHTML =
    attractionData.response.groups[0].items[2].venue.name;

  address1.innerHTML =
    attractionData.response.groups[0].items[0].venue.location.address;
  address2.innerHTML =
    attractionData.response.groups[0].items[1].venue.location.address;
  address3.innerHTML =
    attractionData.response.groups[0].items[2].venue.location.address;
    }

/*
function getTopAttractions(input) {
    const topAttraction = new URL("https://api.foursquare.com/v2/venues/explore");
  
    topAttraction.searchParams.append(
      "client_id",
      "K5LHSQC2RKNDU3XDTR0M1L2P1HJ0DCJELXMWNMQ4TMDGVHSM"
    );
    topAttraction.searchParams.append(
      "client_secret",
      "4PR5RGQAB5I1L2C3JXMHBVNNMKQMP4BDSBE2VKJO0MLHTGMK"
    );
    topAttraction.searchParams.append("near", input.value);
    topAttraction.searchParams.append("limit", "10");
    topAttraction.searchParams.append("v", "20210212");
  
    return topAttraction;
  }
  const topAttraction = getTopAttractions(input);
  window.topAttraction = topAttraction;
  

input.onchange = async function getTopAttractionsData() {
    const topAttraction = getTopAttractions(input);

    const attractionResponse = await fetch(topAttraction);
    const attractionData = await attractionResponse.json();

    attractionName1.innerHTML =
      attractionData.response.groups[0].items[0].venue.name;
    attractionName2.innerHTML =
      attractionData.response.groups[0].items[1].venue.name;
    attractionName3.innerHTML =
      attractionData.response.groups[0].items[2].venue.name;

    address1.innerHTML =
      attractionData.response.groups[0].items[0].venue.location.address;
    address2.innerHTML =
      attractionData.response.groups[0].items[1].venue.location.address;
    address3.innerHTML =
      attractionData.response.groups[0].items[2].venue.location.address;
}*/