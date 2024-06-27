import React from "react";
import "../registration/registration.css";
import SectionTitle from "../../components/common/sectiontitletext/SectionTitle";
import SqareButton from "../../components/common/cta/SqareButton";
import { Helmet } from "react-helmet-async";
 
function ForgetPassword() {
  return (
    <section id="registrationFormSection">
      <Helmet>
        <title>ISPL T10 | Forget Password</title>
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
            <form className="form p-t-20" id="register_user_form_data">
              <div className="com-div-md">
                <SectionTitle titleText="Reset Password" />
                <div className="login-modal-pn">
                  <div className="row mb-4">
                    <div className="col-md-6 mx-auto">
                      <label htmlFor="email" className="form-label">
                        Email Address
                      </label>
                      <input
                        required
                        id="email"
                        type="email"
                        className="form-control"
                        name="email"
                        autoComplete="email"
                      />
                    </div>
                  </div>
                  <div className="col-md-12 d-flex align-items-center justify-content-center my-5">
                    <SqareButton
                      classNameText="sqrBtn"
                      btnName="Send Password Reset Link"
                      svgFill="#caf75a"
                      textColor="#caf75a"
                      bordercolor="#caf75a"
                      type="submit"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ForgetPassword;
