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