import React from "react";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="error-page">
      <h1>
        4
        <img
          className="erro-imgball"
          src="https://ispl-t10.com/ball.jpg"
          alt="error"
        />
        4
      </h1>
      <p> The page you are looking for does not exist or deleted.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}

export default Error404;
