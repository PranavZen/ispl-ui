import React from "react";
import "../registration/registration.css";
import SectionTitle from "../../components/common/sectiontitletext/SectionTitle";
import { Link } from "react-router-dom";
import SqareButton from "../../components/common/cta/SqareButton";

function RegistrationPage() {
  return (
    <section id="registrationFormSection">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 mx-auto">
            <form className="form p-t-20" id="register_user_form_data">
              <div className="com-div-md">
                <SectionTitle titleText="Player Registration" />
                <div className="login-modal-pn">
                  <div className="row mb-4">
                    <div className="col-md-6">
                      <label htmlFor="first_name" className="form-label">
                        First Name
                      </label>
                      <input
                        required
                        id="first_name"
                        type="text"
                        className="form-control"
                        name="first_name"
                        autoComplete="first_name"
                        autoFocus
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="surname" className="form-label">
                        Surname
                      </label>
                      <input
                        required
                        id="surname"
                        type="text"
                        className="form-control"
                        name="surname"
                        autoComplete="surname"
                        autoFocus
                      />
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-md-6">
                      <label htmlFor="mobile_number" className="form-label">
                        Mobile number
                      </label>
                      <input
                        required
                        id="mobile_number"
                        maxLength="10"
                        type="text"
                        className="form-control"
                        name="mobile_number"
                        autoComplete="mobile_number"
                        autoFocus
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="date_of_birth" className="form-label">
                        Date of birth
                      </label>
                      <input
                        required
                        id="date_of_birth"
                        type="date"
                        className="form-control"
                        name="date_of_birth"
                        autoComplete="email"
                      />
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-md-6 mb-4">
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
                    <div className="col-md-6 mb-4">
                      <label htmlFor="payment_mode" className="form-label">
                        Mode of Payment
                      </label>
                      <select
                        id="payment_mode"
                        name="payment_mode"
                        required
                        className="form-control"
                      >
                        <option value="1">Online</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="sel_state" className="form-label">
                        Select State
                      </label>
                      <select
                        className="form-select"
                        name="state_name"
                        required
                        id="sel_state"
                        aria-label="Default select example"
                      >
                        <option value="">Select state</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="West Bengal">West Bengal</option>
                        <option value="Jammu and Kashmir">
                          Jammu and Kashmir
                        </option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="Assam">Assam</option>
                        <option value="Goa">Goa</option>
                      </select>
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="sel_city" className="form-label">
                        Select City
                      </label>
                      <select
                        className="form-select"
                        id="sel_city"
                        required
                        name="cities_states_id"
                        aria-label="Default select example"
                      >
                        <option value="">Select city</option>
                      </select>
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="zone_name" className="form-label">
                        Zone
                      </label>
                      <input
                        type="text"
                        name="zone_name"
                        id="zone_name"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-md-6">
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
                    <div className="col-md-6">
                      <label htmlFor="password-confirm" className="form-label">
                        Confirm Password
                      </label>
                      <input
                        required
                        id="password-confirm"
                        type="password"
                        className="form-control"
                        name="password_confirmation"
                        autoComplete="new-password"
                      />
                    </div>
                  </div>
                  <div className="row mb-4 text-center">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 btn-info mb-4">
                      <span
                        id="city_amount"
                        className="text-black"
                        style={{ display: "none" }}
                      ></span>
                    </div>
                    <div className="col-md-4"></div>
                  </div>
                  <div className="col-md-12 d-flex align-items-center justify-content-center mb-5">
                    <SqareButton
                      classNameText="sqrBtn"
                      btnName="Pay & Register Now"
                      svgFill="#caf75a"
                      textColor="#caf75a"
                      bordercolor="#caf75a"
                      type="submit"
                    />
                  </div>
                  <p className="btmText">
                    Already have an account? &nbsp;
                    <Link to="" className="regster-bn">
                      Login
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

export default RegistrationPage;
