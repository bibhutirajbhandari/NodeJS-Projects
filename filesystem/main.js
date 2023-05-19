const fs = require("fs");

// fs.writeFile("write.js", "writing in a file", function (err) {
//   console.log("written");
// });

fs.readFile("write.js", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});

fs.unlink("write.js", function (e) {
  if (e) {
    console.log(e);
  } else {
    console.log("file deleted");
  }
});
