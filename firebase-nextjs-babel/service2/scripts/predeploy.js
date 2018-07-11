const shell = require("shelljs");

console.log(__filename);

// build
shell.exec("node scripts/build.js");

// copy deps
shell.cp("-u", ["package.json"], "dist/");
