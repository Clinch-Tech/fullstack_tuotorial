import { Router } from "express";
import {
  loginController,
  protectedController,
  registerController,
} from "../controller/auth.controller.js";

const authRouter = Router();

authRouter.post("/register", registerController);

authRouter.post("/login", loginController);

authRouter.get("/protected", protectedController);

export default authRouter;
