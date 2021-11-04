const form = document.querySelector("form")!;
const addressinput = document.getElementById("address")! as HTMLInputElement;
const YOUR_API_KEY="AIzaSyBxRWvc1F1zZYGHrc1yJ0Fw9jebBEbfe50"

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddresss = addressinput.ariaValueMax;
  

  axios.get(
`https://maps.googleapis.com/maps/api/geocode/json?address=${}&key=${YOUR_API_KEY}`,
  );
}

form.addEventListener("submit", searchAddressHandler);
