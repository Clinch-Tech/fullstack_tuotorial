export const isLoggedIn = () => {
  let loggedInData = localStorage.getItem("token");

  if (loggedInData) {
    return true;
  }
  loggedInData = sessionStorage.getItem("isLooged");
  if (loggedInData) {
    return true;
  }
  return false;
};

JSON.parse(user);

const logIn = (user, isr) => {
  localStorage.setItem("isLogged", true);

  stringifyUser = JSON.stringify(user);
};

const loggedOut = () => {
  localStorage.clear();
  sessionStorage.clear();
};
