const express = require('express');

console.log(__dirname);
console.log(__filename);

const app = express()

app.get('', (req,res) => {
    res.send('<h1>Hello Express!</h1>');
})

app.get('/help',(req,res) => {
    res.send('<h1>Help Page</h1>');
})

app.get('/about',(req,res) => {
    res.send('<h1>About Page</h1>');
})

app.get('/weather',(req,res) => {
    res.send({City: 'Kathmandu', Weather: 'Partly Cloudy'});
})


app.listen(3000, () => {
console.log('server is up on port 3000');
})

