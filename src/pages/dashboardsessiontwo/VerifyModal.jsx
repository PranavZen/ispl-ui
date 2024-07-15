import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SectionTitle from "../../components/common/sectiontitletext/SectionTitle";
import SqareButton from "../../components/common/cta/SqareButton";
import "../dashboardsessiontwo/dashboardregistration.css";
import { Link } from "react-router-dom";

function VerifyModal({ closeVerifyModal }) {
  const [useEmail, setUseEmail] = useState(false);
  const [email, setemail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState("");

  const toggleInput = () => {
    setUseEmail(!useEmail);
    setemail("");
    setError("");
    setOtp("");
    setOtpSent(false);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setemail(value);

    if (useEmail) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        setError("Please enter a valid email address.");
      } else {
        setError("");
      }
    } else {
      const numberPattern = /^[0-9]*$/;
      if (!numberPattern.test(value)) {
        setError("Please enter a valid mobile number.");
      } else {
        setError("");
      }
    }
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://my.ispl-t10.com/api/send-otp",
        {
          email,
        }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        setOtpSent(true);
      } else {
        toast.error("Failed to send OTP. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://my.ispl-t10.com/api/user-verify-otp",
        {
          email: email,
          otp,
        }
      );
      if (response.data.status) {
        toast.success(response.data.message);
        setTimeout(() => {
            closeVerifyModal();
        }, 2000);
      } else {
        toast.error("Failed to verify OTP. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div
      className="modal fade show verifyModalBox"
      id="exampleModalssss"
      tabIndex="-1"
      aria-labelledby="exampleModalLabelsss"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <SectionTitle titleText="Verify MOB or Email" />
          <form
            className="form p-t-20"
            id="state_city_zone_form"
            onSubmit={otpSent ? handleVerifyOtp : handleSendOtp}
          >
            <div className="row mb-4">
              <div className="col-md-9 mx-auto">
                <label
                  htmlFor={useEmail ? "email" : "phone_nmber"}
                  className="form-label"
                >
                  {useEmail ? "Email" : "Mobile Number"}
                </label>
                <input
                  required
                  id={useEmail ? "email" : "phone_nmber"}
                  type={useEmail ? "email" : "text"}
                  className="form-control mb-3"
                  name="email"
                  autoComplete={useEmail ? "email" : "number"}
                  value={email}
                  onChange={handleInputChange}
                  pattern={
                    useEmail
                      ? "[^@ \t\r\n]+@[^@ \t\r\n]+.[^@ \t\r\n]+"
                      : "[0-9]*"
                  }
                />
                {error && <div className="text-danger">{error}</div>}
              </div>
              {otpSent && (
                <div className="col-md-9 mx-auto">
                  <label htmlFor="otp" className="form-label">
                    OTP
                  </label>
                  <input
                    required
                    id="otp"
                    type="text"
                    className="form-control mb-3"
                    name="otp"
                    value={otp}
                    onChange={handleOtpChange}
                    pattern="[0-9]*"
                  />
                </div>
              )}
              <div className="row mb-4">
                <div className="col-md-9 mx-auto">
                  <div className="form-check justify-content-end">
                    {!otpSent && (
                      <p className="btmText mt-0">
                        <Link
                          to="#"
                          className="regster-bn frgtBtn"
                          onClick={toggleInput}
                        >
                          {useEmail ? "Send Mobile OTP" : "Send Email OTP"}
                        </Link>
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <SqareButton
                classNameText="sqrBtn"
                btnName={otpSent ? "Verify OTP" : "Send OTP"}
                svgFill="#caf75a"
                textColor="#caf75a"
                bordercolor="#caf75a"
                type="submit"
                disabled={!!error}
              />
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default VerifyModal;
