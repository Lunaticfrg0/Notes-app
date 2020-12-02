const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs")
const notesMethods = require("./notes.js");

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note body content",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notesMethods.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notesMethods.removeNote(argv.title)
    }
});

yargs.command({
    command: 'list',
    describe: 'Lists notes',
    handler(){
        notesMethods.listNotes();
    }
});
yargs.command({
    command: 'read',
    describe: 'Reads a note',
    builder:{
        title:{
            describe: "Note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notesMethods.readNote(argv.title);
    }
});

yargs.parse();
