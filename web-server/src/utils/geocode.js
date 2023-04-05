const request =require('postman-request');

let geocode = (city,callback) => {

    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=24586a321a4110eb8e15a1f249b602cb&units=metric`;
 
    request ({url, json: true},(error,{body}) => {
       if(error) {
          callback('Unable to connect to weather services',undefined);
       }
       else if(body.message) {
          callback('Unable to connect find weather location',undefined);
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

   
module.exports = geocode;