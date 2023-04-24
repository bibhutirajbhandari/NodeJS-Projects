// const bcrypt = require("bcrypt");

// const hash = async () => {
//   const password = "hello123";
//   const hashedPassword = await bcrypt.hash(password, 8);

//   console.log(password);
//   console.log(hashedPassword);

//   const isMatch = await bcrypt.compare(password, hashedPassword);
//   console.log(isMatch);
// };
// hash();

// const jwt = require("jsonwebtoken");

// const payload = { id: "abc123" }; //object with attributtes to uniquely identify data
// const secretKey = "my-secret-key"; //to avoid tampering
// const options = { expiresIn: "1h" };

// const webtoken = async () => {
//   const token = jwt.sign(payload, secretKey, options); //token syntax
//   console.log(token);
// };
// webtoken();
