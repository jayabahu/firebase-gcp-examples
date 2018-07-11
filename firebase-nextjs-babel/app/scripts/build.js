const shell = require("shelljs");

console.log(__filename);

// public/
shell.mkdir("-p", "dist/");
shell.cp("-Ru", "public/", "dist/"); // results in dist/public/**/*.*

// client/
shell.exec("next build client/");

// server/
shell.exec("babel server/ --out-dir dist/appServer/ --source-maps");
