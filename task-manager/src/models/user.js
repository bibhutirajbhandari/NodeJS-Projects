const mongoose = require("mongoose");
const validator = require("validator");

const user = mongoose.model("users", {
  name: {
    type: String,
    trim: true,
  },
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

module.exports = user; //user here is the function name 

//   age: {
//     type: Number,
//     validate(value) {
//       if (value < 0) {
//         throw new error("age must be positive number");
//       }
//     },
//   },
