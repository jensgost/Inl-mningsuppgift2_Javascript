class Fetch {
  async getCurrent(input) {
    const myKey = "f8f1da564369558f038f69a2bfa06360";

   // make request to url

    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
    );

    const data = await response.json();

    console.log(data);

    return data;

    }
}