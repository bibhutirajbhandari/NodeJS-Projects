//CRUD OPERATIONS create read update delete

const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

console.log('#1');

mongoClient.connect(connectionURL)
.then((client) => {
  const db = client.db(databaseName);
  db.collection('users').insertOne
({
  name: 'Bibha',
  age:16
}).then(res => {
  console.log(res.ops);
})
})


//mongoose
// const mongoose = require('mongoose')
// const connectionURL = `mongodb+srv://admin:admin@cluster0.yec0zoz.mongodb.net/?retryWrites=true&w=majority`;

// mongoose.connect(connectionURL)
//     .then( () => {
//         console.log('Connected to database ')
//     })
//     .catch( (err) => {
//         console.error(`Error connecting to the database. \n${err}`);
//     })