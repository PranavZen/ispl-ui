import React from "react";
import { ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";
import RegistrationFormDashboard from "./form/RegistrationFormDashboard";
import "../dashboardsessiontwo/dashboardregistration.css";

function DashboardForm() {
  return (
    <section id="registrationFormSection">
      <Helmet>
        <title>ISPL T10 | Dashboard Session 2</title>
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
      <RegistrationFormDashboard />
      <ToastContainer />
    </section>
  );
}

export default DashboardForm;
