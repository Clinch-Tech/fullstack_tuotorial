import React from "react";
import NavBar from "./Navbar/NavBar";

const BaseLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {/* <Sidebar> */}
      {children}
      {/* <Outlet /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default BaseLayout;
