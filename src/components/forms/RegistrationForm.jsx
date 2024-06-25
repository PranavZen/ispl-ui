import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "../forms/registrationformstyle.css";
import "react-toastify/dist/ReactToastify.css";
import SectionTitle from "../common/sectiontitletext/SectionTitle";

function RegistrationForm() {
  const initialFormData = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    phoneNumber: "",
    address: "",
    teamName: "",
    playingRole: "",
    battingStyle: "",
    bowlingStyle: "",
    wicketkeeping: "",
    photo: null,
    socialLinks: [""],
    idCard: null,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    // Validation for First Name and Last Name (only alphabets allowed)
    if (name === "firstName" || name === "lastName") {
      if (/[^a-zA-Z]/.test(value)) {
        setErrors({
          ...errors,
          [name]: `${
            name.charAt(0).toUpperCase() + name.slice(1)
          } should only contain alphabets`,
        });
      } else {
        setErrors({
          ...errors,
          [name]: undefined,
        });
      }
    }

    // Validation for Phone Number (only numeric values allowed)
    if (name === "phoneNumber") {
      if (/[^0-9]/.test(value)) {
        setErrors({
          ...errors,
          [name]: "Phone Number should only contain numbers",
        });
      } else {
        setErrors({
          ...errors,
          [name]: undefined,
        });
      }
    }

    // Update formData state
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSocialLinkChange = (index, value) => {
    const newLinks = [...formData.socialLinks];
    newLinks[index] = value;
    setFormData({ ...formData, socialLinks: newLinks });
  };

  const addSocialLink = () => {
    setFormData({ ...formData, socialLinks: [...formData.socialLinks, ""] });
  };

  const removeSocialLink = (index) => {
    const newLinks = formData.socialLinks.filter((_, i) => i !== index);
    setFormData({ ...formData, socialLinks: newLinks });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName) {
      newErrors.firstName = "First Name is required";
    } else if (/[^a-zA-Z]/.test(formData.firstName)) {
      newErrors.firstName = "First Name should only contain alphabets";
    }

    if (!formData.lastName) {
      newErrors.lastName = "Last Name is required";
    } else if (/[^a-zA-Z]/.test(formData.lastName)) {
      newErrors.lastName = "Last Name should only contain alphabets";
    }

    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = "Date of Birth is required";
    }

    if (
      !formData.email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)
    ) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone Number is required";
    } else if (/[^0-9]/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone Number should only contain numbers";
    } else if (formData.phoneNumber.length !== 10) {
      newErrors.phoneNumber = "Phone Number must be exactly 10 digits";
    }

    if (!formData.address) {
      newErrors.address = "Address is required";
    }

    if (!formData.teamName) {
      newErrors.teamName = "Team Name is required";
    }

    if (!formData.playingRole) {
      newErrors.playingRole = "Playing Role is required";
    }

    if (!formData.battingStyle) {
      newErrors.battingStyle = "Batting Style is required";
    }

    if (!formData.bowlingStyle) {
      newErrors.bowlingStyle = "Bowling Style is required";
    }

    if (!formData.wicketkeeping) {
      newErrors.wicketkeeping = "Wicketkeeping is required";
    }

    if (
      !formData.photo ||
      (formData.photo.type !== "image/jpeg" &&
        formData.photo.type !== "image/png")
    ) {
      newErrors.photo = "Photo must be .jpg or .png";
    }

    if (
      !formData.idCard ||
      (formData.idCard.type !== "application/pdf" &&
        formData.idCard.type !== "image/jpeg" &&
        formData.idCard.type !== "image/png")
    ) {
      newErrors.idCard = "ID Card must be .pdf, .jpg, or .png";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Data:", formData);
      // Reset form data to initial state
      setFormData(initialFormData);
      // Show success toast
      toast.success("Registration Successful!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // Reset form data to initial state
      setFormData(initialFormData);
      // Reset errors state
      setErrors({});

      // Clear file inputs for Photo and ID Card
      document.getElementById("photoInput").value = "";
      document.getElementById("idCardInput").value = "";
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="container-fluid">
      <SectionTitle titleText="" />
        <form onSubmit={handleSubmit} className="form">
          <div className="row">
            <div className="col-lg-6 col-12 mb-3">
              <label className="form-label">First Name</label>
              <input
                className="form-control"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <p>{errors.firstName}</p>}
            </div>

            <div className="col-lg-6 col-12 mb-3">
              <label className="form-label">Last Name</label>
              <input
                className="form-control"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <p>{errors.lastName}</p>}
            </div>

            <div className="col-lg-6 col-12 mb-3">
              <label className="form-label">Date of Birth</label>
              <input
                className="form-control"
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
              />
              {errors.dateOfBirth && <p>{errors.dateOfBirth}</p>}
            </div>

            <div className="col-lg-6 col-12 mb-3">
              <label className="form-label">Email</label>
              <input
                className="form-control"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p>{errors.email}</p>}
            </div>

            <div className="col-lg-6 col-12 mb-3">
              <label className="form-label">Phone Number</label>
              <input
                className="form-control"
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
            </div>

            <div className="col-lg-6 col-12 mb-3">
              <label className="form-label">Address</label>
              <textarea
                className="form-control"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
              {errors.address && <p>{errors.address}</p>}
            </div>

            <div className="col-lg-6 col-12 mb-3">
              <label className="form-label">Team Name</label>
              <input
                className="form-control"
                name="teamName"
                value={formData.teamName}
                onChange={handleChange}
              />
              {errors.teamName && <p>{errors.teamName}</p>}
            </div>

            <div className="col-lg-6 col-12 mb-3">
              <label className="form-label">Playing Role</label>
              <select
                className="form-select"
                name="playingRole"
                value={formData.playingRole}
                onChange={handleChange}
              >
                <option value="">Select...</option>
                <option value="Batsman">Batsman</option>
                <option value="Bowler">Bowler</option>
                <option value="All-rounder">All-rounder</option>
                <option value="Wicket-keeper">Wicket-keeper</option>
              </select>
              {errors.playingRole && <p>{errors.playingRole}</p>}
            </div>

            <div className="col-lg-6 col-12 mb-3">
              <label className="form-label">Batting Style</label>
              <select
                className="form-select"
                name="battingStyle"
                value={formData.battingStyle}
                onChange={handleChange}
              >
                <option value="">Select...</option>
                <option value="Right-hand">Right-hand</option>
                <option value="Left-hand">Left-hand</option>
              </select>
              {errors.battingStyle && <p>{errors.battingStyle}</p>}
            </div>

            <div className="col-lg-6 col-12 mb-3">
              <label className="form-label">Bowling Style</label>
              <select
                className="form-select"
                name="bowlingStyle"
                value={formData.bowlingStyle}
                onChange={handleChange}
              >
                <option value="">Select...</option>
                <option value="Right-arm Fast">Right-arm Fast</option>
                <option value="Right-arm Medium">Right-arm Medium</option>
                <option value="Left-arm Fast">Left-arm Fast</option>
                <option value="Left-arm Medium">Left-arm Medium</option>
                <option value="Right-arm Spin">Right-arm Spin</option>
                <option value="Left-arm Spin">Left-arm Spin</option>
              </select>
              {errors.bowlingStyle && <p>{errors.bowlingStyle}</p>}
            </div>

            <div className="col-lg-6 col-12 mb-3">
              <label className="form-label">Wicketkeeping</label>
              <div className="col-lg-6 col-12 mb-3">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="wicketkeeping"
                    value="Yes"
                    checked={formData.wicketkeeping === "Yes"}
                    onChange={handleChange}
                  />
                  Yes
                </label>
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="wicketkeeping"
                    value="No"
                    checked={formData.wicketkeeping === "No"}
                    onChange={handleChange}
                  />
                  No
                </label>
              </div>
              {errors.wicketkeeping && <p>{errors.wicketkeeping}</p>}
            </div>

            <div className="col-lg-6 col-12 mb-3">
              <label className="form-label">Photo</label>
              <input
                className="form-control"
                type="file"
                name="photo"
                accept=".jpg, .png"
                onChange={handleChange}
                id="photoInput"
              />
              {errors.photo && <p>{errors.photo}</p>}
            </div>

            <div className="col-lg-6 col-12 mb-3">
              <label className="form-label">Social Links</label>
              {formData.socialLinks.map((link, index) => (
                <div key={index}>
                  <input
                    className="form-control"
                    type="url"
                    value={link}
                    onChange={(e) =>
                      handleSocialLinkChange(index, e.target.value)
                    }
                  />
                  <button type="button" onClick={() => removeSocialLink(index)}>
                    Remove
                  </button>
                </div>
              ))}
              <button type="button" onClick={addSocialLink}>
                Add Link
              </button>
            </div>

            <div className="col-lg-6 col-12 mb-3">
              <label className="form-label">ID Card</label>
              <input
                className="form-control"
                type="file"
                name="idCard"
                accept=".pdf, .jpg, .png"
                onChange={handleChange}
                id="idCardInput"
              />
              {errors.idCard && <p>{errors.idCard}</p>}
            </div>

            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default RegistrationForm;
