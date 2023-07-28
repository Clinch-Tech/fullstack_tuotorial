import { Router } from "express";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import productRouter from "./routes/product.route.js";
import blogRouter from "./routes/blog.route.js";

const mainRouter = Router({ mergeParams: true });

mainRouter.use("/user", userRouter); //localhost:8000/api/user
mainRouter.use("/auth", authRouter);

mainRouter.use("/product", productRouter);

mainRouter.use("/blog", blogRouter);

export default mainRouter;
