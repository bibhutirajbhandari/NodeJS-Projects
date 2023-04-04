const fs = require('fs')


//ADD note to notes array
const addNote = (title,body,status) => {
    const notes = loadNotes();                             //notes: holds the dataBuffer here. is motified and updated in the next steps

    // const duplicateTitle = notes.filter(function (notes){  //condition to check if previously same note is here, to proceed with updation of array                                                       //dupliacateTitle here is an new array made by filter() method
    //     return notes.title === title;

    //after ES6 Arrow function shortcut used 
    //find(), finds the first duplicate in the array and returns true or false
    const duplicateNote = notes.find((note) => note.title === title)


    if(!duplicateNote){
        notes.push({
            title: title,
            body: body,
            status: status,
        });
        saveNotes(notes);
        console.log("New note added!");
    }
    else {
        console.log("duplicate object!");
    }
}

//Loads previous notes
const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch(e){
        return [];
    } 
}

//SAVES updated notes by writeFileSync 
const saveNotes = (notes) => {
    console.log(notes);
    const dataJSON = JSON.stringify(notes);
    console.log(dataJSON);
    fs.writeFileSync('notes.json',dataJSON);
}


//Remove a note from Notes
const removeNote = function(title) {
    const notes = loadNotes();                         //loads existing notes array

    //if (each note is not equal to input title)? return every note which is not "title" to notesToKeep | return previous loaded array "loadNotes"
    const notesToKeep = notes.filter((everyNoteInNotes) => everyNoteInNotes.title !== title)   

    if(notes.length > notesToKeep.length){
        console.log("Note Removed!");   
        saveNotes(notesToKeep);
    }
    else {
        console.log("No note found!");
    }
}


//LIST the notes 
const listNotes = () => {
    const notes = loadNotes()
    console.log("-- YOUR NOTES --");

    notes.forEach(element => { 
        console.log(element.title);
    });
}

//READ the note
const readNote = (title) => {
    const notes = loadNotes()
    console.log(notes)
    const note = notes.find((note) => note.title === title); 

    if(note) {
        console.log("--READ YOUR NOTES--")
        console.log(note.title);
        console.log(note.body);
        console.log(note.status);
    }else {
        console.log("Note not found!");
    }
}
const replaceNote =(replace) => {
    const notes = loadNotes()
    console.log(notes)
    const note = notes.find((note) => note.title === title);

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body,
            status: status,
        });
        saveNotes(notes);
        console.log("New note added!");
    }
    else {
        console.log("duplicate object!");
    }
}

module.exports = {
    addNote : addNote,
    removeNote : removeNote,
    listNotes : listNotes,
    readNote : readNote,
    replaceNote: replaceNote,
}