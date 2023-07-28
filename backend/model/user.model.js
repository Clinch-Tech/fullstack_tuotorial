import mongoose from "mongoose";
import { createHmac } from "node:crypto";

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

userSchema.pre("save", function (next) {
  if (this.password) {
    this.password = this.hashPassword(this.password);
  }

  next();
});

userSchema.methods = {
  hashPassword(password) {
    return createHmac("sha256", "secret09876567")
      .update(password)
      .digest("hex");
  },
};

const User = mongoose.model("User", userSchema);
export default User;
