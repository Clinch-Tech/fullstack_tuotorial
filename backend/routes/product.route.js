import express, { application } from "express";

import multer from "multer";
import uploadImage from "../middleware/uploadImage.js";
import { check, param, query, validationResult } from "express-validator";
import { validator } from "../middleware/validator/validator.middleware.js";
import { productPostController } from "../controller/user.controller.js";
import validationGlobal, {
  validationGlobalOptional,
} from "../middleware/validator/validationGlobal.js";
import User from "../model/user.model.js";

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

// user----/..../old-> form-data (image,  title,body) --->  express.json() (application/json --> req.body)
//   form-data --> req.filesd, req.file, req.body --->cloudinaryUpload ---> req.files to req.galley,
// validationGlobal (express-validator) ---  req.body,req.headers, req.params, req.query

productRouter.post(
  "/old",
  uploadImage(),
  validationGlobal(["description"]),
  validator,
  (req, res) => {
    res.send("from controller");
  }
);

productRouter.get(
  "/old/:id",
  param("id", "id should be legit mongodb id.")
    .notEmpty()
    .isLength({ min: 8 })
    .isMongoId(),
  validator,
  (req, res) => {
    res.send(req.params);
  }
);

productRouter.get("/test", async (req, res) => {
  const start = performance.now();

  let r1 = User.find();
  const r2 = User.find();
  const r3 = User.find();
  const r4 = User.find();
  const r5 = User.find();

  let rx;

  [r1, ...rx] = await Promise.all([r1, r2, r3, r4, r5]);

  // r1, 1,2,3,4,5,6,7
  // r2, 1,2,3,4,5,6,7,8,9
  // r3, 1,2,3-> resolved
  // r4, 1,2,3,4,5 -> reject

  // r5, 4,5,6,7,8,9
  // r6, 6,7,8

  console.log("time elapsed = ", performance.now() - start);

  res.send({ responses: r1 });
});

export default productRouter;

// option-1 code within some specific folder

// option-2 cloud:
// CDN - content delivry network

//  phase-1: form data parsed: --> req.file
// req.file --> buffer --> primary memory unit (RAM)
// pase-2 : upload to cloud/cdn

// option-3 db:
