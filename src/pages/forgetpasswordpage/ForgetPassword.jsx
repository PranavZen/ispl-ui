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
  const navigate = useNavigate();
  // Function to handle OTP resend
  const handleResendOTP = async () => {
    try {
      // Check if email is empty
      if (!email.trim()) {
        toast.error("Email or Mobile Number is required");
        return;
      }

      const response = await axios.post(
        "https://my.ispl-t10.com/api/send-otp",
        { email }
      );
      if (response.data.success) {
        setOtpSent(true);
        setOtpVerified(false); // Reset verification status
        setOtpTimer(120); // Reset timer to 120 seconds
        toast.success(response.data.message);
      } else {
        toast.error("Failed to send OTP");
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(`Error: ${error.response.data.message}`);
      } else {
        console.error("Error sending OTP:", error);
        toast.error("Failed to send OTP");
      }
    }
  };

  // Function to handle OTP verification
  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    try {
      const verifyResponse = await axios.post(
        "https://my.ispl-t10.com/api/user-reset-password-otp",
        { email, otp }
      );
      if (verifyResponse.data.status) {
        toast.success(verifyResponse.data.message);
        setOtpVerified(true);
      } else {
        toast.error(`OTP verification failed: ${verifyResponse.data.message}`);
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      toast.error("Error verifying OTP");
    }
  };

  // Function to handle password reset
  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const resetResponse = await axios.post(
        "https://my.ispl-t10.com/api/reset-password",
        { email, password, password_confirmation } // Pass password and password_confirmation
      );
      if (resetResponse.data.status === "success") {
        toast.success("Password reset successful");
        navigate("/login");
      } else {
        // Handle errors from API response
        if (resetResponse.data.errors && resetResponse.data.errors.password) {
          const errorMessage = resetResponse.data.errors.password[0];
          toast.error(`Password reset failed: ${errorMessage}`);
        } else {
          toast.error(`Password reset failed: ${resetResponse.data.message}`);
        }
      }
    } catch (error) {
      console.error("Error resetting password:", error);
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
      clearInterval(interval); // Clear interval when timer expires
    }
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [otpSent, otpTimer]);

  return (
    <section id="registrationFormSection">
        <Helmet>
        <title>ISPL T10 | Reset Password</title>
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
                      />
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
