import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateWrapper = ({ children }) => {
  const isLoginStaus = useSelector((state) => state.user.loginStatus);

  // const isLoginStaus = true;

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
