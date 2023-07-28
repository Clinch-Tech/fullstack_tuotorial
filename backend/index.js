import express from "express";
// const express = require('express');
import { connectToMongoDB } from "./config/db.js";
import mainRouter from "./route.js";
import morgan from "morgan";
import multer from "multer";

connectToMongoDB();

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api", mainRouter);

app.listen(8080, () => {
  console.log("api is running");
});
