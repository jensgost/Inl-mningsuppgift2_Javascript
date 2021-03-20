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

    document.querySelector(".form-check-input2").onchange = function() {
        if (form-check-input2.checked === true) {
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