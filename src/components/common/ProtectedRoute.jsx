import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("apiToken");
  // console.log("first token token", token);

  if (!token) {
    return <Navigate to="/error404" replace />;
  } else {
    return <Navigate to="/dashboard-golden-page" replace />;
  }
};

export default ProtectedRoute;
