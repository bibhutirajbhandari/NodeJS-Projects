const request = require('postman-request');

const forecast = (lat,lon,callback)  => {

    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=24586a321a4110eb8e15a1f249b602cb&units=metric`;

    request({url,json: true},(error,{body}) => {
        console.log('body', body);
        if(error) {
            callback("Unable to access weather service",undefined);
        }else if(body.message){
            callback("Unable to find weather location",undefined);
        }
        else {
            const weather = body.list[0].weather[0].description;
            const temp = body.list[0].main.temp;
            callback(undefined,`${weather} with temperature ${temp}`);
        }
    })   
}

module.exports = forecast;


// https://api.openweathermap.org/data/2.5/forecast?lat=27.7167&lon=85.3167&appid=24586a321a4110eb8e15a1f249b602cb&units=metric