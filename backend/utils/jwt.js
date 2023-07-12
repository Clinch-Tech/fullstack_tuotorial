import jwt from "jsonwebtoken";

export const jwtSign = (payload) => {
  const { email, id } = payload;
  const token = jwt.sign({ email, userId: id }, "secret123");
  return token;
};
