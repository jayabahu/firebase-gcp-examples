import * as functions from "firebase-functions";

const hello = functions.https.onRequest((request, response) => {
  response.send("Hello from service 1!");
});

exports.service1 = {
  hello,
};
