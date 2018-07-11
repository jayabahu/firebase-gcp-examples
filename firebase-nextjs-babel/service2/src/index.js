import * as functions from "firebase-functions";

const hello = functions.https.onRequest((request, response) => {
  response.send("222222222222222222222222!");
});

exports.service2 = {
  hello,
};
