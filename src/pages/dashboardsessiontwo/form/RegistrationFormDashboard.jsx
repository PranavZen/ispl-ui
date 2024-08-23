import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import SectionTitle from "../../../components/common/sectiontitletext/SectionTitle";
import SqareButton from "../../../components/common/cta/SqareButton";
import { useNavigate } from "react-router-dom";
import StateCityZoneModal from "../StateCityZoneModal";
import VerifyModal from "../VerifyModal";
function RegistrationFormDashboard() {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showVerifyModal, setVerifyModal] = useState(false);
  const [sameAsPermanent, setSameAsPermanent] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    middle_name: "",
    surname: "",
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
    email: "",
    instagram_id: "",
    facebook_id: "",
    playing_roles: null,
    batting_andedness: null,
    preferred_bowling_style: null,
    preferred_batting_order: null,
    personal_info_status: "",
    playing_details_status: "",
    trouser_size: "",
    jersey_sizes: "",
    shoe_size: "",
    blood_group: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [playingRolesOptions, setPlayingRolesOptions] = useState([]);
  const [battingHandednessOptions, setBattingHandednessOptions] = useState([]);
  const [bowlingStyleOptions, setBowlingStyleOptions] = useState([]);
  const [battingOrderOptions, setBattingOrderOptions] = useState([]);
  const [trouserSize, setTrouserSize] = useState([]);
  const [jerseySizes, setJerseySizes] = useState([]);
  const [shoeSize, setShoeSize] = useState([]);
  const [bloodGroup, setBloodGroup] = useState([]);

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
      const personalInfo = response.data.personal_information;
      const playerDetails = response.data.player_details;
      console.log("userData =", userData);

      const is_city_updated = response.data.users.is_city_updated;
      const { completed_status, form_city_edit } = response.data;
      const is_email_verify = response.data.users.is_email_verify;
      const is_mobile_verify = response.data.users.is_mobile_verify;
      const PlyerDiliveryDetail = response.data.dilivery_detail;
      if (completed_status === 1 && form_city_edit === true) {
        setShowModal(true);
      }
      if (is_email_verify === 0 && is_mobile_verify === 0) {
        setVerifyModal(true);
      }
      setTimeout(() => {
        if (
          (is_city_updated === 1 && completed_status === 1) ||
          (response.data.personal_info_status === "created" &&
            response.data.playing_details_status === "created") ||
          (response.data.personal_info_status === "updated" &&
            response.data.playing_details_status === "updated")
        ) {
          setLoading(true);
          navigate("/dashboard-golden-page");
          window.location.reload();
        } else if (personalInfo === null) {
          setLoading(true);
          navigate("/dashboard-session-2");
        } else if (
          userData.personal_info_status === "created" &&
          userData.playing_details_status === "created"
        ) {
          setLoading(true);
          navigate("/dashboard-golden-page");
          window.location.reload();
        } else {
          setLoading(true);
          navigate("/dashboard-session-2");
        }
      }, 10);
      setFormData((prevFormData) => ({
        ...prevFormData,
        first_name: userData?.first_name || "",
        middle_name: personalInfo?.middle_name || "",
        surname: userData?.surname || "",
        date_of_birth: userData?.date_of_birth || "",
        permanent_address: personalInfo?.permanent_address || "",
        current_address: personalInfo?.current_address || "",
        current_pincode: PlyerDiliveryDetail?.pincode || "",
        permanent_pincode: personalInfo?.permanent_pincode || "",
        current_city: PlyerDiliveryDetail?.city_district_town || "",
        permanent_city: personalInfo?.permanent_city || "",
        current_state: PlyerDiliveryDetail?.state || "",
        permanent_state: personalInfo?.permanent_state || "",
        current_locality: PlyerDiliveryDetail?.locality || "",
        permanent_locality: personalInfo?.permanent_locality || "",
        current_landmark: PlyerDiliveryDetail?.landmark || "",
        permanent_landmark: personalInfo?.permanent_landmark || "",
        adhar_card_no: personalInfo?.adhar_card_no || "",
        phone_number: userData?.mobile_number || "",
        emergency_contact_no: personalInfo?.emergency_contact_no || "",
        email: userData?.email || "",
        trouser_size: personalInfo?.trouser_jersey_id || "",
        jersey_sizes: personalInfo?.tshirt_jersey_id || "",
        shoe_size: personalInfo?.shoes_size || "",
        blood_group: personalInfo?.blood_group || "",
        instagram_id: personalInfo?.instagram_id || "",
        facebook_id: personalInfo?.facebook_id || "",
        playing_roles:
          playerDetails && playerDetails?.playing_roles
            ? playerDetails?.playing_roles
            : null,
        batting_andedness:
          playerDetails && playerDetails?.batting_andedness
            ? playerDetails?.batting_andedness
            : null,
        preferred_bowling_style:
          playerDetails && playerDetails?.preferred_bowling_style
            ? playerDetails?.preferred_bowling_style
            : null,
        preferred_batting_order:
          playerDetails && playerDetails?.preferred_batting_order
            ? playerDetails?.preferred_batting_order
            : null,
        personal_info_status: userData?.personal_info_status || "",
        playing_details_status: userData?.playing_details_status || "",
      }));
    } catch (error) {
      toast.error("Error fetching user data");
      console.error("Fetch user data error:", error);
    }
  };

  useEffect(() => {
    const savedFormData = JSON.parse(localStorage.getItem("formData"));
    const savedSameAsPermanent = JSON.parse(
      localStorage.getItem("sameAsPermanent")
    );

    if (savedFormData) {
      setFormData(savedFormData);
    }

    if (savedSameAsPermanent) {
      setSameAsPermanent(savedSameAsPermanent);
    }
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

  const handleKeyPress = (e) => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);
    localStorage.setItem("formData", JSON.stringify(updatedFormData));
    let errorMessage = null;
    if (
      name === "first_name" ||
      name === "middle_name" ||
      name === "surname" ||
      name === "permanent_state" ||
      name === "permanent_city" ||
      name === "current_state" ||
      name === "current_city"
    ) {
      const regex = /^[A-Za-z\s]*$/; // Only letters and spaces allowed
      if (!regex.test(value)) {
        // Display an error message or handle invalid input
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "Names cannot contain numbers or special characters.",
        }));
        return;
      } else {
        // Clear the error message if input is valid
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "",
        }));
      }
    }

    if (
      (name === "phone_number" || name === "emergency_contact_no") &&
      value.length > 10
    ) {
      toast.error("Phone number must be exactly 10 digits.");
      return;
    }

    // Aadhar Card validation
    if (name === "adhar_card_no") {
      const regex = /^[0-9]{0,12}$/; // Allow only up to 12 digits
      if (!regex.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          adhar_card_no: "Aadhar Card Number must be exactly 12 digits.",
        }));
        return;
      } else if (value.length === 12) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          adhar_card_no: "",
        }));
      }
    }

    // Pincode validation
    if (
      (name === "permanent_pincode" || name === "current_pincode") &&
      !/^\d{0,6}$/.test(value)
    ) {
      errorMessage = "Pincode must be a 6-digit number.";
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
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
  const handleSubmit = async (e, completed_status) => {
    e.preventDefault();
    const { adhar_card_no } = formData;
    const { emergency_contact_no } = formData;

    if (adhar_card_no.length !== 12) {
      toast.error("Aadhar Card Number must be exactly 12 digits.");
      return;
    }
    if (emergency_contact_no.length !== 10) {
      toast.error("Emergency Contact Number must be exactly 10 digits.");
      return;
    }

    setLoading(true);

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
        Object.entries(serverErrors).forEach(([field, error], index) => {
          toast.error(`Error ${index + 1}: ${error}`);
        });
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
          email: "",
          instagram_id: "",
          facebook_id: "",
          playing_roles: null,
          batting_andedness: null,
          preferred_bowling_style: null,
          preferred_batting_order: null,
          personal_info_status: "",
          playing_details_status: "",
          trouser_size: "",
          jersey_sizes: "",
          shoe_size: "",
          blood_group: "",
        });
        setErrors({});
      }
      await fetchUserData();
      if (
        completed_status === 1 &&
        ((updatedFormData.personal_info_status === "created" &&
          updatedFormData.playing_details_status === "created") ||
          (updatedFormData.personal_info_status === "updated" &&
            updatedFormData.playing_details_status === "updated"))
      ) {
        navigate("/dashboard-golden-page");
        window.location.reload();
      } else {
        navigate("/dashboard-session-2");
        window.location.reload();
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
  const closeModal = () => {
    setShowModal(false);
  };
  const closeVerifyModal = () => {
    setVerifyModal(false);
  };
  return (
    <>
      <div className="slider-banner">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="row mt-3 justify-content-center">
              <div className="col-md-10">
                <div className="card-body login-modal-pn">
                  {loading ? (
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
                          <label
                            htmlFor="first_name"
                            className="form-label text-light"
                          >
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
                            onBlur={handleChange}
                          />
                          {errors.first_name && (
                            <div className="error">{errors.first_name}</div>
                          )}
                        </div>
                        <div className="form-group col-md-6 mb-4">
                          <label
                            htmlFor="middle_name"
                            className="form-label text-light"
                          >
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
                            onBlur={handleChange}
                          />
                          {errors.middle_name && (
                            <div className="error">{errors.middle_name}</div>
                          )}
                        </div>
                        <div className="form-group col-md-6 mb-4">
                          <label
                            htmlFor="surname"
                            className="form-label text-light"
                          >
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
                            onBlur={handleChange}
                          />
                          {errors.surname && (
                            <div className="error">{errors.surname}</div>
                          )}
                        </div>
                        <div className="form-group col-md-6 mb-4">
                          <label
                            htmlFor="date_of_birth"
                            className="form-label text-light"
                          >
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
                              <div className="error">
                                {errors.permanent_address}
                              </div>
                            )}
                          </div>
                          <div className="form-group col-md-12 mb-4">
                            <label
                              htmlFor="permanent_city"
                              className="form-label text-light"
                            >
                              Permanent City
                            </label>
                            <input
                              id="permanent_city"
                              className={`form-control form-input ${
                                errors.permanent_city ? "is-invalid" : ""
                              }`}
                              name="permanent_city"
                              value={formData.permanent_city}
                              onChange={handleChange}
                              onBlur={handleChange}
                            />
                            {errors.permanent_city && (
                              <div className="error">
                                {errors.permanent_city}
                              </div>
                            )}
                          </div>
                          <div className="form-group col-md-12 mb-4">
                            <label
                              htmlFor="permanent_state"
                              className="form-label text-light"
                            >
                              Permanent State
                            </label>
                            <input
                              id="permanent_state"
                              className={`form-control form-input ${
                                errors.permanent_state ? "is-invalid" : ""
                              }`}
                              name="permanent_state"
                              value={formData.permanent_state}
                              onChange={handleChange}
                              onBlur={handleChange}
                            />
                            {errors.permanent_state && (
                              <div className="error">
                                {errors.permanent_state}
                              </div>
                            )}
                          </div>
                          <div className="form-group col-md-12 mb-4">
                            <label
                              htmlFor="permanent_pincode"
                              className="form-label text-light"
                            >
                              Permanent Pincode
                            </label>
                            <input
                              id="permanent_pincode"
                              className={`form-control form-input ${
                                errors.permanent_pincode ? "is-invalid" : ""
                              }`}
                              name="permanent_pincode"
                              value={formData.permanent_pincode}
                              onChange={handleChange}
                              onKeyPress={handleKeyPress}
                            />
                            {errors.permanent_pincode && (
                              <div className="error">
                                {errors.permanent_pincode}
                              </div>
                            )}
                          </div>
                          <div className="form-group col-md-12 mb-4">
                            <label
                              htmlFor="permanent_locality"
                              className="form-label text-light"
                            >
                              Permanent Locality
                            </label>
                            <textarea
                              id="permanent_locality"
                              className={`form-control form-input ${
                                errors.permanent_locality ? "is-invalid" : ""
                              }`}
                              name="permanent_locality"
                              value={formData.permanent_locality}
                              onChange={handleChange}
                            />
                            {errors.permanent_locality && (
                              <div className="error">
                                {errors.permanent_locality}
                              </div>
                            )}
                          </div>
                          <div className="form-group col-md-12 mb-4">
                            <label
                              htmlFor="permanent_landmark"
                              className="form-label text-light"
                            >
                              Permanent Landmark
                            </label>
                            <textarea
                              id="permanent_landmark"
                              className={`form-control form-input ${
                                errors.permanent_landmark ? "is-invalid" : ""
                              }`}
                              name="permanent_landmark"
                              value={formData.permanent_landmark}
                              onChange={handleChange}
                            />
                            {errors.permanent_landmark && (
                              <div className="error">
                                {errors.permanent_landmark}
                              </div>
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
                              <div className="form-check checkBoxWrap">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="sameAsPermanent"
                                  name="sameAsPermanent"
                                  checked={sameAsPermanent}
                                  onChange={handleSameAsPermanentChange}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="sameAsPermanent"
                                >
                                  Same as Permanent Address
                                </label>
                              </div>
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
                              <div className="error">
                                {errors.current_address}
                              </div>
                            )}
                          </div>

                          <div className="form-group col-md-12 mb-4">
                            <label
                              htmlFor="current_city"
                              className="form-label text-light d-flex justify-content-between"
                            >
                              Current City
                            </label>
                            <input
                              id="current_city"
                              className={`form-control form-input ${
                                errors.current_city ? "is-invalid" : ""
                              }`}
                              name="current_city"
                              value={formData.current_city}
                              onChange={handleChange}
                              onBlur={handleChange}
                              disabled={sameAsPermanent}
                            />
                            {errors.current_city && (
                              <div className="error">{errors.current_city}</div>
                            )}
                          </div>
                          <div className="form-group col-md-12 mb-4">
                            <label
                              htmlFor="current_state"
                              className="form-label text-light d-flex justify-content-between"
                            >
                              Current State
                            </label>
                            <input
                              id="current_state"
                              className={`form-control form-input ${
                                errors.current_state ? "is-invalid" : ""
                              }`}
                              name="current_state"
                              value={formData.current_state}
                              onChange={handleChange}
                              onBlur={handleChange}
                              disabled={sameAsPermanent}
                            />
                            {errors.current_state && (
                              <div className="error">
                                {errors.current_state}
                              </div>
                            )}
                          </div>

                          <div className="form-group col-md-12 mb-4">
                            <label
                              htmlFor="current_pincode"
                              className="form-label text-light d-flex justify-content-between"
                            >
                              Current Pincode
                            </label>
                            <input
                              id="current_pincode"
                              className={`form-control form-input ${
                                errors.current_pincode ? "is-invalid" : ""
                              }`}
                              name="current_pincode"
                              value={formData.current_pincode}
                              onChange={handleChange}
                              disabled={sameAsPermanent}
                            />
                            {errors.current_pincode && (
                              <div className="error">
                                {errors.current_pincode}
                              </div>
                            )}
                          </div>
                          <div className="form-group col-md-12 mb-4">
                            <label
                              htmlFor="current_locality"
                              className="form-label text-light d-flex justify-content-between"
                            >
                              Current Locality
                            </label>
                            <textarea
                              id="current_locality"
                              className={`form-control form-input ${
                                errors.current_locality ? "is-invalid" : ""
                              }`}
                              name="current_locality"
                              value={formData.current_locality}
                              onChange={handleChange}
                              disabled={sameAsPermanent}
                            />
                            {errors.current_locality && (
                              <div className="error">
                                {errors.current_locality}
                              </div>
                            )}
                          </div>
                          <div className="form-group col-md-12 mb-4">
                            <label
                              htmlFor="current_landmark"
                              className="form-label text-light d-flex justify-content-between"
                            >
                              Current Landmark
                            </label>
                            <textarea
                              id="current_landmark"
                              className={`form-control form-input ${
                                errors.current_landmark ? "is-invalid" : ""
                              }`}
                              name="current_landmark"
                              value={formData.current_landmark}
                              onChange={handleChange}
                              disabled={sameAsPermanent}
                            />
                            {errors.current_landmark && (
                              <div className="error">
                                {errors.current_landmark}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="row mt-3 mb-3">
                        <SectionTitle titleText="CONTACT INFORMATION" />
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <label
                            htmlFor="adhar_card_no"
                            className="form-label text-light"
                          >
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

                        <div className="form-group col-md-6 mb-4">
                          <label
                            htmlFor="phone_number"
                            className="form-label text-light"
                          >
                            Mobile Number *
                          </label>
                          <input
                            id="phone_number"
                            type="text"
                            maxLength="10"
                            pattern="\d{10}"
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
                            <div className="error">
                              {errors.emergency_contact_no}
                            </div>
                          )}
                        </div>
                        <div className="form-group col-md-6 mb-4">
                          <label
                            htmlFor="email"
                            className="form-label text-light"
                          >
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
                          {errors.email && (
                            <div className="error">{errors.email}</div>
                          )}
                        </div>

                        <div className="col-md-6 mb-4">
                          <label
                            htmlFor="instagram_id"
                            className="form-label text-light"
                          >
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
                          <label
                            htmlFor="facebook_id"
                            className="form-label text-light"
                          >
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
                          <label
                            htmlFor="playing_roles"
                            className="form-label text-light"
                          >
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
                            <option value="Playing Roles">
                              Select Playing Roles
                            </option>
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
                            value={formData.batting_andedness}
                            onChange={handleChange}
                          >
                            <option value="Select Batting Handedness">
                              Select Batting Handedness
                            </option>
                            {battingHandednessOptions.map(
                              (handedness, index) => (
                                <option key={index} value={handedness}>
                                  {handedness}
                                </option>
                              )
                            )}
                          </select>
                          {errors.batting_andedness && (
                            <div className="error">
                              {errors.batting_andedness}
                            </div>
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
                            <div className="error">
                              {errors.preferred_bowling_style}
                            </div>
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
                            <div className="error">
                              {errors.preferred_batting_order}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="row mt-3 mb-3">
                        <SectionTitle titleText="PLAYER JERSEY DETAILS" />
                      </div>

                      <div className="row mb-3">
                        <div className="col-md-3 mb-4">
                          <label
                            htmlFor="trouser_size"
                            className="form-label text-light"
                          >
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
                          {errors.trouser_size && (
                            <div className="error">{errors.trouser_size}</div>
                          )}
                        </div>
                        <div className="col-md-3 mb-4">
                          <label
                            htmlFor="jersey_sizes"
                            className="form-label text-light"
                          >
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
                          {errors.jersey_sizes && (
                            <div className="error">{errors.jersey_sizes}</div>
                          )}
                        </div>
                        <div className="col-md-3 mb-4">
                          <label
                            htmlFor="shoe_size"
                            className="form-label text-light"
                          >
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
                          {errors.shoe_size && (
                            <div className="error">{errors.shoe_size}</div>
                          )}
                        </div>
                        <div className="col-md-3 mb-4">
                          <label
                            htmlFor="blood_group"
                            className="form-label text-light"
                          >
                            Blood Group
                          </label>
                          <select
                            required
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
                          {errors.blood_group && (
                            <div className="error">{errors.blood_group}</div>
                          )}
                        </div>
                      </div>

                      <div className="row mt-3 mb-3">
                        <SectionTitle titleText="Upload documents" />
                      </div>
                      <div className="row mb-3">
                        <div className="col-md-6 mb-4">
                          <label
                            htmlFor="doc_upload_photo"
                            className="form-label text-light"
                          >
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
                      <div className="col-md-12 d-flex align-items-center justify-content-around mt-5 mobileBtn">
                        <SqareButton
                          classNameText="sqrBtn mt-3"
                          btnName="Complete registration Later"
                          svgFill="#fbe29a"
                          textColor="#fbe29a"
                          bordercolor="#fbe29a"
                          type="submit"
                          onClick={(e) => handleSubmit(e, 0)}
                        />
                        <SqareButton
                          classNameText="sqrBtn mt-3"
                          btnName="Complete registration"
                          svgFill="#fbe29a"
                          textColor="#fbe29a"
                          bordercolor="#fbe29a"
                          type="submit"
                          onClick={(e) => handleSubmit(e, 1)}
                        />
                      </div>
                    </form>
                  ) : (
                    <div className="h-100 w-100 d-flex justify-content-center align-items-center">
                      <h1 className="loading">Loading</h1>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <StateCityZoneModal isOpen={showModal} closeModal={closeModal} />
      )}
      {showVerifyModal && (
        <VerifyModal
          isOpen={showVerifyModal}
          closeVerifyModal={closeVerifyModal}
        />
      )}
    </>
  );
}

export default RegistrationFormDashboard;
