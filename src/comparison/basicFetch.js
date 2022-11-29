// FETCH

//1. Primjer
//Korištenjem Axios-a možete izrezati srednji korak prosljeđivanja rezultata metodi .json().
const gotUrl = "https://thronesapi.com/api/v2/Characters";
const response = await fetch(gotUrl);
const dataGot = await response.json();

//2. Primjer
//Podaci u fetch() su serijalizirani(stringificirani) s obzirom da dolaze od body-a,
const url = "https://jsonplaceholder.typicode.com/todos";

const options = {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },
  body: JSON.stringify({
    a: 10,
    b: 20,
  }),
};
fetch(url, options)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

//3.Primjer
//Fetch() pruža sličnu funkcionalnost kroz interface AbortController.
// Ipak nije tako jednostavno kao verzija Axios. Mi moramo creat-at novi AbortControlller i
// onda proslijediti u signal kroz  options controller.signal. Signal je read only , koje
// omogućuje komunikaciju sa zahtjevom ili njegovo prekid.
// Ako server ne odgovori za manje od četiri sekunde, poziva se controller.abort() i operacija se prekida.
const controller = new AbortController();
const options = {
  method: "POST",
  signal: controller.signal,
  body: JSON.stringify({
    firstName: "David",
    lastName: "Pollock",
  }),
};
const promise = fetch("/login", options);
const timeoutId = setTimeout(() => controller.abort(), 4000);

promise
  .then((response) => {
    /* handle the response */
  })
  .catch((error) => console.error("timeout exceeded"));

//4.Primjer
//Najvažnija razlika je u tome što ne odbija promise ako dobijemo
//HTTP pogrešku - neuspješni odgovori se i dalje rješavaju.
fetch("https://codilime.com/")
  .then((response) => {
    if (!response.ok) {
      throw Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then(console.log)
  .catch((err) => {
    console.log(err.message);
  });
