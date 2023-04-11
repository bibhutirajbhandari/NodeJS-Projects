//CRUD OPERATIONS create read update delete


const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

console.log('#1');
MongoClient.connect = (connectionURL) => {
    console.log('#2');
    if(error) {
        return console.log('Unable to connect to database!');
    }
    console.log('Connected correctly!');
}


// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;

// //connection URL
// const connectionURL = 'mongodb://localhost:27017';

// //Database name
// const databaseName = 'task-manager';

// //create new mongoclient
// const client = new mongodb.MongoClient(connectionURL);

// console.log('#1');
// client.connect(function(error,client) {
//     console.log('#2');
//     if(error) {
//         return console.log('Unable to connect to database!');
//     }
//     console.log('Connected correctly!');
// })

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



// const { MongoClient } = require("mongodb");
// // Replace the uri string with your connection string.
// const uri = "mongodb://127.0.0.1:27017";
// const client = new MongoClient(uri, { useNewUrlParser: true}, (err, success) => {
//     console.log("error", err);
//     console.log("success", success);
// });
// async function run() {
//   try {
//     const database = client.db('sample_mflix');
//     const movies = database.collection('movies');
//     // // Query for a movie that has the title 'Back to the Future'
//     const query = { title: 'Back to the Future' };
//     const movie = await movies.findOne(query);
//     console.log(movie);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);