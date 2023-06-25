import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/slices/userSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  return (
    <div className="bg-blue-100">
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
      <Link to="/contact-us">Contact</Link>
      <Link to="/blogs">blogs</Link>

      <div className="ml-5">
        <button onClick={() => dispatch(logout())}>Log out</button>
      </div>
    </div>
  );
};

export default NavBar;
