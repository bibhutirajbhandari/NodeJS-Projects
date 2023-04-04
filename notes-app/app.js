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
    handler(argv) { 
        // console.log("Title: "+ argv.title);
        // console.log("Content: "+ argv.body);
        // console.log("Status: "+argv.status);

        // fs.appendFileSync("text.txt",`${argv.title} : ${argv.body} | ${argv.status}\n`)
        notes.addNote(argv.title,argv.body,argv.status);
    },
})

yargs.command({
    command : 'replace',
    desc: "replace note by",
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
    handler(argv) { 
    
        // fs.appendFileSync("text.txt",`${argv.title} : ${argv.body} | ${argv.status}\n`)
        notes.replaceNote(argv.title,argv.body,argv.status);
    },
})

//Command to REMOVE a note
yargs.command({
    command : 'remove',
    desc : "removes note",
    builder: {
        title: {
            desc: "Removes a particular note from Notes",
            demandOption: true,
            type: "string",
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
})

//Create READ note command
yargs.command({
    command: 'read',
    desc: "reads the note",
    builder: {
        title: {
            desc: "Note title",
            demandOption: true,
            type: "String",
        }
    },
    handler(argv){
        notes.readNote(argv.title);
    }
    })
    /* For reading a particular line

    builder: {
        read_line : {
            desc: "reads a particular line",
            demandOption: true,
            type: "number",
        }
    handler(argv) {
       fs.readFile("text.txt",function (err, text) {
               let arr = text.toString().split("\n");
               let line = arr[argv.read_line];
               console.log(line);
           })
    }*/


//Create list command
yargs.command({
    command: 'list',
    desc: "lists notes",
    handler(argv) {
        notes.listNotes(argv.title);
    }
})

yargs.parse()







