import jwt from "jsonwebtoken";
import User from "../model/user.model.js";

function authentication() {
  return [tokenMiddleware, userExistMiddleware];
}

export function authenticationAdmin() {
  return [tokenMiddleware, userExistMiddleware, adminMiddleware];
}

const tokenMiddleware = (req, res, next) => {
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
  } catch (e) {
    res.status(400).send(e?.message);
  }
};

export const authMiddleware = async (req, res, next) => {
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

    req.user_id = userId;
    // ops

    // res.send(tokenParsed);
    next();
  } catch (e) {
    res.send(e.message);
  }
};
