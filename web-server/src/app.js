const express = require('express');
const path = require('path');
const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');
 
// console.log(__dirname); //provides current directory path
// console.log(path.join(__dirname, '../assests')); // modifies to web-server -> assests from web-server -> src 

// console.log(__filename); //provides current file path


const app = express();
// const publicPath = path.join(__dirname, '../public');

// const helpPath = path.join(__filename,'../public/helpPath.html'); 
// const aboutPath = path.join(__filename,'../public/aboutPath.html'); 

//OR use publicPath
// app.use(express.static(publicPath)); //browses provided url path of file from the publicPath folder


//manual assignment of path

// app.get('', (req,res) => {
//     res.send('<h1>Hello Express!</h1>');
// })

// app.get('/help',(req,res) => {
//     res.send('<h1>Help Page</h1>');
// })

// app.get('/about',(req,res) => {
//     res.send('<h1>About Page</h1>');
// })

app.get('/weather',(req,res) => {
    if(!req.query.location) {
        // console.log(req.query);
        return res.send({error: "provide a location"});
        }

        geocode(req.query.location, (error,{latitude,longitude,city} = {}) => {

            if(error) {
                return res.send({error})
            }

            forecast(latitude,longitude,(error,forecastData) => {
                if(error) {
                    return res.send({error});
                }
                res.send({
                    location: city,
                    forecast : forecastData,
                })
            })
        })   
})


app.get('/products',(req,res) => {
    if(!req.query.search) {
        return res.send({
            error: 'provide search term',
        })
    }
    res.send({
            products: [],
        })
})


// app.get('*',(req,res) => {
//     res.send('404 page');
// });

// app.get('/help/*',(req,res) => {
//     res.send('404 page');
// });

console.log('Client side javascript file is loaded!')

fetch('https://puzzle.mead.io/puzzle').then(res => {
    console.log(res);
    res.json().then(data => {
        console.log(data);
    })
})

app.listen(3000, () => {
console.log('server is up on port 3000');
})

