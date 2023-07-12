import { Router } from "express";
import {
  deleteUser,
  editUserById,
  getAllUsers,
  getUserById,
  searchUser,
} from "../controller/user.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const userRouter = Router({ mergeParam: true });

// api/user/?page=11.&limit=2000
userRouter.get("/", authMiddleware, getAllUsers);

userRouter.get("/search", searchUser); // localhost:8080/api/user/search

userRouter.get("/me", authMiddleware, getUserById);

userRouter.patch("/:userId", editUserById);

userRouter.delete("/:userId", deleteUser);

export default userRouter;
