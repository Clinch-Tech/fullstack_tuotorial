import mongoose from "mongoose";
import { allowedCategories } from "../utils/constant.js";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      lowercase: true,
      enum: allowedCategories,
    },
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", categorySchema);
export default Category;
