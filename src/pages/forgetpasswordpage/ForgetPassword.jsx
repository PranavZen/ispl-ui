import React, { useState, useEffect } from "react";
import "../registration/registration.css";
import SectionTitle from "../../components/common/sectiontitletext/SectionTitle";
import SqareButton from "../../components/common/cta/SqareButton";
import { toast, ToastContainer } from "react-toastify"; // Import react-toastify for notifications
import "react-toastify/dist/ReactToastify.css"; // Import default styles for react-toastify
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setpassword_confirmation] = useState("");
  const [otpTimer, setOtpTimer] = useState(120); // Initial OTP expiry time in seconds
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [canResend, setCanResend] = useState(false); // To track OTP resend availability
  const navigate = useNavigate();

  // Function to handle OTP resend 
  const handleResendOTP = async () => {
    try {
      if (!email.trim()) {
        toast.error("Email or Mobile Number is required");
        return;
      }

      const response = await axios.post(
        "https://my.ispl-t10.com/api/reset-password-send-otp",
        { email }
      );
      if (response.data.success) {
        setOtpSent(true);
        setOtpVerified(false);
        setOtpTimer(120); // Reset timer to 120 seconds
        setCanResend(false); // Disable resend until timer expires
        toast.success(response.data.message);
      } else {
        toast.error("Failed to send OTP");
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Failed to send OTP";
      toast.error(`Error: ${errorMessage}`);
    }
  };

  // Function to handle OTP verification
  const handleVerifyOTP = async (e) => {
    // e.preventDefault();
    // alert("click Button");
    try {
      const verifyResponse = await axios.post(
        "https://my.ispl-t10.com/api/user-reset-password-otp",
        { email, otp }
      );
      // alert("click Button verifyResponse", verifyResponse);
      if (verifyResponse.data.status) {
        // alert("click Button verifyResponse", verifyResponse.data.status);
        toast.success(verifyResponse.data.message);
        setOtpVerified(true);
      } else {
        toast.error(`OTP verification failed: ${verifyResponse.data.message}`);
      }
    } catch (error) {
      toast.error("Error verifying OTP");
    }
  };

  // Function to handle password reset
  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const resetResponse = await axios.post(
        "https://my.ispl-t10.com/api/reset-password",
        { email, password, password_confirmation }
      );
      if (resetResponse.data.status === "success") {
        toast.success("Password reset successful");
        navigate("/login");
      } else {
        const errorMessage = resetResponse.data.errors?.password[0] || resetResponse.data.message;
        toast.error(`Password reset failed: ${errorMessage}`);
      }
    } catch (error) {
      toast.error("Error resetting password");
    }
  };

  // Function to start OTP countdown timer
  useEffect(() => {
    let interval;
    if (otpSent && otpTimer > 0) {
      interval = setInterval(() => {
        setOtpTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (otpTimer === 0) {
      setOtpSent(false); // Reset OTP sent status after expiry
      setCanResend(true); // Allow resend after timer expires
      clearInterval(interval); // Clear interval when timer expires
    }
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [otpSent, otpTimer]);

  return (
    <section id="registrationFormSection">
      <Helmet>
        {/* SEO Meta tags */}
      </Helmet>
      <ToastContainer />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 mx-auto">
            <form className="form p-t-20" onSubmit={otpVerified ? handleResetPassword : handleVerifyOTP}>
              <div className="com-div-md">
                <SectionTitle titleText="Reset Password" />
                <div className="login-modal-pn">
                  <div className="row mb-4">
                    <div className="col-md-6 mx-auto">
                      <label htmlFor="email" className="form-label">
                        Email Address or Mobile Number
                      </label>
                      <input
                        required
                        id="email"
                        type="text"
                        className="form-control"
                        name="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  {!otpSent && (
                    <div className="row mb-4">
                      <div className="col-md-6 mx-auto">
                        <div className="form-check justify-content-end">
                          <p className="btmText mt-0">
                            <button
                              type="button"
                              className="regster-bn frgtBtn"
                              onClick={handleResendOTP}
                            >
                              Send OTP
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {otpSent && !otpVerified && (
                    <div className="row mb-4">
                      <div className="col-md-6 mx-auto">
                        <label htmlFor="otp" className="form-label">
                          OTP
                        </label>
                        <input
                          required
                          id="otp"
                          type="text"
                          className="form-control"
                          name="otp"
                          autoComplete="off"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                        />
                        <div className="form-check justify-content-end">
                          <p className="btmText mt-2">
                            OTP expires in : {otpTimer} seconds
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {otpSent && otpVerified && (
                    <>
                      <div className="row mb-4">
                        <div className="col-md-6 mx-auto">
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="row mb-4">
                        <div className="col-md-6 mx-auto">
                          <label
                            htmlFor="password_confirmation"
                            className="form-label"
                          >
                            Confirm Password
                          </label>
                          <input
                            required
                            id="password_confirmation"
                            type="password"
                            className="form-control"
                            name="password_confirmation"
                            autoComplete="confirm-password"
                            value={password_confirmation}
                            onChange={(e) => setpassword_confirmation(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-md-12 d-flex align-items-center justify-content-center my-5">
                        <SqareButton
                          classNameText="sqrBtn"
                          btnName="Reset Password"
                          svgFill="#fbe29a"
                          textColor="#fbe29a"
                          bordercolor="#fbe29a"
                          type="submit"
                          onClick={handleResetPassword}
                        />
                      </div>
                    </>
                  )}

                  {otpSent && !otpVerified && (
                    <div className="col-md-12 d-flex align-items-center justify-content-center my-5">
                      <SqareButton
                        classNameText="sqrBtn"
                        btnName="Verify OTP"
                        svgFill="#fbe29a"
                        textColor="#fbe29a"
                        bordercolor="#fbe29a"
                        type="submit"
                        onClick={handleVerifyOTP}
                      />
                    </div>
                  )}

                  {canResend && (
                    <div className="row mb-4">
                      <div className="col-md-6 mx-auto">
                        <button
                          type="button"
                          className="regster-bn frgtBtn"
                          onClick={handleResendOTP}
                        >
                          Resend OTP
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ForgetPassword;
