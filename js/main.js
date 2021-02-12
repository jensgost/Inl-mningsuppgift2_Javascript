
// tar in value från search bar
   
let searchBar = document.querySelector("#csearch");
searchBar.onchange = function(e){
    alert(searchBar.value);
}

let url = new URL("https://api.openweathermap.org/data/2.5/weather");

url.searchParams.set("q", "Halmstad, Sweden");
url.searchParams.set("appid","f8f1da564369558f038f69a2bfa06360");
url.searchParams.set("mode", "json");
url.searchParams.set("units", "metric");
url.searchParams.set("lang", "se");

document.querySelector("#weather").innerText.url;