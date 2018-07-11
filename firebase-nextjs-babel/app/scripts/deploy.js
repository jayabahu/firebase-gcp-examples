const loadJsonFile = require("load-json-file");
const _get = require("lodash.get");
const shell = require("shelljs");

console.log(__filename);

// grab shared "Firebase Project" name
loadJsonFile("../.firebaserc").then(json => {
  let projectName =
    process.env.NODE_ENV !== "production"
      ? _get(json, "projects.default")
      : _get(json, "projects.production");

  // deploy this service as a function group
  shell.exec(
    `firebase deploy --project ${projectName} --only hosting,functions:appServer`
  );
});
