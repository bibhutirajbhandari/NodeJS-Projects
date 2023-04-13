const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api");

const user = mongoose.model("users", {
  name: {
    type: String,
    trim: true,
  },
  //   age: {
  //     type: Number,
  //     validate(value) {
  //       if (value < 0) {
  //         throw new error("age must be positive number");
  //       }
  //     },
  //   },
  email: {
    type: String,
    required: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid!!!!!");
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("'Password cannot contain word 'password'");
      }
    },
  },
});

// const me = new user({
//   name: "   Bibhuti    ",
//   //age: 21,
//   email: "BIBHUTIRJB@gmail.com",
//   password: "password",
// });

// me.save()
//   .then((res) => {
//     console.log(me);
//   })
//   .catch((e) => {
//     console.log("Error : ", e);
//   });

//Goal: set TASK model with data validation & sanitization

const tasks = mongoose.model("Task", {
  desc: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
});

const task = new tasks({
  desc: "   learn mongoose library",
  //   status: false,
});

task
  .save()
  .then(() => {
    console.log(task);
  })
  .catch((err) => {
    console.log("error!! :", err);
  });
