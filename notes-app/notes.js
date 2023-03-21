const fs = require('fs')

function getNotes() {
    return "Your notes...";
}

module.exports = getNotes();

function addNote (title,body) {
    const notes = loadNotes();
    console.log(notes);
}

const loadNotes = function() {

    try{
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch(e){
        return [];
    }

    
}


module.exports = {
    getNotes : getNotes,
    addNote : addNote,
}