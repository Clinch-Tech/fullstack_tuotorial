import express from "express";

import multer from "multer";
import uploadImage from "../middleware/uploadImage.js";
import { check, validationResult } from "express-validator";
import { validator } from "../middleware/validator/validator.middleware.js";
import { productPostController } from "../controller/user.controller.js";
import validationGlobal, {
  validationGlobalOptional,
} from "../middleware/validator/validationGlobal.js";

const upload = multer({ dest: "uploads/" });

const productRouter = express.Router({ mergeParams: true });

productRouter.post("/", uploadImage(), (req, res) => {
  try {
    // console.log(req.files);
    res.status(201).send(req.body);
  } catch (e) {
    console.log("from this");
    res.status(400).send(e);
  }
});

// body = ["title", "description", "email"]

productRouter.post(
  "/new",
  validationGlobalOptional(["title"]),
  validationGlobal(["email"]),
  validator,
  productPostController
);

productRouter.post(
  "/old",
  validationGlobal(["description"]),
  validator,
  (req, res) => {
    res.send("from controller");
  }
);

export default productRouter;

// option-1 code within some specific folder

// option-2 cloud:
// CDN - content delivry network

//  phase-1: form data parsed: --> req.file
// req.file --> buffer --> primary memory unit (RAM)
// pase-2 : upload to cloud/cdn

// option-3 db:
