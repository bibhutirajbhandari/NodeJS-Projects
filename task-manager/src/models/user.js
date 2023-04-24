const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
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
  tokens: {
    token: [
      {
        type: String,
        required: true,
      },
    ],
  },
});

userSchema.pre("save", async function (next) {
  //'save' action to perform | next
  const user = this;

  //before saving perform the following:
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next(); // next save
});

userSchema.statics.findByCredentials = async (email, password) => {
  let userFound;
  try {
    userFound = await user.findOne({ email });

    if (!userFound) {
      throw new Error("unable to login");
    }
    // console.log(userFound);
    const isMatch = await bcrypt.compare(password, userFound.password);
    console.log(isMatch);

    if (!isMatch) {
      throw new Error("unable to login");
    }
    return userFound;
  } catch (e) {
    console.log(e);
  }
};

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = await jwt.sign({ _id: user._id.toString() }, "my-secret-key");

  user.tokens.token = user.tokens.token.concat(token);
  await user.save();

  return token;
};

const user = mongoose.model("users", userSchema);

module.exports = user; //user here is the function name

//   age: {
//     type: Number,
//     validate(value) {
//       if (value < 0) {
//         throw new error("age must be positive number");
//       }
//     },
//   },
