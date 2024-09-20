import React from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../registration/registration.css";

import { Helmet } from "react-helmet-async";
import RegistrationForm from "./form/RegistrationForm";
import { Link } from "react-router-dom";

function RegistrationPage() {
  return (
    <section>
      <Helmet>
        <title>ISPL T10 | Registration</title>
        <meta
          name="description"
          content="This is the home page of our website."
        />
        <meta name="keywords" content="home, main, index" />
        <meta name="author" content="Author Name" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Home Page" />
        <meta
          property="og:description"
          content="This is the home page of our website."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.example.com/" />
        <meta
          property="og:image"
          content="https://www.example.com/home-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home Page" />
        <meta
          name="twitter:description"
          content="This is the home page of our website."
        />
        <meta
          name="twitter:image"
          content="https://www.example.com/home-image.jpg"
        />
        <link rel="canonical" href="https://www.example.com/" />
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 mx-auto">
            {/* <RegistrationForm/>
            <ToastContainer /> */}
            <div className="error-page">
              <h1>Registration Closed</h1>
              <p>
                Thank you for your interest. Unfortunately, the registration
                period has ended. Stay tuned for future updates and
                opportunities by visiting our website or following us on social
                media.
              </p>
              <Link to="/">Go back to Home</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegistrationPage;
