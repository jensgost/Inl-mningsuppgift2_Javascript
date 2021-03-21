"use strict";

input.addEventListener("keyup", cityName);

function cityName(e) {
    city.textContent = e.target.value;
}
    
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