const shell = require("shelljs");

console.log(__filename);

shell.exec("rimraf dist/");
