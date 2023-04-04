//Request of weather through Latitude & Longitude

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=27.700769&lon=85.300140&appid=24586a321a4110eb8e15a1f249b602cb&units=metric';

request({url: url, json: true },(error,response) => {
   const data = JSON.parse(response.body);
   console.log(data);

   if(error) {
      console.log("Unable to connect to weather service!");
   } else if(response.body.message) {
      console.log("Unable to find weather location!");
   }else {
      const temp = response.body.main.temp;
      const feelsLike = response.body.main.feels_like;
      const desc = response.body.weather[0].main;

   console.log(`Weather: ${desc}`);
   console.log(`It's currently ${temp} .It feels like ${feelsLike}`);
   }
   })


//Request weather through city name

const geocodeURL ='https://api.openweathermap.org/data/2.5/weather?q=Kathmandu&appid=24586a321a4110eb8e15a1f249b602cb&units=metric';

request({url: geocodeURL , json: true},(error,res) => { 

   if(error) {
      console.log("Unable to connect to weather service!");
   } else if(res.body.message) {
      console.log("Unable to find weather location!");
   }else {
      const long = res.body.coord.lon;
   const lat = res.body.coord.lat;
   console.log(`Longitude: ${long} & Latitude: ${lat}`);
   }
   })


// fetch(url, {
//     method: 'GET'
// }).then(res => {
//     return res.json()
// }).then(res => {
//     console.log(res);cd 
// })
