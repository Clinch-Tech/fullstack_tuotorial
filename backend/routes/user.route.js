import { Router } from "express";
import {
  deleteUser,
  editUserById,
  getAllUsers,
  getUserById,
  searchUser,
} from "../controller/user.controller.js";

const userRouter = Router({ mergeParam: true });

userRouter.get("/", getAllUsers);

userRouter.get("/search", searchUser); // localhost:8080/api/user/search

userRouter.get("/:userId", getUserById);

userRouter.patch("/:userId", editUserById);

userRouter.delete("/:userId", deleteUser);

export default userRouter;
