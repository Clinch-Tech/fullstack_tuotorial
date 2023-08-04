import { Router } from "express";
import {
  createACategory,
  insertIntoCategoryRel,
} from "../controller/category.controller.js";
import validationGlobal from "../middleware/validator/validationGlobal.js";
import { validator } from "../middleware/validator/validator.middleware.js";

const categoryRouter = Router({ mergeParams: true });

categoryRouter.post(
  "/new",
  validationGlobal(["categoryName"]),
  validator,
  createACategory
);

categoryRouter.post("/rel", insertIntoCategoryRel);

export default categoryRouter;
