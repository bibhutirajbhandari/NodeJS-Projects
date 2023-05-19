const url =
  "https://api.openweathermap.org/data/2.5/forecast?lat=27.7167&lon=85.3167&appid=24586a321a4110eb8e15a1f249b602cb&units=metric";

// async function getWeather() {
//   const res = await fetch(url);
//   const data = await res.json();

//   return data;
// }

// getWeather()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

//or, use try catch

async function getWeather() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

getWeather();
