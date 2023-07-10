import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Drawer from "react-modern-drawer";

import { logout } from "../../redux/slices/userSlice";
import useResize from "../../hooks/useResize";

const NavBar = () => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const [width, height] = useResize();

  console.log(width, height);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  if (width < 500) {
    return (
      <div className="flex justify-between h-[50px] px-10 items-center bg-blue-100">
        <button onClick={toggleDrawer}>Show</button>

        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="rigth"
          className="w-[100%] bg-red-200"
        >
          Hey this is a drawer
        </Drawer>
      </div>
    );
  }

  return (
    <div className="flex justify-between h-[50px] px-10 items-center bg-blue-100">
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
      <Link to="/contact-us">Contact</Link>
      <Link to="/blogs">Search bar here...</Link>

      <div className="ml-5">
        <button onClick={() => dispatch(logout())}>Log out</button>
      </div>
    </div>
  );
};

export default NavBar;
