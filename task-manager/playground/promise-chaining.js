require("../src/db/mongoose");
const User = require("../src/models/user.js");

// User.findByIdAndUpdate("6438feb2d0f2c328f620efee", { email: "b@gmail.com" })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ email: "b@gmail.com" });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const updateEmailandCount = (id, email) => {
  const mail = User.findByIdAndUpdate(id, { email });
  const count = User.countDocuments({ email });
  return count;
};

updateEmailandCount("6438feb2d0f2c328f620efee", "bibhutirjb@gmail.com")
  .then((count) => {
    console.log(count);
  })
  .catch((err) => {
    console.log("err", err);
  });
