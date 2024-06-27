import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../registration/registration.css";
import SectionTitle from "../../components/common/sectiontitletext/SectionTitle";
import { Link } from "react-router-dom";
import SqareButton from "../../components/common/cta/SqareButton";
import { Helmet } from "react-helmet-async";

function RegistrationPage() {
  const [formData, setFormData] = useState({
    first_name: "",
    surname: "",
    mobile_number: "",
    date_of_birth: "",
    email: "",
    state_name: "",
    cities_states_id: "",
    zone_name: "",
    password: "",
    password_confirmation: "",
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "first_name":
      case "surname":
        if (!/^[A-Za-z]+$/.test(value)) {
          error = "This field should contain only alphabetic characters.";
        }
        break;
      case "mobile_number":
        if (!/^\d{10}$/.test(value)) {
          error = "Please enter a valid 10-digit mobile number.";
        }
        break;
      case "email":
        if (!/\S+@\S+\.\S+/.test(value)) {
          error = "Please enter a valid email address.";
        }
        break;
      case "password":
      case "password_confirmation":
        if (value.length < 4) {
          error = "Password should be at least 4 characters long.";
        }
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for any remaining client-side errors
    let formValid = true;
    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "This field is required.";
        formValid = false;
      }
    });

    if (formData.password !== formData.password_confirmation) {
      newErrors.password_confirmation = "Passwords do not match.";
      formValid = false;
    }

    setErrors(newErrors);

    if (!formValid) {
      toast.error("Please correct the errors in the form.");
      return;
    }

    try {
      const response = await axios.post(
        "https://ispl-t10.com/api/register",
        formData
      );

      // Clear form fields after successful submission
      setFormData({
        first_name: "",
        surname: "",
        mobile_number: "",
        date_of_birth: "",
        email: "",
        state_name: "",
        cities_states_id: "",
        zone_name: "",
        password: "",
        password_confirmation: "",
      });

      // Reset errors
      setErrors({});

      // Check for server-side validation errors
      if (response.status === 200) {
        toast.success("Registration successful!");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.remark === "validation_error"
      ) {
        const serverErrors = error.response.data.message.error;
        serverErrors.forEach((errMsg) => {
          toast.error(errMsg);
        });
        // Prevent form submission on server-side validation errors
        return;
      } else {
        toast.error("Registration failed. Please try again.");
      }
    }
  };
  return (
    <section id="registrationFormSection">
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
            <form
              className="form p-t-20"
              id="register_user_form_data"
              onSubmit={handleSubmit}
            > 
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
                        value={formData.first_name}
                        onChange={handleChange}
                      />
                      {errors.first_name && (
                        <div className="error">{errors.first_name}</div>
                      )}
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
                        value={formData.surname}
                        onChange={handleChange}
                      />
                      {errors.surname && (
                        <div className="error">{errors.surname}</div>
                      )}
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
                        value={formData.mobile_number}
                        onChange={handleChange}
                      />
                      {errors.mobile_number && (
                        <div className="error">{errors.mobile_number}</div>
                      )}
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
                        value={formData.date_of_birth}
                        onChange={handleChange}
                      />
                      {errors.date_of_birth && (
                        <div className="error">{errors.date_of_birth}</div>
                      )}
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
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <div className="error">{errors.email}</div>
                      )}
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
                        value={formData.state_name}
                        onChange={handleChange}
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
                      {errors.state_name && (
                        <div className="error">{errors.state_name}</div>
                      )}
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="sel_city" className="form-label">
                        Select City
                      </label>
                      <select
                        className="form-select"
                        id="sel_city"
                        required
                        name="cities_states_id"
                        aria-label="Default select example"
                        value={formData.cities_states_id}
                        onChange={handleChange}
                      >
                        <option value="">Select city</option>
                        <option value="mumbai">mumbai</option>
                      </select>
                      {errors.cities_states_id && (
                        <div className="error">{errors.cities_states_id}</div>
                      )}
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="zone_name" className="form-label">
                        Zone
                      </label>
                      <input
                        type="text"
                        name="zone_name"
                        id="zone_name"
                        className="form-control"
                        value={formData.zone_name}
                        onChange={handleChange}
                      />
                      {errors.zone_name && (
                        <div className="error">{errors.zone_name}</div>
                      )}
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
                        value={formData.password}
                        onChange={handleChange}
                      />
                      {errors.password && (
                        <div className="error">{errors.password}</div>
                      )}
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
                        value={formData.password_confirmation}
                        onChange={handleChange}
                      />
                      {errors.password_confirmation && (
                        <div className="error">
                          {errors.password_confirmation}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-12 d-flex align-items-center justify-content-center my-5">
                    <SqareButton
                      classNameText="sqrBtn"
                      btnName="Register Now"
                      svgFill="#caf75a"
                      textColor="#caf75a"
                      bordercolor="#caf75a"
                      type="submit"
                    />
                  </div>
                  <p className="btmText">
                    Already have an account? &nbsp;
                    <Link to="/login" className="regster-bn">
                      Login Here
                    </Link>
                  </p>
                </div>
              </div>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegistrationPage;
