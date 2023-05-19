const express = require("express");
//require express package to get express

//create constant app to reuse functionality of express throughout the program
const app = express();
app.use(express.json());
// const bodyParser = require('body-parser')
// app.use(bodyParser.json({ type: 'application/*+json' }))
//use 'listen' module of express to listen to the port provided
app.listen(3000, () => {
  console.log("server is running on port 3000");
});

//create an array of objects to work on
let users = [
  {
    id: "1",
    name: "bibhuti",
    age: 22,
  },
];

app.get("/userlist", (req, res) => {
  res.send({ status: "fetched data successfully", data: users });
});

app.post("/userlist", (req, res) => {
  let name = req.body.name;
  let age = req.body.age;

  users.push({
    id: (users.length + 1).toString(),
    name: name,
    age: age,
  });

  res.send({ status: "added new user", data: users });
});

app.delete("/userlist/:userID", (req, res) => {
  let userID = req.params.userID;
  const newUsers = users.filter((user) => {
    return user.id !== userID;
  });
  console.log(newUsers);
  users = newUsers;

  res.send({ status: `deleted user with id ${userID}`, data: users });
});

app.patch("/userlist/:userID", (req, res) => {
  let id = req.params.userID;
  let age = req.body.age;

  let user = users.find((e) => e.id === id);
  let index = users.findIndex((e) => e.id === id);
  user.age = age;

  users[index] = user;
  //   users.splice(index, 1, user);

  res.send = { status: `updated user ${userID}`, data: users };
});

// app.put("/userlist/:")
