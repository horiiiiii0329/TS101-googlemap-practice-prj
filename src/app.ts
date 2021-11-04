import axios from "axios";

const form = document.querySelector("form")!;
const addressinput = document.getElementById("address")! as HTMLInputElement;
const YOUR_API_KEY = "AIzaSyBxRWvc1F1zZYGHrc1yJ0Fw9jebBEbfe50";

type GoogleGeocodingResponse = {
  results: { geometry: { location: { lat: number; lng: number } } };
  status: "OK" | "ZERP_RESULTS";
};

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddresss = addressinput.ariaValueMax;

  axios
    .get<GoogleGeocodingResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddresss
      )}&key=${YOUR_API_KEY}`
    )
    .then((response) => {
      if (response.data.status !== "OK") {
        throw new Error("COuld not fetch location");
      }
      const coordinates = response.data.results[0].geometry.location;
    })
    .catch((error) => {
      console.log(error);
    });
}

form.addEventListener("submit", searchAddressHandler);
