import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import SectionTitle from "../../../components/common/sectiontitletext/SectionTitle";
import SqareButton from "../../../components/common/cta/SqareButton";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    first_name: "",
    middle_name: "",
    surname: "",
    mobile_number: "",
    date_of_birth: "",
    permanent_address: "",
    current_address: "",
    current_pincode: "",
    permanent_pincode: "",
    current_city: "",
    permanent_city: "",
    current_state: "",
    permanent_state: "",
    current_locality: "",
    permanent_locality: "",
    current_landmark: "",
    permanent_landmark: "",
    adhar_card_no: "",
    phone_number: "",
    emergency_contact_no: "",
    playing_roles: "",
    batting_andedness: "",
    preferred_bowling_style: "",
    preferred_batting_order: "",
    trouser_size: "",
    jersey_sizes: "",
    shoe_size: "",
    blood_group: "",
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
  const [playingRolesOptions, setPlayingRolesOptions] = useState([]);
  const [battingHandednessOptions, setBattingHandednessOptions] = useState([]);
  const [bowlingStyleOptions, setBowlingStyleOptions] = useState([]);
  const [battingOrderOptions, setBattingOrderOptions] = useState([]);
  const [sameAsPermanent, setSameAsPermanent] = useState(false);
  const [trouserSize, setTrouserSize] = useState([]);
  const [jerseySizes, setJerseySizes] = useState([]);
  const [shoeSize, setShoeSize] = useState([]);
  const [bloodGroup, setBloodGroup] = useState([]);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const trouserSizeResponse = await axios.get(
          "https://my.ispl-t10.com/api/trouser_size"
        );
        setTrouserSize(trouserSizeResponse.data.data.trouser_sizes || []);

        const jerseySizesResponse = await axios.get(
          "https://my.ispl-t10.com/api/jersey_sizes"
        );
        setJerseySizes(jerseySizesResponse.data.data.jersey_sizes || []);

        const shoeSizeSizesResponse = await axios.get(
          "https://my.ispl-t10.com/api/shoe_size"
        );
        setShoeSize(shoeSizeSizesResponse.data.data.shoe_size || []);

        const bloodGroupResponse = await axios.get(
          "https://my.ispl-t10.com/api/blood_group"
        );
        setBloodGroup(bloodGroupResponse.data.data.blood_group || []);

        const rolesResponse = await axios.get(
          "https://my.ispl-t10.com/api/playing_roles"
        );
        setPlayingRolesOptions(rolesResponse.data.playing_roles || []);

        const handednessResponse = await axios.get(
          "https://my.ispl-t10.com/api/batting_andedness"
        );
        setBattingHandednessOptions(
          handednessResponse.data.batting_andedness || []
        );

        const bowlingStyleResponse = await axios.get(
          "https://my.ispl-t10.com/api/preferred_bowling_style"
        );
        setBowlingStyleOptions(
          bowlingStyleResponse.data.preferred_bowling_style || []
        );

        const battingOrderResponse = await axios.get(
          "https://my.ispl-t10.com/api/preferred_batting_order"
        );
        setBattingOrderOptions(
          battingOrderResponse.data.preferred_batting_order || []
        );
      } catch (error) {
        toast.error("Error fetching options");
      }
    };
    fetchOptions();
    // fetchUserData();
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
    // console.log("cityId", cityId)
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

    // if (!formValid) {
    //   toast.error("Please correct the errors in the form.");
    //   return;
    // }

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
        middle_name: "",
        surname: "",
        mobile_number: "",
        date_of_birth: "",
        permanent_address: "",
        current_address: "",
        current_pincode: "",
        permanent_pincode: "",
        current_city: "",
        permanent_city: "",
        current_state: "",
        permanent_state: "",
        current_locality: "",
        permanent_locality: "",
        current_landmark: "",
        permanent_landmark: "",
        adhar_card_no: "",
        phone_number: "",
        emergency_contact_no: "",
        playing_roles: "",
        batting_andedness: "",
        preferred_bowling_style: "",
        preferred_batting_order: "",
        trouser_size: "",
        jersey_sizes: "",
        shoe_size: "",
        blood_group: "",
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
            toast.success("Payment Successfully");
            setTimeout(() => {
              // Clear status query param to avoid re-triggering the logic
              window.location.href = "/login?status=Successful";
            }, 2000);
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
        toast.error(
          "An error occurred while processing the payment. Please try again later."
        );
      }
    }

    if (status === "PaymentSuccessful") {
      toast.success("Payment was successful.");
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    }
  };

  const handleSameAsPermanentChange = (e) => {
    const { checked } = e.target;
    setSameAsPermanent(checked);
    localStorage.setItem("sameAsPermanent", JSON.stringify(checked));

    if (checked) {
      const updatedFormData = {
        ...formData,
        current_address: formData.permanent_address,
        current_city: formData.permanent_city,
        current_state: formData.permanent_state,
        current_pincode: formData.permanent_pincode,
        current_locality: formData.permanent_locality,
        current_landmark: formData.permanent_landmark,
      };
      setFormData(updatedFormData);
      localStorage.setItem("formData", JSON.stringify(updatedFormData));
    } else {
      const updatedFormData = {
        ...formData,
        current_address: "",
        current_city: "",
        current_state: "",
        current_pincode: "",
        current_locality: "",
        current_landmark: "",
      };
      setFormData(updatedFormData);
      localStorage.setItem("formData", JSON.stringify(updatedFormData));
    }
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const handleKeyDown = (e) => {
    if (
      !/^\d$/.test(e.key) &&
      e.key !== "Backspace" &&
      e.key !== "Delete" &&
      e.key !== "ArrowLeft" &&
      e.key !== "ArrowRight"
    ) {
      e.preventDefault();
    }
  };

  const handlePhoneKeyDown = (e) => {
    if (e.target.value.length >= 10 && e.key !== "Backspace") {
      e.preventDefault();
      toast.error("Phone number must be exactly 10 digits.");
    }
    if (
      !/^\d$/.test(e.key) &&
      e.key !== "Backspace" &&
      e.key !== "Delete" &&
      e.key !== "ArrowLeft" &&
      e.key !== "ArrowRight"
    ) {
      e.preventDefault();
    }
  };


  return (
    <form className="form p-t-20" id="register_user_form_data">
      <div className="com-div-md">
        <div className="Register-form">
          <SectionTitle titleText="Basic Details" />
          <div className="row mb-4">
            <div className="col-md-6">
              <label htmlFor="first_name" className="form-label">
                First Name *
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
            <div className="form-group col-md-6 mb-4">
              <label htmlFor="middle_name" className="form-label text-light">
                Middle Name *
              </label>
              <input
                id="middle_name"
                type="text"
                className={`form-control form-input ${
                  errors.middle_name ? "is-invalid" : ""
                }`}
                name="middle_name"
                placeholder="Middle Name"
                value={formData.middle_name}
                onChange={handleChange}
                onBlur={handleChange}
                required
              />
              {errors.middle_name && (
                <div className="error">{errors.middle_name}</div>
              )}
            </div>

            <div className="col-md-6">
              <label htmlFor="surname" className="form-label">
                Surname *
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
            <div className="col-md-6">
              <label htmlFor="mobile_number" className="form-label">
                Mobile Number *
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
          </div>
          <div className="row mb-4">
            <div className="col-md-6">
              <label htmlFor="date_of_birth" className="form-label">
                Date of Birth *
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
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Email *
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
          </div>
          <div className="row mb-4">
            <div className="col-md-6">
              <label htmlFor="state_name" className="form-label">
                State *
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
            <div className="col-md-6">
              <label htmlFor="cities_states_id" className="form-label">
                City *
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
          </div>
          <div className="row mb-4 align-items-end">
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
            <div className="col-lg-6 col-md-6 col-12">
              <div className="form-check checkBoxWrap">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="sameAsPermanent"
                  name="sameAsPermanent"
                  checked={sameAsPermanent}
                  onChange={handleSameAsPermanentChange}
                />
                <label className="form-check-label" htmlFor="sameAsPermanent">
                  Same as Permanent Address
                </label>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="form-group col-md-12 mb-4">
                <label
                  htmlFor="permanent_address"
                  className="form-label text-light"
                >
                  Permanent Address *
                </label>
                <textarea
                  id="permanent_address"
                  className={`form-control form-input ${
                    errors.permanent_address ? "is-invalid" : ""
                  }`}
                  name="permanent_address"
                  value={formData.permanent_address}
                  onChange={handleChange}
                />
                {errors.permanent_address && (
                  <div className="error">{errors.permanent_address}</div>
                )}
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="form-group col-md-12 mb-4">
                <label
                  htmlFor="current_address"
                  className="form-label text-light d-flex justify-content-between"
                >
                  Current Address *
                </label>

                <textarea
                  id="current_address"
                  className={`form-control form-input ${
                    errors.current_address ? "is-invalid" : ""
                  }`}
                  name="current_address"
                  value={formData.current_address}
                  onChange={handleChange}
                  disabled={sameAsPermanent}
                />
                {errors.current_address && (
                  <div className="error">{errors.current_address}</div>
                )}
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-6">
              <label htmlFor="password" className="form-label">
                Password *
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
                Confirm Password *
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

          <div className="mt-5">
            <SectionTitle titleText="Personal Details" />
          </div>
          <div className="row ">
            <div className="col-md-6 mb-4">
              <label htmlFor="adhar_card_no" className="form-label text-light">
                Aadhar Card Number *
              </label>
              <input
                id="adhar_card_no"
                required
                type="text"
                pattern="[0-9]{12}"
                className={`form-control form-input ${
                  errors.adhar_card_no ? "is-invalid" : ""
                }`}
                name="adhar_card_no"
                value={formData.adhar_card_no}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                onBlur={handleChange}
                maxLength="12"
              />
              {errors.adhar_card_no && (
                <div className="error">{errors.adhar_card_no}</div>
              )}
            </div>
            <div className="col-md-6 mb-4">
              <label
                htmlFor="emergency_contact_no"
                className="form-label text-light"
              >
                Emergency Contact Number *
              </label>
              <input
                id="emergency_contact_no"
                type="text"
                maxLength="10"
                pattern="\d{10}"
                className={`form-control form-input ${
                  errors.emergency_contact_no ? "is-invalid" : ""
                }`}
                name="emergency_contact_no"
                value={formData.emergency_contact_no}
                onChange={handleChange}
                onKeyDown={handlePhoneKeyDown}
              />
              {errors.emergency_contact_no && (
                <div className="error">{errors.emergency_contact_no}</div>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-4">
              <label htmlFor="playing_roles" className="form-label text-light">
                Playing Roles *
              </label>
              <select
                required
                name="playing_roles"
                className={`form-select form-input ${
                  errors.playing_roles ? "is-invalid" : ""
                }`}
                value={formData.playing_roles || ""}
                onChange={handleChange}
              >
                <option value="Playing Roles">Select Playing Roles</option>
                {playingRolesOptions.map((role, index) => (
                  <option key={index} value={role}>
                    {role}
                  </option>
                ))}
              </select>
              {errors.playing_roles && (
                <div className="error">{errors.playing_roles}</div>
              )}
            </div>
            <div className="col-md-6 mb-4">
              <label
                htmlFor="batting_andedness"
                className="form-label text-light"
              >
                Batting Handedness *
              </label>
              <select
                required
                className={`form-select form-input ${
                  errors.batting_andedness ? "is-invalid" : ""
                }`}
                name="batting_andedness"
                value={formData.batting_andedness || ""}
                onChange={handleChange}
              >
                <option value="Select Batting Handedness">
                  Select Batting Handedness
                </option>
                {battingHandednessOptions.map((handedness, index) => (
                  <option key={index} value={handedness}>
                    {handedness}
                  </option>
                ))}
              </select>
              {errors.batting_andedness && (
                <div className="error">{errors.batting_andedness}</div>
              )}
            </div>
            <div className="col-md-6 mb-4">
              <label
                htmlFor="preferred_bowling_style"
                className="form-label text-light"
              >
                Preferred Bowling Style *
              </label>
              <select
                required
                className={`form-select form-input ${
                  errors.preferred_bowling_style ? "is-invalid" : ""
                }`}
                name="preferred_bowling_style"
                value={formData.preferred_bowling_style || ""}
                onChange={handleChange}
              >
                <option value="Preferred Bowling Style">
                  Select Preferred Bowling Style
                </option>
                {bowlingStyleOptions.map((style, index) => (
                  <option key={index} value={style}>
                    {style}
                  </option>
                ))}
              </select>
              {errors.preferred_bowling_style && (
                <div className="error">{errors.preferred_bowling_style}</div>
              )}
            </div>

            <div className="col-md-6 mb-4">
              <label
                htmlFor="preferred_batting_order"
                className="form-label text-light"
              >
                Preferred Batting Order *
              </label>
              <select
                required
                className={`form-select form-input ${
                  errors.preferred_batting_order ? "is-invalid" : ""
                }`}
                name="preferred_batting_order"
                value={formData.preferred_batting_order || ""}
                onChange={handleChange}
              >
                <option value="Preferred Batting Order">
                  Select Preferred Batting Order
                </option>
                {battingOrderOptions.map((order, index) => (
                  <option key={index} value={order}>
                    {order}
                  </option>
                ))}
              </select>
              {errors.preferred_batting_order && (
                <div className="error">{errors.preferred_batting_order}</div>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 mb-4">
              <label htmlFor="trouser_size" className="form-label text-light">
                Trouser Size
              </label>
              <select
                id="trouser_size"
                name="trouser_size"
                className={`form-select form-input ${
                  errors.trouser_size ? "is-invalid" : ""
                }`}
                value={formData.trouser_size}
                onChange={handleChange}
              >
                <option value="Trouser Size">Trouser Size</option>
                {trouserSize.map((size) => (
                  <option key={size.id} value={size.id}>
                    {size.description} - {size.waist_size}
                  </option>
                ))}
              </select>
              {/* {errors.trouser_size && (
                <div className="error">{errors.trouser_size}</div>
              )} */}
            </div>
            <div className="col-md-3 mb-4">
              <label htmlFor="jersey_sizes" className="form-label text-light">
                T-Shirt Size
              </label>
              <select
                className={`form-select form-input ${
                  errors.jersey_sizes ? "is-invalid" : ""
                }`}
                name="jersey_sizes"
                id="jersey_sizes"
                value={formData.jersey_sizes}
                onChange={handleChange}
              >
                <option value="T-Shirt Size">T-Shirt Size</option>
                {jerseySizes.map((handedness, index) => (
                  <option key={index} value={handedness.id}>
                    {handedness.size_name}
                  </option>
                ))}
              </select>
              {/* {errors.jersey_sizes && (
                <div className="error">{errors.jersey_sizes}</div>
              )} */}
            </div>
            <div className="col-md-3 mb-4">
              <label htmlFor="shoe_size" className="form-label text-light">
                Shoes Size
              </label>
              <select
                className={`form-select form-input ${
                  errors.shoe_size ? "is-invalid" : ""
                }`}
                name="shoe_size"
                id="shoe_size"
                value={formData.shoe_size}
                onChange={handleChange}
              >
                <option value="Shoes Size">Shoes Size</option>
                {shoeSize.map((style, index) => (
                  <option key={index} value={style.size_number}>
                    {style.description} - {style.size_number}
                  </option>
                ))}
              </select>
              {/* {errors.shoe_size && (
                <div className="error">{errors.shoe_size}</div>
              )} */}
            </div>
            <div className="col-md-3 mb-4">
              <label htmlFor="blood_group" className="form-label text-light">
                Blood Group
              </label>
              <select
                
                className={`form-select form-input ${
                  errors.blood_group ? "is-invalid" : ""
                }`}
                name="blood_group"
                value={formData.blood_group}
                onChange={handleChange}
              >
                <option value="Blood Group">Blood Group</option>
                {bloodGroup.map((order, index) => (
                  <option key={index} value={order.blood_group}>
                    {order.blood_group}
                  </option>
                ))}
              </select>
              {/* {errors.blood_group && (
                <div className="error">{errors.blood_group}</div>
              )} */}
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <label
                htmlFor="doc_upload_photo"
                className="form-label text-light"
              >
                Upload Selfie
              </label>
              <input
                className="form-control"
                required=""
                name="doc_upload_photo"
                accept="image/*"
                type="file"
                onChange={handleFileChange}
              />
            </div>

            <div className="col-md-6 mb-4">
              <label
                htmlFor="doc_upload_adhar"
                className="form-label text-light"
              >
                Upload Aadhar
              </label>
              <input
                className="form-control"
                required=""
                name="doc_upload_adhar"
                accept="image/*"
                type="file"
                onChange={handleFileChange}
              />
            </div>
          </div>

          <div className="col-md-12 d-flex align-items-center justify-content-center my-5">
            <SqareButton
              classNameText="sqrBtn"
              btnName="Register & Pay Now"
              svgFill="#fbe29a"
              textColor="#fbe29a"
              bordercolor="#fbe29a"
              type="submit"
              onClick={handleSubmit}
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
