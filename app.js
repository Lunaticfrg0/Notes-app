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
    handler: function(argv){
        notesMethods.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log("removing a note!")
    }
});

yargs.command({
    command: 'list',
    describe: 'Lists notes',
    handler: function(){
        console.log("Listing notes!")
    }
});
yargs.command({
    command: 'read',
    describe: 'Reads a note',
    handler: function(){
        console.log("Reading a note!")
    }
});

yargs.parse();
/*
const command = process.argv[2];

if(command === "add"){
    console.log("adding a note!");
} else if(command === "remove"){
    console.log("Removing note!");
}*/
