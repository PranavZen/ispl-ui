import React from "react";
import "../registration/registration.css"; 
import SectionTitle from "../../components/common/sectiontitletext/SectionTitle";
import { Link } from "react-router-dom";
import SqareButton from "../../components/common/cta/SqareButton";
import { Helmet } from "react-helmet-async";
function Login() {
  return (
    <section id="registrationFormSection">
      <Helmet>
        <title>ISPL T10 | Login</title>
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
                <SectionTitle titleText="Login" />
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
                  <div className="row mb-4">
                    <div className="col-md-6 mx-auto">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        required
                        id="password"
                        type="password"
                        className="form-control"
                        name="password"
                        autoComplete="new-password"
                      />
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-md-6 mx-auto">
                      <div className="form-check">
                        <div className="d-flex align-items-center">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="gridCheck"
                          />
                          <label className="form-check-label" htmlFor="gridCheck">
                            Remember Me
                          </label>
                        </div>
                        <p className="btmText mt-0">
                          <Link
                            to="/password/reset"
                            className="regster-bn frgtBtn"
                          >
                            forget password ?
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 d-flex align-items-center justify-content-center my-5">
                    <SqareButton
                      classNameText="sqrBtn"
                      btnName="Login Now"
                      svgFill="#caf75a"
                      textColor="#caf75a"
                      bordercolor="#caf75a"
                      type="submit"
                    />
                  </div>

                  <p className="btmText">
                    Do not have an account? &nbsp;
                    <Link to="/registration" className="regster-bn">
                      Register Here
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
