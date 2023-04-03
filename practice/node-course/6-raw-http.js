const https = require('https');

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=27.700769&lon=85.300140&appid=24586a321a4110eb8e15a1f249b602cb&units=metric`;


const request = https.request(url,(response) => {

    let data = '';

    response.on('data', (chunk) => {
        // console.log(chunk);
        data = data + chunk.toString();
        console.log(chunk);
       })

    response.on('end',() => {
        const body = JSON.parse(data);
        console.log(body);
    })
    request.on('error',(error) => {
        console.log('An error, ',error)
    })
})
request.end();