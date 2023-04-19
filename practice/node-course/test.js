// const fetchPromise = fetch("https://catfact.ninja/fact");
// console.log(fetchPromise);

// fetchPromise.then((response) => {
//   console.log(
//     response.json().then((data) => {
//       console.log(data);
//     })
//   );
// });

const url = "https://catfact.ninja/fact";
async function fetchCatFacts() {
  const response = await fetch(url);
  const result = await response.json(); //fetch ko initial response is a promise, without await, bichara fetch doesn't
  // have time to change a promise to data i.e Promise {<pending>}
  //therefore, await for the data response so that data.json() huncha next line ma
  //rather than promise.json(). tesaile error auncha yo case ma. cause promise.json() function doesn't exist
  console.log(result);
  return 1;
}

fetchCatFacts().then((value) => {
  console.log("Download completed", value);
});
