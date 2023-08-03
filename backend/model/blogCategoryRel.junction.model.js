import mongoose from "mongoose";

const blogCategorySchema = new mongoose.Schema({
  blog: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Blog",
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});

const BlogCategoryRel = new mongoose.model(
  "BlogCategoryRel",
  blogCategorySchema
);
export default BlogCategoryRel;
