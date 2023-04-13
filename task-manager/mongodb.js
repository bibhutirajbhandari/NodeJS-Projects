//CRUD OPERATIONS create read update delete

const { MongoClient, ObjectId } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

const id = new ObjectId();
// console.log(id);
// console.log(id.getTimestamp());
// console.log(id.id.toHexString().length);

MongoClient.connect(connectionURL).then((client) => {
  const db = client.db(databaseName);

  //Collection method insertMany
  db.collection("users")
    .insertMany([
      {
        userid: 01,
        name: "Bibha",
        age: 16,
      },
      {
        userid: 02,
        name: "Bibhuti",
        age: 21,
      },
      {
        userid: 03,
        name: "Jay",
        age: 21,
      },
    ])
    .then((res) => {
      console.log(res.insertedIds);
    });

  //Collection method findOne
  db.collection("users")
    .findOne({ _id: new ObjectId("6436458f47d4e7f41eec2b67") })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log("Error: ", err);
    });

  //Collection method .count -> changed to .countDocuments / .estimatedCountDocuments
  db.collection("users")
    .countDocuments({ age: 21 })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log("Error: ", err);
    });

  // Collection method toArray
  db.collection("users")
    .find({ age: 21 })
    .toArray()
    .then((resArray) => {
      console.log(resArray);
    })
    .catch((err) => {
      console.log("Error: ", err);
    });

  //Goal: 1. insert collection 'TASK' with 3 documents
  db.collection("tasks")
    .insertMany([
      {
        sno: 01,
        description: "get groceries",
        status: false,
      },
      {
        sno: 02,
        description: "read a book",
        status: true,
      },
      {
        sno: 03,
        description: "walk your dog",
        status: true,
      },
    ])
    .then((tasks) => {
      //tasks here is an collection of inserted documents
      console.log(tasks.insertedIds);
    })
    .catch((error) => {
      console.log("error:", error);
    });
});

//Goal: 2. findOne - find last task by its id
db.collection("tasks")
  .findOne({ _id: new ObjectId("643648c97049d2b38652279e") })
  .then((lastTask) => {
    console.log(lastTask);
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

//Goal: 3. find - fetch all task that are not completed
db.collection("tasks")
  .find({ status: false })
  .toArray()
  .then((res) => {
    console.log("Tasks Remaining: ", res);
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

/* mongoose
const mongoose = require('mongoose')
const connectionURL = `mongodb+srv://admin:admin@cluster0.yec0zoz.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(connectionURL)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })
    */
