"use strict";

// definerar variabler för att kommma åt veckodag, temperatur, väder samt plats

const locationElement = document.querySelector(".location");
const tempElement = document.querySelector(".temperature");
const weatherCondElement = document.querySelector(".condition")
const weather = document.querySelector("#weather");
const city = document.querySelector("#city");
const attractionName1 = document.querySelector(".attractionName1");
const attractionName2 = document.querySelector(".attractionName2");
const attractionName3 = document.querySelector(".attractionName3");
const address1 = document.querySelector(".address1");
const address2 = document.querySelector(".address2");
const address3 = document.querySelector(".address3");
const attraction1 = document.querySelector("#attraction1");
const attraction2 = document.querySelector("#attraction2");
const attraction3 = document.querySelector("#attraction3");
let input = document.querySelector("#csearch");
const button = document.querySelector("#csubmit");


// vår funktion skapar en URL. Den tar in värdet från input som kommer från användarens sökning. vi returnerar variabeln url som sedan används av efterföljande funktioner som använder promise genom async/await.

function getCityWeather(input) {

const url = new URL("https://api.openweathermap.org/data/2.5/weather");

url.searchParams.set("q", input.value);
url.searchParams.set("appid","f8f1da564369558f038f69a2bfa06360");
url.searchParams.set("mode", "json");
url.searchParams.set("units", "metric");
url.searchParams.set("lang", "se");

return url;
}

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




async function getWeatherData(){
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

    // sökknappen, vid klick på knappen kallar vi på funktionerna getTopAttractions och getWeaththerData
    button.addEventListener("click", () => {
      getTopAttractions(input.value);
      getWeatherData(input.value);
    });
    

    // Här kollar vi om användaren har klickat i rutan för att visa väderinfo/topattraktioner eller inte, och beroende på vad användaren har valt väljer vi att antingen gömma eller visa infon
    {
    document.getElementById("check1").onchange = function showWeather (){
      if (check1.checked === true) {
          weather.style.display = "block";
      } else {
          weather.style.display = "none";
      }
    };
    }
    
    {
    document.getElementById("check2").onchange = function showAttractions () {
      if (check2.checked === true) {
          attraction1.style.display = "block";
          attraction2.style.display = "block";
          attraction3.style.display = "block";
      } else {
          attraction1.style.display = "none";
          attraction2.style.display = "none";
          attraction3.style.display = "none";
      }
    };
    
    }