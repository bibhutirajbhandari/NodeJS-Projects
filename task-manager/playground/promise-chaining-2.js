require("../src/db/mongoose");
const Task = require("../src/models/task.js");

// Task.findByIdAndRemove("643929ed6c2b43a8f6f2ce1c") //removes document of the given id
//   .then((remainingTasks) => {
//     console.log(remainingTasks);
//     return User.countDocuments({ status: false }); //method which counts no. of docs (provided a condition)
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const removeTaskAndCount = async (id, status) => {
  const remove = await Task.findByIdAndRemove(id);
  const count = await Task.countDocuments(status);
  return count;
};
removeTaskAndCount("643cf6d75126ce4fea5584d9", false)
  .then((count) => {
    console.log(count);
  })
  .catch((err) => {
    console.log("err", err);
  });
