const { notStrictEqual } = require('assert');
const chalk = require("chalk");
const fs = require('fs');


const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title )

    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse("New note added!"));
    }
    else {
        console.log(chalk.red.inverse("Title taken!"));
    }
}
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON);
}
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        console.log("File not found!")
        return []
    }
}
const removeNote = (title) => {
    let notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title != title)

    if(notes.length === notesToKeep.length){
        console.log(chalk.red.inverse('No note was found'));
    }
    else{
        saveNotes(notesToKeep);
        console.log(chalk.green.inverse('The note was removed'));
    }
}
const listNotes = () =>{
    const notes = loadNotes()
    console.log(chalk.inverse.yellow("List of your notes!"));
    notes.forEach((note) => console.log(note));
}
const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);
    if(note){
        console.log(chalk.inverse.gray(note.title));
        console.log(chalk.inverse.blue(note.body));
    }
    else{
        console.log(chalk.inverse.red("Note not found"));

    }
}
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}