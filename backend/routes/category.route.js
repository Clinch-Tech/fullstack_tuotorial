import { Router } from "express";
import { createACategory } from "../controller/category.controller.js";
import validationGlobal from "../middleware/validator/validationGlobal.js";
import { validator } from "../middleware/validator/validator.middleware.js";

const categoryRouter = Router({ mergeParams: true });

categoryRouter.post(
  "/new",
  validationGlobal(["categoryName"]),
  validator,
  createACategory
);

export default categoryRouter;
