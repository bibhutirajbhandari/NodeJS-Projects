const request = require('postman-request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');


const address = process.argv[2];
console.log(process.argv);

if(address) {
   geocode(address, (error,{longitude,latitude,city}) => {
      if(error) {
         return console.log(error);
      }
   
      forecast(longitude,latitude, (error, forecastData) => {
         if(error) {
            return console.log(error);
         }
         console.log('City: ',city);
         console.log('Data: ',forecastData);
      })
   })
} else {
   return console.log('Please provide an address');
}

