const request =require('postman-request');

//using request
const geocode = (city,callback) => {

    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=24586a321a4110eb8e15a1f249b602cb&units=metric`;
 
    request ({url, json: true},(error,{body}) => {
       if(error) {
          callback('Unable to connect to weather services',undefined);
       }
       else if(body.message) {
          callback('Unable to connect find weather lcoation',undefined);
       }
       else {
          callback(undefined, {
             longitude: body.coord.lon,
             latitude: body.coord.lat,
             city: body.name,
          })
       }
    })
 }

 //from FETCH API
 let geocode = (city,callback) => {

   const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=24586a321a4110eb8e15a1f249b602cb&units=metric`;

   fetch(url)
   .then(response => {
      response.json()
      .then(data => {
         console.log(data);
         callback(undefined, {
             longitude: data.coord.lon,
             latitude: data.coord.lat,
             city: data.name,
            })
      })
      // .catch(data => {
      //    console.log(data);
      //    callback(`Cod: ${data.cod}, ${data.message}`,undefined);
      // })

      .catch(error => {
         callback(`error message: ${error.message}`); //just prints the message of error 
      })
   })
}
 
module.exports = geocode;