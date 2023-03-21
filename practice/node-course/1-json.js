const fs = require('fs');

const book = {
  title : "I am Malala",
   author : "Malala",
 }
console.log(book); //prints javascript object to console

 const bookJSON = JSON.stringify(book); //method in JS to convert object to JSON string & vice-versa
console.log(bookJSON);                 //prints JSON string to console

const parsedData = JSON.parse(bookJSON);


// read & write data to JSON file


fs.writeFileSync("1-json.json",bookJSON);

const read_file = fs.readFileSync("1-json.json"); //data is stored in buffer datatype
const dataJSON = read_file.toString();
const data = JSON.parse(dataJSON);
console.log(data.title);
 

//Challenge: Work with JSON & the file system

//1. Load and parse the JSON data
//2. Change the name and age property using your info
//3. Stringify the changed object and overwrite original data
//4. Test your work by viewing data in JSON file

// //1.
// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
// const user = JSON.parse(dataJSON);

// //2.
// user.name = "Bibhuti";
// user.age = 22;
// console.log('1',user)

// //3.
// const userJSON = JSON.stringify(user);
// fs.writeFileSync("1-json.json",userJSON);
// console.log('2',userJSON)
