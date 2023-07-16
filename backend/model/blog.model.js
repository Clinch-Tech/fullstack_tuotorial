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
      required: false,
      ref: "User",
    },

    coverImage: {
      type: String,
      required: true,
    },
    galleryImage: [
      {
        type: String,
        required: true,
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
