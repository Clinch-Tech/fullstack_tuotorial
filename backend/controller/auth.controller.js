import jwt from "jsonwebtoken";

import User from "../model/user.model.js";
import { failureHandler, successHandler } from "../response.handler.js";

export const registerController = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const user = new User({ username, email, password });
    const userData = await user.save();

    console.log(userData);

    const token = jwt.sign({ email, userId: userData._id }, "secret123");

    return successHandler(res, { token, email, username }, 201);
  } catch (e) {
    console.log(e.code);
    if (e.code === 11000) {
      return failureHandler(res, 400, "Email already been used.");
    }
    res.status(400).json(e.message || "something went wrong.");
  }
};
