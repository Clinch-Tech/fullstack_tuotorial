import React from "react";
import { Navigate } from "react-router-dom";

const PrivateWrapper = ({ children }) => {
  const isLoginStaus = true;

  console.log("are you loggedin ? ", isLoginStaus);
  if (!isLoginStaus) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      {/* PrivateWrapper */}
      {children}
    </div>
  );
};

export default PrivateWrapper;
