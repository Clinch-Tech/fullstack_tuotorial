import { createSlice } from "@reduxjs/toolkit";
import {
  clearToken,
  getToken,
  isLoggedIn,
  setToken,
} from "../../utils/auth.utils";

const initialState = {
  loginStatus: isLoggedIn(),
  token: getToken(),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    login: (state, action) => {
      console.log("action", action);
      setToken(action.payload);
      state.loginStatus = true;
    },
    logout: (state) => {
      clearToken();
      state.loginStatus = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, login, logout } = userSlice.actions;

export default userSlice.reducer;
