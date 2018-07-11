import * as functions from "firebase-functions";
const next = require("next");

let dev = process.env.NODE_ENV !== "production";
let app = next({ dev, conf: { distDir: "app" } });
let handle = app.getRequestHandler();

const app1 = functions.https.onRequest((req, res) => {
  console.log("File: " + req.originalUrl); // log the page.js file that is being requested
  return app.prepare().then(() => handle(req, res));
});

exports.appServer = {
  app1,
};
