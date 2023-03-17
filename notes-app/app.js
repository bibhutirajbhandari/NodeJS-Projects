
// const fs = require('fs')
// fs.appendFileSync('text.txt',' \n have a great day!')
// const msg = require('./notes')
// console.log(msg)

// const validator = require('validator')
// console.log(validator.isEmail('hello@getMaxListeners.com')); //false : not an email

// console.log("-------------")

// if you want to export multiple functions, cause it traces the preferred func from the file using (.)
// const a = require('./utils.js') 
// const sum1 = a.add(4,3) 
// console.log(sum1) 


// for singular func export from a file 
// const add = require('./utils.js')
// const sum2 = add(6+7)
// console.log(sum2)

// console.log("----------------")

// let someFunction = (arg) => {
//     console.log(arg)
// }
// console.log(process)
// someFunction(process.argv[2])
// const ans = validator.isEmail(process.argv[2]);
// console.log(ans)

// console.log("-----------------")

// const { command } = require('yargs')
// const yargs = require('yargs')

 //Create command to add note
// yargs.command({
//     command : 'add',
//     desc: "adds a note",
//     builder: {
//         title: {
//             desc : "command title",
//             demandOption: true,
//             type: 'string'
//         },
//         body: {
//             desc: "command body",
//             demandOption: true,
//             type: 'string'
//         }
//     },
//     handler: function(argv) { 
//         console.log("Title: "+ argv.title);
//         console.log("Content: "+ argv.body)
//     },
// })

// //Create command to remove a note
// yargs.command({
//     command : 'remove',
//     desc : "removes note",
//     handler : function() {
//         console.log("removing a note")
//     }
// })

// //Create command read note
// yargs.command({
//     command: 'read',
//     desc: "reads the note",
//     handler: function() {
//         console.log("reading a note!")
//     }
// })

// //Create list command
// yargs.command({
//     command: 'list',
//     desc: "lists notes",
//     handler: function() {
//         console.log("listing out the notes!")
//     }
// })

// yargs.parse()

// console.log("------------")


let salary = {};

function isEmpty(salary) {

    let sum=0;

    for(let key in salary) {
        sum += salary.key;
    } 

    console.log(sum);
}

isEmpty(salary);



