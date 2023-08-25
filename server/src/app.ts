const express = require("express");
const app = express();
import { NextFunction, Response } from "express";
import router from "./app/routers";
import { connect, connection } from "mongoose";
import bodyParser from "body-parser";

app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,content-type,Authorization,authentication-token');
    next();
}).use(bodyParser.urlencoded({ extended: false, limit: '150mb' }))
  .use(bodyParser.json({ type: 'application/json', limit: '150mb' }))
  .use(bodyParser.raw())
  .use(router);

connect('mongodb://127.0.0.1:27017/blog');

const db = connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log(" ");
  console.log("MongoDB connected successfully !");
  console.log(" ");

  app.listen(3001, () => {
    console.log("======================================================");
    console.log("|| Here you go your server is running at PORT: 3001 ||");
    console.log("|| Check its health : http://localhost:3001/v1/ping ||");
    console.log("======================================================");
  });
});