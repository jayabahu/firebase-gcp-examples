const shell = require("shelljs");

console.log(__filename);

// compile src/
shell.exec("babel src --out-dir dist --source-maps");
