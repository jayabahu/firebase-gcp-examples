const shell = require("shelljs");

console.log(__filename);

// clean dist/
shell.exec("rimraf dist/");
