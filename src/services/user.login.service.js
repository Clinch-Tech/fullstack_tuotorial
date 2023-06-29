import http from "../utils/http.utils";

const loginApi = async ({ email, password }) => {
  const responseLogin = await http.post(`/auth/login`, { email, password });
  return responseLogin?.data;
};

export default loginApi;
