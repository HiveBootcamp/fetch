//AXIOS
import axios from "axios";

// 1. Primjer
// Axios samo vraća podatkovni objekt koji biste očekivali .
const gotUrl = "https://thronesapi.com/api/v2/Characters";
const dataGot = await axios.get(gotUrl);

//2. Primjer
//U Axiosu šaljemo odmah datu.
const url = "https://jsonplaceholder.typicode.com/posts";

const data = {
  a: 10,
  b: 20,
};
axios
  .post(url, data, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  })
  .then(({ data }) => {
    console.log(data);
  });

//3.Primjer
//Jednostavnost postavljanja vremenskog ograničenja u Axiosu setTimeout().
//   U Axios-u možete koristiti opcionalni timeout u konfiguracijskom objektu za
//   postavljanje broja milisekundi prije nego što se zahtjev poništi.
//   Znači upištete timeout i stavite broj. To je to.
axios({
  method: "post",
  url: "/login",
  timeout: 4000, // 4 seconds timeout
  data: {
    firstName: "David",
    lastName: "Pollock",
  },
}).then((response) => {
    /* handle the response */
  })
  .catch((error) => console.error("timeout exceeded"));

//4.Primjer
// Axios će  rejectai bilo koji promise kada code bude izvan  200-299
axios
  .get("https://codilime.com/")
  .then((response) => console.log(response.data))
  .catch((err) => console.log(err.message));
