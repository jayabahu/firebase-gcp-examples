import * as functions from "firebase-functions";
import { Nuxt } from "nuxt";
import * as express from "express";

const server = express();

const config = {
  dev: process.env.NODE_ENV !== "production",
  buildDir: "app",
  build: {
    publicPath: "/assets/",
  },
};

const nuxt = new Nuxt(config);

server.use(nuxt.render());

const app = functions.https.onRequest(server);

exports.appServer = {
  app,
};
