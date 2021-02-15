class UI {
    constructor() {
        this.uiContainer = document.getElementById("content");
        this.city;
    }

    populateUI(data) {

        this.uiContainer.innerHTML = `

        <nav class="navbar justify-content-center">
        <h5>${data.name}</h5>
      </nav>
     
        <div class="container">
          <div class="row">
            <div class="col-md bg-light display-7" id="weather">
              <h6>Current weather</h6> <p>Thursday <br>Temperature: ${data.main.temp}<br>Condition: ${data.weather.main}</p>
            </div>
          </div>
        </div> 

        `;
    }
}