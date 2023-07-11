import jwt from "jsonwebtoken";

import User from "../model/user.model.js";
import { failureHandler, successHandler } from "../response.handler.js";
import { jwtSign } from "../utils/jwt.js";

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

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const responseUser = await User.findOne({ email });

    if (!responseUser) {
      throw new Error(`No user found`);
    }

    if (responseUser.password !== password) {
      throw new Error("Password didn't matched");
    }

    // const token = jwt.sign({ email, userId: userData._id }, "secret123");

    const token = jwtSign({
      email: responseUser.email,
      id: responseUser._id,
      username: responseUser.username,
    });

    return successHandler(
      res,
      { token, email: responseUser.email, username: responseUser.username },
      201
    );
  } catch (e) {
    return failureHandler(res, 401, e?.message || "Something went wrong.");
  }
};

export const protectedController = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      throw new Error("Authorization needed.");
    }

    const token = authHeader.split("Bearer ")[1];
    if (!token) {
      throw new Error("Authorization needed");
    }

    const { userId } = jwt.verify(token, "secret123");

    const existingUser = await User.findById(userId);
    if (!existingUser) {
      throw new Error("unresolved user.");
    }

    // ops

    res.send(tokenParsed);
  } catch (e) {
    res.send(e.message);
  }
};

// /api/user/me
