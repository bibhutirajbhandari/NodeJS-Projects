//CRUD OPERATIONS create read update delete

// const mongodb = require('mongodb');
const mongoose = require('mongoose')
// const MongoClient = mongodb.MongoClient;

// const connectionURL = 'mongodb+srv://admin:admin@cluster0.yec0zoz.mongodb.net/?retryWrites=true&w=majority';
const connectionURL = `mongodb+srv://admin:admin@cluster0.yec0zoz.mongodb.net/?retryWrites=true&w=majority`;
// const databaseName = 'task-manager';

// MongoClient.connect(connectionURL,(error,client) => {
//     if(error) {
//         return console.log('Unable to connect to database!');
//     }
//     console.log('Connected correctly!');
// })



// const connectionParams={
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true 
// }
mongoose.connect(connectionURL)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })