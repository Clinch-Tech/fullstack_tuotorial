const TOKEN = "token";

export const isLoggedIn = () => {
  let token = localStorage.getItem("token");

  token = token ?? sessionStorage.getItem("token");

  if (token) {
    return true;
  }

  return false;
};

export const setToken = (token) => {
  localStorage.setItem("token", token);
};

export const getToken = () => {
  let token = localStorage.getItem("token");
  token = token ?? sessionStorage.getItem("token");

  return token;
};

export const clearToken = () => {
  localStorage.clear();
  sessionStorage.clear();
};
