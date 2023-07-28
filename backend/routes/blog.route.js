import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { failureHandler, successHandler } from "../response.handler.js";
import Blog from "../model/blog.model.js";
import User from "../model/user.model.js";

const blogRouter = Router({ mergeParams: true });

blogRouter.post("/new", authMiddleware, async (req, res) => {
  // req.user_id

  try {
    let { title, description, tags } = req.body;

    tags = tags.split(",");

    const newBlog = new Blog({ title, description, tags, author: req.user_id });
    const responseBloog = await newBlog.save();

    return successHandler(res, { blog: responseBloog }, 201);
  } catch (e) {
    return failureHandler(
      res,
      400,
      `error from creating blog i.e. ${e.message}`
    );
  }
});

blogRouter.get("/", async function (req, res) {
  const blogs = await Blog.find({}).populate("author");
  return successHandler(res, { blogs });
});

blogRouter.patch("/:blogId", async (req, res) => {
  try {
    const newTag = "river"; //req.body
    await Blog.findOneAndUpdate(
      {
        _id: req.params.blogId,
      },
      {
        $pull: { tags: newTag },
      }
    );
    res.send("success");
  } catch (e) {
    return failureHandler(
      res,
      400,
      `error from creating blog i.e. ${e.message}`
    );
  }
});

export default blogRouter;
