import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
    },

    email: {
      type: String,
      minLength: 5,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      mingLength: 6,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
