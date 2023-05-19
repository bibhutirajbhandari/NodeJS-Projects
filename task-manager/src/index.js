const express = require("express");
require("./db/mongoose.js");
const User = require("./models/user");
const Task = require("./models/task");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express(); //your application is runnning express
const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send("cannot perform GET operation");
//   } else {
//     next();
//   }
// });
// app.use((req, res, next) => {
//   res.status(503).send();
// });

app.use(express.json()); //your application is using json() method of Express to get data in json format
app.use(userRouter);
app.use(taskRouter);
