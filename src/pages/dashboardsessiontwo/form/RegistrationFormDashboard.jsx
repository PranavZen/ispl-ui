import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import SectionTitle from "../../../components/common/sectiontitletext/SectionTitle";
import SqareButton from "../../../components/common/cta/SqareButton";
import { useNavigate } from "react-router-dom";

function RegistrationFormDashboard() {
  const [formData, setFormData] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    date_of_birth: "",
    permanent_address: "",
    current_address: "",
    adhar_card_no: "",
    phone_number: "",
    emergency_contact_no: "",
    email_id: "",
    instagram_id: "",
    facebook_id: "",
    playing_roles: null, // Placeholder for options fetched from API
    batting_andedness: null, // Placeholder for options fetched from API
    preferred_bowling_style: null, // Placeholder for options fetched from API
    preferred_batting_order: null, // Placeholder for options fetched from API
    personal_info_status: "", // Initialize with an appropriate default value
    playing_details_status: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [playingRolesOptions, setPlayingRolesOptions] = useState([]);
  const [battingHandednessOptions, setBattingHandednessOptions] = useState([]);
  const [bowlingStyleOptions, setBowlingStyleOptions] = useState([]);
  const [battingOrderOptions, setBattingOrderOptions] = useState([]);

  useEffect(() => {
    axios
      .get("https://my.ispl-t10.com/api/playing_roles")
      .then((response) => {
        if (Array.isArray(response.data.playing_roles)) {
          setPlayingRolesOptions(response.data.playing_roles);
        } else {
          toast.error("Invalid response format for playing roles");
        }
      })
      .catch((error) => toast.error("Error fetching playing roles"));

    axios
      .get("https://my.ispl-t10.com/api/batting_andedness")
      .then((response) => {
        if (Array.isArray(response.data.batting_andedness)) {
          setBattingHandednessOptions(response.data.batting_andedness);
        } else {
          toast.error("Invalid response format for batting handedness");
        }
      })
      .catch((error) => toast.error("Error fetching batting handedness"));

    axios
      .get("https://my.ispl-t10.com/api/preferred_bowling_style")
      .then((response) => {
        if (Array.isArray(response.data.preferred_bowling_style)) {
          setBowlingStyleOptions(response.data.preferred_bowling_style);
        } else {
          toast.error("Invalid response format for bowling styles");
        }
      })
      .catch((error) => toast.error("Error fetching bowling styles"));

    axios
      .get("https://my.ispl-t10.com/api/preferred_batting_order")
      .then((response) => {
        if (Array.isArray(response.data.preferred_batting_order)) {
          setBattingOrderOptions(response.data.preferred_batting_order);
        } else {
          toast.error("Invalid response format for batting orders");
        }
      })
      .catch((error) => toast.error("Error fetching batting orders"));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (
    e,
    completed_status,
    personal_info_status,
    playing_details_status
  ) => {
    e.preventDefault();

    // Check if all necessary options are fetched
    if (
      playingRolesOptions.length === 0 ||
      battingHandednessOptions.length === 0 ||
      bowlingStyleOptions.length === 0 ||
      battingOrderOptions.length === 0
    ) {
      toast.error("Options are not yet loaded. Please wait.");
      return;
    }

    // Validate form data before submission (example validation)
    const validationErrors = {};
    if (!formData.first_name.trim()) {
      validationErrors.first_name = "First Name is required";
    }
    // Add validations for other fields as per your requirements

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fill in all required fields.");
      return;
    }

    const token = localStorage.getItem("apiToken"); // Replace with your token retrieval logic

    // Update formData with the status
    const updatedFormData = {
      ...formData,
      completed_status: completed_status, // Assign the status passed as an argument
      personal_info_status: "created", // Example update based on form submission status
      playing_details_status: "created",
    };

    setFormData(updatedFormData); // Save status in formData state

    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json", // Adjust content type if sending JSON data
    };

    // Submit form data to form_submit API
    axios
      .post("https://my.ispl-t10.com/api/form_submit", updatedFormData, {
        headers,
      })
      .then((response) => {
        // Handle success response
        toast.success("Form submitted successfully!");
        // Optionally, reset form data
        setFormData({
          first_name: "",
          middle_name: "",
          last_name: "",
          date_of_birth: "",
          permanent_address: "",
          current_address: "",
          adhar_card_no: "",
          phone_number: "",
          emergency_contact_no: "",
          email_id: "",
          instagram_id: "",
          facebook_id: "",
          playing_roles: null,
          batting_andedness: null,
          preferred_bowling_style: null,
          preferred_batting_order: null,
          personal_info_status: "",
          playing_details_status: "",
        });
        // Reset errors
        setErrors({});
        if (
          response.data.status === 1 &&
          ((response.data.personal_info_status === "created" &&
            response.data.playing_details_status === "created") ||
            (response.data.personal_info_status === "updated" &&
              response.data.playing_details_status === "updated"))
        ) {
          navigate("/dashboard-golden-page");
        } else {
          navigate("/dashboard-session-2");
        }
      })
      .catch((error) => {
        // Handle error response
        toast.error("Error submitting form. Please try again later.");
        console.error("Form submission error:", error);
      });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
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
            placeholder="Middle Name"
            value={formData.middle_name}
            onChange={handleChange}
          />
          {errors.middle_name && (
            <div className="error">{errors.middle_name}</div>
          )}
        </div>
        <div className="form-group col-md-6 mb-4">
          <label htmlFor="last_name" className="form-label text-light">
            Last Name *
          </label>
          <input
            id="last_name"
            type="text"
            className={`form-control form-input ${
              errors.last_name ? "is-invalid" : ""
            }`}
            name="last_name"
            placeholder="Last Name"
            value={formData.last_name}
            onChange={handleChange}
          />
          {errors.last_name && <div className="error">{errors.last_name}</div>}
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
        <div className="form-group col-md-6 mb-4">
          <label htmlFor="current_address" className="form-label text-light">
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
            id="adhar_card_no"
            required
            type="text"
            className={`form-control form-input ${
              errors.adhar_card_no ? "is-invalid" : ""
            }`}
            name="adhar_card_no"
            value={formData.adhar_card_no}
            onChange={handleChange}
          />
          {errors.adhar_card_no && (
            <div className="error">{errors.adhar_card_no}</div>
          )}
        </div>

        <div className="form-group col-md-6 mb-4">
          <label htmlFor="phone_number" className="form-label text-light">
            Mobile Number *
          </label>
          <input
            id="phone_number"
            type="text"
            className={`form-control form-input ${
              errors.phone_number ? "is-invalid" : ""
            }`}
            name="phone_number"
            placeholder="Mobile Number"
            value={formData.phone_number}
            onChange={handleChange}
          />
          {errors.phone_number && (
            <div className="error">{errors.phone_number}</div>
          )}
        </div>

        <div className="col-md-6 mb-4">
          <label
            htmlFor="emergency_contact_no"
            className="form-label text-light"
          >
            Emergency Contact Number
          </label>
          <input
            id="emergency_contact_no"
            type="text"
            className={`form-control form-input ${
              errors.emergency_contact_no ? "is-invalid" : ""
            }`}
            name="emergency_contact_no"
            value={formData.emergency_contact_no}
            onChange={handleChange}
          />
          {errors.emergency_contact_no && (
            <div className="error">{errors.emergency_contact_no}</div>
          )}
        </div>
        <div className="form-group col-md-6 mb-4">
          <label htmlFor="email_id" className="form-label text-light">
            Email *
          </label>
          <input
            id="email_id"
            type="email"
            className={`form-control form-input ${
              errors.email_id ? "is-invalid" : ""
            }`}
            name="email_id"
            placeholder="Email"
            value={formData.email_id}
            onChange={handleChange}
          />
          {errors.email_id && <div className="error">{errors.email_id}</div>}
        </div>

        <div className="col-md-6 mb-4">
          <label htmlFor="instagram_id" className="form-label text-light">
            Instagram ID
          </label>
          <input
            id="instagram_id"
            type="text"
            className={`form-control form-input ${
              errors.instagram_id ? "is-invalid" : ""
            }`}
            name="instagram_id"
            value={formData.instagram_id}
            onChange={handleChange}
          />
          {errors.instagram_id && (
            <div className="error">{errors.instagram_id}</div>
          )}
        </div>

        <div className="col-md-6 mb-4">
          <label htmlFor="facebook_id" className="form-label text-light">
            Facebook ID
          </label>
          <input
            id="facebook_id"
            type="text"
            className={`form-control form-input ${
              errors.facebook_id ? "is-invalid" : ""
            }`}
            name="facebook_id"
            value={formData.facebook_id}
            onChange={handleChange}
          />
          {errors.facebook_id && (
            <div className="error">{errors.facebook_id}</div>
          )}
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
            className={`form-select form-input ${
              errors.playing_roles ? "is-invalid" : ""
            }`}
            value={formData.playing_roles}
            onChange={handleChange}
          >
            <option>Select Playing Roles</option>
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
          <label htmlFor="batting_andedness" className="form-label text-light">
            Batting Handedness *
          </label>
          <select
            required
            className={`form-select form-input ${
              errors.batting_andedness ? "is-invalid" : ""
            }`}
            name="batting_andedness"
            value={formData.batting_andedness}
            onChange={handleChange}
          >
            <option>Select Batting Handedness</option>
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
            value={formData.preferred_bowling_style}
            onChange={handleChange}
          >
            <option>Select Preferred Bowling Style</option>
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
            value={formData.preferred_batting_order}
            onChange={handleChange}
          >
            <option>Select Preferred Batting Order</option>
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
      <div className="row mt-3 mb-3">
        <SectionTitle titleText="Upload documents" />
      </div>
      <div className="row mb-3">
        <div className="col-md-6 mb-4">
          <label htmlFor="doc_upload_photo" className="form-label text-light">
            Upload Photo
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
          <label htmlFor="doc_upload_adhar" className="form-label text-light">
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
      <div className="col-md-12 d-flex align-items-center justify-content-around mt-5">
        <SqareButton
          classNameText="sqrBtn mt-3"
          btnName="Complete registration Later"
          svgFill="#caf75a"
          textColor="#caf75a"
          bordercolor="#caf75a"
          type="submit"
          onClick={(e) => handleSubmit(e, 0)}
        />
        <SqareButton
          classNameText="sqrBtn mt-3"
          btnName="Complete registration"
          svgFill="#caf75a"
          textColor="#caf75a"
          bordercolor="#caf75a"
          type="submit"
          onClick={(e) => handleSubmit(e, 1)}
        />
      </div>
    </form>
  );
}

export default RegistrationFormDashboard;
