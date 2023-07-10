import React, { useState } from "react";

import isEmail from "validator/lib/isEmail";
import { login } from "../redux/slices/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import http from "../utils/http.utils";
import loginApi from "../services/user.login.service";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(isEmail(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail) {
      alert("Enter correct email.");
    }

    // api call to backend/firebase
    // backend gives token
    try {
      // const responseLogin = await http.post(`/auth/login`, { email, password });
      // console.log(responseLogin?.data?.data?.token);
      // let token = "hhhjhajsdf.adsfuipi2323";

      const resposne = loginApi({ email, password });

      dispatch(login(resposne?.data?.token));
      navigate("/");
    } catch (e) {
      alert("error message here.");
    }
  };

  return (
    <div className="flex justify-center items-center h-[100dvh] ">
      <form onSubmit={handleSubmit}>
        <h1 className="text-lg font-semibold">Login Form</h1>
        <div className="mt-5">
          <p>Email</p>
          <input
            type="text"
            placeholder="Enter your email"
            className={`border-2 rounded-md p-3 w-[360px] outline-none ${
              !isValidEmail && email ? "border-red-500" : ""
            } `}
            value={email}
            onChange={(e) => handleChangeEmail(e)}
          />
          {!isValidEmail && email && (
            <div className="text-red-400 text-sm">
              Enter email with correct format
            </div>
          )}
        </div>
        <div className="mt-2">
          <p>Password</p>
          <input
            type="password"
            placeholder="Enter your password"
            className="border-2 rounded-md p-3 w-[360px] outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="mt-4 w-full bg-green-500 p-3 rounded-md"
          disabled={!isValidEmail}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
