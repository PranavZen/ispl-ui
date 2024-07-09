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
    surname: "",
    date_of_birth: "",
    permanent_address: "",
    current_address: "",
    adhar_card_no: "",
    phone_number: "",
    emergency_contact_no: "",
    email: "",
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
    const fetchOptions = async () => {
      try {
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

    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "https://my.ispl-t10.com/api/user-dashboard-api",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("apiToken")}`,
            },
          }
        );

        const userData = response.data.users;

        setFormData((prevFormData) => ({
          ...prevFormData,
          first_name: userData.first_name || "",
          middle_name: userData.middle_name || "",
          surname: userData.surname || "",
          date_of_birth: userData.date_of_birth || "",
          permanent_address: userData.permanent_address || "",
          current_address: userData.current_address || "",
          adhar_card_no: userData.adhar_card_no || "",
          phone_number: userData.mobile_number || "",
          emergency_contact_no: userData.emergency_contact_no || "",
          email: userData.email || "",
          instagram_id: userData.instagram_id || "",
          facebook_id: userData.facebook_id || "",
          playing_roles:
            userData.player_details && userData.player_details.playing_roles
              ? userData.player_details.playing_roles
              : null,
          batting_andedness:
            userData.player_details && userData.player_details.batting_andedness
              ? userData.player_details.batting_andedness
              : null,
          preferred_bowling_style:
            userData.player_details &&
            userData.player_details.preferred_bowling_style
              ? userData.player_details.preferred_bowling_style
              : null,
          preferred_batting_order:
            userData.player_details &&
            userData.player_details.preferred_batting_order
              ? userData.player_details.preferred_batting_order
              : null,
          personal_info_status: userData.personal_info_status || "",
          playing_details_status: userData.playing_details_status || "",
        }));
      } catch (error) {
        toast.error("Error fetching user data");
        console.error("Fetch user data error:", error);
      }
    };

    fetchOptions();
    fetchUserData();
  }, []);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "adhar_card_no" && !/^\d{0,12}$/.test(value)) {
      setErrors({
        ...errors,
        [name]: "Aadhar Card number should be exactly 12 digits.",
      });
    } else {
      setErrors({
        ...errors,
        [name]: null,
      });
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e, completed_status) => {
    e.preventDefault();

    if (
      playingRolesOptions.length === 0 ||
      battingHandednessOptions.length === 0 ||
      bowlingStyleOptions.length === 0 ||
      battingOrderOptions.length === 0
    ) {
      toast.error("Options are not yet loaded. Please wait.");
      return;
    }

    const validationErrors = {};
    if (!formData.first_name.trim()) {
      validationErrors.first_name = "First Name is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fill in all required fields.");
      return;
    }

    const token = localStorage.getItem("apiToken");

    const updatedFormData = {
      ...formData,
      completed_status: completed_status,
      personal_info_status: "created",
      playing_details_status: "created",
    };

    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    try {
      const response = await axios.post(
        "https://my.ispl-t10.com/api/form_submit",
        updatedFormData,
        { headers }
      );

      if (response.data.status === false) {
        const serverErrors = response.data.message.reduce((acc, curr) => {
          const [field, ...message] = curr.split(" ");
          acc[field] = message.join(" ");
          return acc;
        }, {});
        setErrors(serverErrors);
        toast.error("Please fix the errors before submitting.");
        return;
      }

      if (completed_status === 0) {
        toast.info("Form is saved!");
      } else {
        toast.success("Form submitted successfully!");
        setFormData({
          first_name: "",
          middle_name: "",
          surname: "",
          date_of_birth: "",
          permanent_address: "",
          current_address: "",
          adhar_card_no: "",
          phone_number: "",
          emergency_contact_no: "",
          email: "",
          instagram_id: "",
          facebook_id: "",
          playing_roles: null,
          batting_andedness: null,
          preferred_bowling_style: null,
          preferred_batting_order: null,
          personal_info_status: "",
          playing_details_status: "",
        });
        setErrors({});
      }

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
    } catch (error) {
      toast.error("Error submitting form. Please try again later.");
      console.error("Form submission error:", error);
    }
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
      onSubmit={(e) => handleSubmit(e, 1)}
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
          <label htmlFor="surname" className="form-label text-light">
            Last Name *
          </label>
          <input
            id="surname"
            type="text"
            className={`form-control form-input ${
              errors.surname ? "is-invalid" : ""
            }`}
            name="surname"
            placeholder="Last Name"
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
            pattern="[0-9]{12}"
            className={`form-control form-input ${
              errors.adhar_card_no ? "is-invalid" : ""
            }`}
            name="adhar_card_no"
            value={formData.adhar_card_no}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
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
            pattern="[0-9]{10}"
            className={`form-control form-input ${
              errors.phone_number ? "is-invalid" : ""
            }`}
            name="phone_number"
            placeholder="Mobile Number"
            value={formData.phone_number}
            onChange={handleChange}
            onKeyDown={handlePhoneKeyDown}
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
