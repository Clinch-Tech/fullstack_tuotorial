import User from "../model/user.model.js";
import { failureHandler, successHandler } from "../response.handler.js";

export const getAllUsers = async (req, res) => {
  const responseUser = await User.find({});
  res.json({ users: responseUser });
};

export const searchUser = async (req, res) => {
  // /user/search?email=example@mail.com
  const { email } = req.query;

  const user = await User.findOne({ email });

  res.send(user);
};

export const getUserById = async (req, res) => {
  const userId = req.user_id;

  const responseUser = await User.findById(userId);

  return successHandler(res, { user: responseUser });
};

export const editUserById = async (req, res) => {
  const { userId } = req.params;

  const { name } = req.body;

  await User.findByIdAndUpdate(userId, { username: name });

  return successHandler(res, {}, 200, "Updated");
};

export const deleteUser = async (req, res) => {
  // db deletion

  try {
    await User.findByIdAndDelete(req.params.userId);
    return successHandler(res, {}, 200, "User successfully deleted");
  } catch (e) {
    // return failureHandler(res, 400, e.message || `User unable to delete`);
    next(e);
  }
  // succedd -> 200 --> ok , deleted
  // failed -> 400 ===> not deleted
};
