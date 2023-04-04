
const fs = require('fs')
fs.appendFileSync('text.txt',' \n have a great day!')
const msg = require('./notes')
console.log(msg)

const validator = require('validator')
console.log(validator.isEmail('hello@getMaxListeners.com')); //false : not an email

console.log("-------------")



//if you want to export multiple functions, cause it traces the preferred func from the file using (.)
const a = require('./utils.js') 
const sum1 = a.add(4,3) 
console.log(sum1) 


//for singular func export from a file 
const add = require('./utils.js')
const sum2 = add(6+7)
console.log(sum2)

console.log("----------------")



let someFunction = (arg) => {
    console.log(arg)
}
console.log(process)
someFunction(process.argv[2])
const ans = validator.isEmail(process.argv[2]);
console.log(ans)

console.log("-----------------")