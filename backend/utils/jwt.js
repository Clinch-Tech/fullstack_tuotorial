export const jwtSign = (payload) => {
  const token = jwt.sign({ email, userId: userData._id }, "secret123");
  return token;
};
