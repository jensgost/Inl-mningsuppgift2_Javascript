"strict mode";

// definerar variabler för att kommma åt våra tre olika attraktioner + adresser
const attractionName1 = document.querySelector(".attractionName1");
const attractionName2 = document.querySelector(".attractionName2");
const attractionName3 = document.querySelector(".attractionName3");
const address1 = document.querySelector(".address1");
const address2 = document.querySelector(".address2");
const address3 = document.querySelector(".address3");
const attraction1 = document.querySelector(".col-md bg-success");
const attraction2 = document.querySelector(".col-md bg-danger");
const attraction3 = document.querySelector(".col-md bg-primary");


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
}