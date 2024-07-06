import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import SectionTitle from "../../../components/common/sectiontitletext/SectionTitle";
import SqareButton from "../../../components/common/cta/SqareButton";

function RegistrationForm() {
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
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [zones, setZones] = useState([]);

  const location = useLocation();

  useEffect(() => {
    fetchStates();
    checkQueryParams();
  }, []);

  const fetchStates = async () => {
    try {
      const response = await axios.get("https://my.ispl-t10.com/api/state");
      let states = response.data.data.states || [];

      const uniqueStates = Array.from(
        new Set(states.map((state) => state.state_name))
      ).map((state_name) => {
        return states.find((state) => state.state_name === state_name);
      });

      setStates(uniqueStates);
    } catch (error) {
      console.error("Error fetching states:", error);
      toast.error("Failed to fetch states. Please try again later.");
    }
  };

  const fetchCitiesByState = async (stateName) => {
    try {
      const response = await axios.get(
        `https://my.ispl-t10.com/api/get_city_base_on_state?state_name=${stateName}`
      );
      setCities(response.data.cities || []);
    } catch (error) {
      console.error(`Error fetching cities for ${stateName}:`, error);
      toast.error(
        `Failed to fetch cities for ${stateName}. Please try again later.`
      );
    }
  };

  const fetchZonesByCity = async (cityId) => {
    try {
      const response = await axios.get(
        `https://my.ispl-t10.com/api/get_zone_base_on_city?cities_states_id=${cityId}`
      );
      const zones = response.data.zone || [];
      setZones(zones);
      if (zones.length > 0) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          zone_name: zones[0].zone_name,
        }));
      } else {
        setFormData((prevFormData) => ({
          ...prevFormData,
          zone_name: "",
        }));
      }
    } catch (error) {
      console.error(`Error fetching zones for city ID ${cityId}:`, error);
      toast.error(
        `Failed to fetch zones for city ID ${cityId}. Please try again later.`
      );
    }
  };

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
        if (!/^\d+$/.test(value)) {
          error = "Please enter only numeric characters.";
        }
        break;
      case "email":
        if (!/\S+@\S+\.\S+/.test(value)) {
          error = "Please enter a valid email address.";
        } else {
          const domainPattern = /\.[a-zA-Z]{2,}$/;
          if (!domainPattern.test(value)) {
            error = "Please enter a valid email address with a domain.";
          }
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

  const handleChange = async (e) => {
    const { name, value } = e.target;

    let sanitizedValue = value;
    if (name === "first_name" || name === "surname") {
      sanitizedValue = value.replace(/[^A-Za-z]/gi, "");
    } else if (name === "mobile_number") {
      sanitizedValue = value.replace(/[^0-9]/g, "");
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: sanitizedValue,
    }));

    validateField(name, sanitizedValue);

    if (name === "state_name") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        cities_states_id: "",
        zone_name: "",
      }));
      await fetchCitiesByState(value);
    } else if (name === "cities_states_id") {
      await fetchZonesByCity(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formValid = true;
    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      if (key !== "zone_name" && !formData[key]) {
        newErrors[key] = "This field is required.";
        formValid = false;
      }
    });

    if (formData.mobile_number.length !== 10) {
      newErrors.mobile_number = "Mobile number should be exactly 10 digits.";
      formValid = false;
    }

    if (formData.password !== formData.password_confirmation) {
      newErrors.password_confirmation = "Passwords do not match.";
      formValid = false;
    }

    if (
      !/\S+@\S+\.\S+/.test(formData.email) ||
      !/\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address with a domain.";
      formValid = false;
    }

    setErrors(newErrors);

    if (!formValid) {
      toast.error("Please correct the errors in the form.");
      return;
    }

    try {
      const response = await axios.post(
        "https://my.ispl-t10.com/api/register",
        formData
      );

      if (response.data.remark === "validation_error") {
        const serverErrors = response.data.message.error;
        if (Array.isArray(serverErrors)) {
          serverErrors.forEach((errMsg) => {
            toast.error(errMsg);
          });
        } else {
          toast.error("An unexpected error occurred.");
        }
        return;
      }

      const payRequestId = response.data.data.pay_request_id;

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

      setErrors({});

      toast.success("Registration successful!");

      const paymentRequestResponse = await axios.post(
        `https://my.ispl-t10.com/api/payment-request/${payRequestId}`
      );

      if (paymentRequestResponse.data.status === "Successful") {
        const { encrypted_data, access_code } = paymentRequestResponse.data;

        const ccAvenueForm = document.createElement("form");
        ccAvenueForm.method = "POST";
        ccAvenueForm.action =
          "https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction";

        const inputEncRequest = document.createElement("input");
        inputEncRequest.type = "hidden";
        inputEncRequest.name = "encRequest";
        inputEncRequest.value = encrypted_data;
        ccAvenueForm.appendChild(inputEncRequest);

        const inputAccessCode = document.createElement("input");
        inputAccessCode.type = "hidden";
        inputAccessCode.name = "access_code";
        inputAccessCode.value = access_code;
        ccAvenueForm.appendChild(inputAccessCode);

        document.body.appendChild(ccAvenueForm);
        ccAvenueForm.submit();

        // Monitor for payment response
        window.addEventListener("message", async (event) => {
          if (event.origin !== "https://secure.ccavenue.com") return;
          const paymentStatus = event.data.status;

          if (paymentStatus === "Successful") {
            window.location.href = "/login";
          } else {
            toast.error("Payment was unsuccessful. Please try again.");
          }
        });
      } else {
        toast.error("Payment was unsuccessful. Please try again.");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.remark === "validation_error"
      ) {
        const serverErrors = error.response.data.message.error;
        if (Array.isArray(serverErrors)) {
          serverErrors.forEach((errMsg) => {
            toast.error(errMsg);
          });
        } else {
          toast.error("An unexpected error occurred.");
        }
      } else {
        toast.error("Registration failed. Please try again.");
      }
    }
  };

  const checkQueryParams = async () => {
    const searchParams = new URLSearchParams(window.location.search);
    const status = searchParams.get("status");
    const payRequestId = searchParams.get("pay_request_id");
  
    if (
      status === "SomethingWrong" ||
      status === "PaymentFailed" ||
      status === "NoUserData"
    ) {
      toast.error("Payment was unsuccessful. Please try again.");
  
      try {
        const paymentRequestResponse = await axios.post(
          `https://my.ispl-t10.com/api/payment-request/${payRequestId}`
        );
  
        if (paymentRequestResponse.data.status === "Successful") {
          const { encrypted_data, access_code } = paymentRequestResponse.data;
  
          const ccAvenueForm = document.createElement("form");
          ccAvenueForm.method = "POST";
          ccAvenueForm.action =
            "https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction";
  
          const inputEncRequest = document.createElement("input");
          inputEncRequest.type = "hidden";
          inputEncRequest.name = "encRequest";
          inputEncRequest.value = encrypted_data;
          ccAvenueForm.appendChild(inputEncRequest);
  
          const inputAccessCode = document.createElement("input");
          inputAccessCode.type = "hidden";
          inputAccessCode.name = "access_code";
          inputAccessCode.value = access_code;
          ccAvenueForm.appendChild(inputAccessCode);
  
          document.body.appendChild(ccAvenueForm);
          ccAvenueForm.submit();
  
          // Monitor for payment response
          window.addEventListener("message", (event) => {
            if (event.origin !== "https://secure.ccavenue.com") return;
            const paymentStatus = event.data.status;
  
            if (paymentStatus === "Successful") {
              window.location.href = "/login";
            } else {
              toast.error("Payment was unsuccessful. Please try again.");
            }
          });
        } else {
          toast.error("Payment request failed. Please try again.");
        }
      } catch (error) {
        console.error("Error processing payment request:", error);
        toast.error("An error occurred while processing the payment. Please try again later.");
      }
    }
  
    if (status === "PaymentSuccessful") {
      toast.success("Payment was successful.");
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    }
  };

  return (
    <form
      className="form p-t-20"
      id="register_user_form_data"
      onSubmit={handleSubmit}
    >
      <div className="com-div-md">
        <SectionTitle titleText="Player Registration" />
        <div className="Register-form">
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
              {errors.surname && <div className="error">{errors.surname}</div>}
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-6">
              <label htmlFor="mobile_number" className="form-label">
                Mobile Number
              </label>
              <input
                required
                id="mobile_number"
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
                Date of Birth
              </label>
              <input
                required
                id="date_of_birth"
                type="date"
                className="form-control"
                name="date_of_birth"
                autoComplete="date_of_birth"
                autoFocus
                value={formData.date_of_birth}
                onChange={handleChange}
              />
              {errors.date_of_birth && (
                <div className="error">{errors.date_of_birth}</div>
              )}
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                required
                id="email"
                type="email"
                className="form-control"
                name="email"
                autoComplete="email"
                autoFocus
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="error">{errors.email}</div>}
            </div>
            <div className="col-md-6">
              <label htmlFor="state_name" className="form-label">
                State
              </label>
              <select
                required
                id="state_name"
                className="form-control"
                name="state_name"
                autoComplete="state_name"
                autoFocus
                value={formData.state_name}
                onChange={handleChange}
              >
                <option value="">Select a state</option>
                {states.map((state, index) => (
                  <option key={index} value={state.state_name}>
                    {state.state_name}
                  </option>
                ))}
              </select>
              {errors.state_name && (
                <div className="error">{errors.state_name}</div>
              )}
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-6">
              <label htmlFor="cities_states_id" className="form-label">
                City
              </label>
              <select
                required
                id="cities_states_id"
                className="form-control"
                name="cities_states_id"
                autoComplete="cities_states_id"
                autoFocus
                value={formData.cities_states_id}
                onChange={handleChange}
              >
                <option value="">Select a city</option>
                {cities.map((city, index) => (
                  <option key={index} value={city.city_id}>
                    {city.city_name}
                  </option>
                ))}
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
                id="zone_name"
                type="text"
                className="form-control"
                name="zone_name"
                value={formData.zone_name}
                disabled
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
                autoComplete="password"
                autoFocus
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <div className="error">{errors.password}</div>
              )}
            </div>
            <div className="col-md-6">
              <label htmlFor="password_confirmation" className="form-label">
                Confirm Password
              </label>
              <input
                required
                id="password_confirmation"
                type="password"
                className="form-control"
                name="password_confirmation"
                autoComplete="password_confirmation"
                autoFocus
                value={formData.password_confirmation}
                onChange={handleChange}
              />
              {errors.password_confirmation && (
                <div className="error">{errors.password_confirmation}</div>
              )}
            </div>
          </div>
          <div className="col-md-12 d-flex align-items-center justify-content-center my-5">
            <SqareButton
              classNameText="sqrBtn"
              btnName="Register & Pay Now"
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
  );
}

export default RegistrationForm;
