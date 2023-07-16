import express from "express";

import multer from "multer";
import uploadImage from "../middleware/uploadImage.js";

const upload = multer({ dest: "uploads/" });

const productRouter = express.Router({ mergeParams: true });

productRouter.post("/", uploadImage(), (req, res) => {
  try {
    console.log(req.files);
    res.send(req.body);
  } catch (e) {
    console.log("from this");
    res.send(e);
  }
});

export default productRouter;

// option-1 code within some specific folder

// option-2 cloud:
// CDN - content delivry network

//  phase-1: form data parsed: --> req.file
// req.file --> buffer --> primary memory unit (RAM)
// pase-2 : upload to cloud/cdn

// option-3 db:
