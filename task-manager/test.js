const mongoose = require('mongoose');

const url=

mongoose.connect(url).then(() => {
console.log("connected to mongodb database");
})
.catch((err) => {
console.log(err);
})
