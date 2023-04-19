const mongoose = require("mongoose");
// const validator = require("validator");

const task = mongoose.model("Tasks", {
  desc: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
});

module.exports = task;
