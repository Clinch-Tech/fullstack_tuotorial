import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      minLength: 5,
      required: true,
    },

    author: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },

    coverImage: {
      type: String,
      required: false,
    },
    galleryImage: [
      {
        type: String,
        required: false,
      },
    ],

    tags: { type: [String], required: true },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", userSchema);
export default Blog;
