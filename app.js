const validator = require("validator");
const chalk = require("chalk");
let getNotes = require("./notes.js");
let msg = getNotes();
console.log(msg);
console.log(validator.isURL('intec.edu.do'))
console.log(chalk.bold.blue.inverse('Error!'));


