import React from "react";
import "../registration/registration.css";
import SectionTitle from "../../components/common/sectiontitletext/SectionTitle";
import { Link } from "react-router-dom";
import SqareButton from "../../components/common/cta/SqareButton";

function ForgetPassword() {
  return (
    <section id="registrationFormSection">
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
