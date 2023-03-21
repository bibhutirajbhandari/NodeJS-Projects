const yargs = require('yargs')
const fs = require('fs')
const notes = require('./notes')

//Create command to add note
yargs.command({
    command : 'add',
    desc: "adds a note",
    builder: {
        title: {
            desc : "command title",
            demandOption: true,
            type: "string",
        },
        body: {
            desc: "command's body",
            demandOption: true,
            type: "string"
        },
        status: {
            desc: "status of command",
            demandOption: true,
            type: "boolean"
        }
    },
    handler: function(argv) { 
        console.log("Title: "+ argv.title);
        console.log("Content: "+ argv.body);
        console.log("Status: "+argv.status);

        fs.appendFileSync("text.txt",`${argv.title} : ${argv.body} | ${argv.status}\n`)
        // notes.addNote(argv.title,argv.body,argv.status)
    },
})

//Create command to remove a note
yargs.command({
    command : 'remove',
    desc : "removes note",
    handler : function() {
        console.log("removing a note")
    }
})

//Create command read note
yargs.command({
    command: 'read',
    desc: "reads the note",
    builder: {
        read_line : {
            desc: "reads a particular line",
            demandOption: true,
            type: "number",
        }
    },
    handler: function(argv) {
       fs.readFile("text.txt",function (err, text) {
               let arr = text.toString().split("\n");
               let line = arr[argv.read_line];
               console.log(line);
           })
    }
})

//Create list command
yargs.command({
    command: 'list',
    desc: "lists notes",
    handler: function() {
        console.log("listing out the notes!")
    }
})

yargs.parse()







