import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import SectionTitle from "../../../components/common/sectiontitletext/SectionTitle";
import SqareButton from "../../../components/common/cta/SqareButton";

function RegistrationFormDashboard() {
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
    playing_roles: "",
    batting_andedness: "",
    bowling_andedness: "",
    preferred_batting_order: "",
  });

  const [errors, setErrors] = useState({});
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [zones, setZones] = useState([]);

  useEffect(() => {
    fetchStates();
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        "https://ispl-t10.com/api/user-dashboard-api",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("apiToken")}`,
          },
        }
      );

      const { user_data, user_payment, all_cities_states } = response.data;

      const selectedCity = all_cities_states.find(
        (city) => city.city_name === user_payment.cities_states_id[0]
      );

      // Populate form fields with the fetched user data
      setFormData({
        first_name: user_data.first_name || "",
        surname: user_data.surname || "",
        mobile_number: user_data.mobile_number || "",
        date_of_birth: user_data.date_of_birth || "",
        email: user_data.email || "",
        state_name: selectedCity ? selectedCity.state_name : "",
        cities_states_id: selectedCity ? selectedCity.id : "",
        zone_name: selectedCity ? selectedCity.zone_name : "",
        password: "",
        password_confirmation: "",
      });

      if (selectedCity) {
        fetchCitiesByState(selectedCity.state_name);
        fetchZonesByCity(selectedCity.id);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      toast.error("Failed to fetch user data. Please try again later.");
    }
  };

  const fetchStates = async () => {
    try {
      const response = await axios.get("https://ispl-t10.com/api/state");
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
        `https://ispl-t10.com/api/get_city_base_on_state?state_name=${stateName}`
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
        `https://ispl-t10.com/api/get_zone_base_on_city?cities_states_id=${cityId}`
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
        "https://ispl-t10.com/api/register",
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

  return (
    <form
      className="form p-t-20 payments-qrl"
      id="user_data_form"
      method="POST"
      onSubmit={handleSubmit}
    >
      <div className="row mt-3 mb-3 noPad">
        <SectionTitle titleText="PERSONAL INFORMATION" />
      </div>
      <div className="row">
        <div className="form-group col-md-6 mb-4">
          <label htmlFor="first_name" className="form-label text-light">
            First Name *
          </label>
          <input
            id="first_name"
            type="text"
            className={`form-control form-input ${
              errors.first_name ? "is-invalid" : ""
            }`}
            name="first_name"
            placeholder="First Name"
            value={formData.first_name}
            onChange={handleChange}
          />
          {errors.first_name && (
            <div className="error">{errors.first_name}</div>
          )}
        </div>
        <div className="form-group col-md-6 mb-4">
          <label htmlFor="middle_name" className="form-label text-light">
            Middle Name
          </label>
          <input
            id="middle_name"
            type="text"
            className={`form-control form-input ${
              errors.middle_name ? "is-invalid" : ""
            }`}
            name="middle_name"
            placeholder="First Name"
            value={formData.middle_name}
            onChange={handleChange}
          />
          {errors.middle_name && (
            <div className="error">{errors.middle_name}</div>
          )}
        </div>
        <div className="form-group col-md-6 mb-4">
          <label htmlFor="surname" className="form-label text-light">
            Surname *
          </label>
          <input
            id="surname"
            type="text"
            className={`form-control form-input ${
              errors.surname ? "is-invalid" : ""
            }`}
            name="surname"
            placeholder="Surname"
            value={formData.surname}
            onChange={handleChange}
          />
          {errors.surname && <div className="error">{errors.surname}</div>}
        </div>
        <div className="form-group col-md-6 mb-4">
          <label htmlFor="date_of_birth" className="form-label text-light">
            Date of Birth *
          </label>
          <input
            id="date_of_birth"
            type="date"
            className={`form-control form-input ${
              errors.date_of_birth ? "is-invalid" : ""
            }`}
            name="date_of_birth"
            value={formData.date_of_birth}
            onChange={handleChange}
          />
          {errors.date_of_birth && (
            <div className="error">{errors.date_of_birth}</div>
          )}
        </div>
        <div className="form-group col-md-6 mb-4">
          <label htmlFor="permanent_address" className="form-label text-light">
            Permanent Address *
          </label>
          <textarea
            id="permanent_address"
            type="text"
            className={`form-control form-input ${
              errors.permanent_address ? "is-invalid" : ""
            }`}
            name="permanent_address"
            placeholder=""
            value={formData.permanent_address}
            onChange={handleChange}
          />
          {errors.permanent_address && (
            <div className="error">{errors.permanent_address}</div>
          )}
        </div>
        <div className="form-group col-md-6 mb-4">
          <label htmlFor="current_address" className="form-label text-light">
            Current Address *
          </label>
          <textarea
            id="current_address"
            type="text"
            className={`form-control form-input ${
              errors.current_address ? "is-invalid" : ""
            }`}
            name="current_address"
            placeholder=""
            value={formData.current_address}
            onChange={handleChange}
          />
          {errors.current_address && (
            <div className="error">{errors.current_address}</div>
          )}
        </div>
      </div>
      <div className="row mt-3 mb-3">
        <SectionTitle titleText="CONTACT INFORMATION" />
      </div>
      <div className="row">
        <div className="col-md-6 mb-4">
          <label htmlFor="adhar_card_no" className="form-label text-light">
            Aadhar Card Number *
          </label>
          <input
            autoFocus
            id="adhar_card_no"
            required
            type="text"
            className="form-control"
            name="adhar_card_no"
            maxLength="12"
          />
        </div>

        <div className="form-group col-md-6 mb-4">
          <label htmlFor="mobile_number" className="form-label text-light">
            Mobile Number *
          </label>
          <input
            id="mobile_number"
            type="text"
            className={`form-control form-input ${
              errors.mobile_number ? "is-invalid" : ""
            }`}
            name="mobile_number"
            placeholder="Mobile Number"
            value={formData.mobile_number}
            onChange={handleChange}
          />
          {errors.mobile_number && (
            <div className="error">{errors.mobile_number}</div>
          )}
        </div>

        <div className="col-md-6 mb-4">
          <label
            htmlFor="emergency_contact_no"
            className="form-label text-light"
          >
            Alternate mobile number
          </label>
          <input
            autoFocus
            required
            type="text"
            className="form-control"
            name="emergency_contact_no"
            maxLength="10"
          />
        </div>
        <div className="form-group col-md-6 mb-4">
          <label htmlFor="email" className="form-label text-light">
            Email *
          </label>
          <input
            id="email"
            type="email"
            className={`form-control form-input ${
              errors.email ? "is-invalid" : ""
            }`}
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>

        <div className="col-md-6 mb-4">
          <label htmlFor="instagram_id" className="form-label text-light">
            Instagram Id
          </label>
          <input
            autoFocus
            id="instagram_id"
            type="text"
            className="form-control"
            name="instagram_id"
          />
        </div>

        <div className="col-md-6 mb-4">
          <label htmlFor="facebook_id" className="form-label text-light">
            Facebook Id
          </label>
          <input
            autoFocus
            id="facebook_id"
            type="text"
            className="form-control"
            name="facebook_id"
          />
        </div>
      </div>
      <div className="row mt-3 mb-3">
        <SectionTitle titleText="PLAYING DETAILS" />
      </div>
      <div className="row mb-3">
        <div className="col-md-6 mb-4">
          <label htmlFor="playing_roles" className="form-label text-light">
            Playing Roles *
          </label>
          <select
            required
            name="playing_roles"
            className="form-select"
            aria-label="Default select example"
          >
            <option>Select Playing Roles</option>
            <option value="Batsman">Batsman</option>
            <option value="Bowler">Bowler</option>
            <option value="Wicketkeeper">Wicketkeeper</option>
            <option value="All Rounder">All Rounder</option>
          </select>
        </div>

        <div className="col-md-6 mb-4">
          <label htmlFor="batting_andedness" className="form-label text-light">
            Batting Handedness *
          </label>
          <select
            required
            className="form-select"
            name="batting_andedness"
            aria-label="Default select example"
          >
            <option>Select Batting Handedness</option>
            <option value="Right Handed">Right Handed</option>
            <option value="Left Handed">Left Handed</option>
          </select>
        </div>

        <div className="col-md-6 mb-4">
          <label htmlFor="bowling_andedness" className="form-label text-light">
            Preferred Bowling Style *
          </label>
          <select
            required
            className="form-select"
            name="bowling_andedness"
            aria-label="Default select example"
          >
            <option>Select Preferred Bowling Style</option>
            <option value="Right Arm Fast">Right Arm Fast</option>
            <option value="Right Arm Medium">Right Arm Medium</option>
            <option value="Left Arm Fast">Left Arm Fast</option>
            <option value="Left Arm Medium">Left Arm Medium</option>
            <option value="Right Arm Spinner">Right Arm Spinner</option>
            <option value="Left Arm Spinner">Left Arm Spinner</option>
          </select>
        </div>

        <div className="col-md-6 mb-4">
          <label htmlFor="bowling_type" className="form-label text-light">
            Preferred Batting Order *
          </label>
          <select
            required
            className="form-select"
            name="bowling_type"
            aria-label="Default select example"
          >
            <option>Select Preferred Batting Order</option>
            <option value="Middle Order">Middle Order</option>
            <option value="Top Order">Top Order</option>
          </select>
        </div>
      </div>
      <div className="row mt-3 mb-3">
        <SectionTitle titleText="Upload documents" />
      </div>
      <div className="row mb-3">
        <div className="col-md-6 mb-4">
          <label htmlFor="playing_roles" className="form-label text-light">
            Upload photo
          </label>
          <input
            autoFocus=""
            className="form-control"
            required=""
            name="doc_upload_photo"
            accept="image/*"
            type="file"
          />
        </div>

        <div className="col-md-6 mb-4">
          <label htmlFor="playing_roles" className="form-label text-light">
            Upload Adhar
          </label>
          <input
            autoFocus=""
            className="form-control"
            required=""
            name="doc_upload_adhar"
            accept="image/*"
            type="file"
          />
        </div>
      </div>
      <div className="col-md-12 d-flex align-items-center justify-content-around mt-5">
        <SqareButton
          classNameText="sqrBtn mt-3"
          btnName="Complete registration Later"
          svgFill="#caf75a"
          textColor="#caf75a"
          bordercolor="#caf75a"
          type="submit"
        />
        <SqareButton
          classNameText="sqrBtn mt-3"
          btnName="Complete registration"
          svgFill="#caf75a"
          textColor="#caf75a"
          bordercolor="#caf75a"
          type="submit"
        />
      </div>
    </form>
  );
}

export default RegistrationFormDashboard;
