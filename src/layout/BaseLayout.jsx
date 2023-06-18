import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./Navbar/NavBar";

const BaseLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default BaseLayout;
