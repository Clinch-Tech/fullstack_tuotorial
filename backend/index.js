import express from "express";
import { connectToMongoDB } from "./config/db.js";
import mainRouter from "./route.js";
import morgan from "morgan";
import multer from "multer";

connectToMongoDB();

const app = express();

app.use(express.json());
app.use(morgan("dev"));

// app.use((req, res, next) => {
//   console.log("from application level middleware");
//   console.log(req.method);
//   console.log(req.originalUrl);
//   const startTime = Date.now();
//   return next();
// });

app.use("/api", mainRouter);

// app.use((err, req, res, next) => {
//   res.send(err);
// });

app.listen(8080, () => {
  console.log("api is running");
});
