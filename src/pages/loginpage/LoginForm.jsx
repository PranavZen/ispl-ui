import React, { useState } from "react";
import SectionTitle from "../../components/common/sectiontitletext/SectionTitle";
import SqareButton from "../../components/common/cta/SqareButton";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginForm() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ email: "", password: "", otp: "", general: "" });
  const [showOTP, setShowOTP] = useState(false); // New state for showing OTP input
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showVerifyModal, setVerifyModal] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateMobile = (mobile) => {
    const re = /^[0-9]{10}$/;
    return re.test(String(mobile));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError({ email: "", password: "", otp: "", general: "" });

    if (!validateEmail(email) && !validateMobile(email)) {
      setLoading(false);
      setError((prevError) => ({
        ...prevError,
        email: "Please enter a valid email address or mobile number",
      }));
      return;
    }

    try {
      const response = await axios.post(
        "https://my.ispl-t10.com/api/post-login",
        { email, password }
      );

      if (response.status === 200) {
        const token = response.data.data.token;
        localStorage.setItem("apiToken", token);
        localStorage.setItem("formData", JSON.stringify(response.data.data));

        toast.success("Login successful");

        const { completed_status } = response.data.data.user;
        const form_city_edit = response.data.form_city_edit;

        let redirectPath = "/dashboard-session-2";

        if (completed_status === 1 && form_city_edit === false) {
          redirectPath = "/dashboard-golden-page";
        }

        // Check if apiToken is present in localStorage after setting it
        if (localStorage.getItem("apiToken")) {
          navigate(redirectPath);
          window.location.reload();
        } else {
          toast.error("Token not found. Please try again.");
        }

      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        // Handle 401 Unauthorized error
        toast.error("Session expired. Please login again.");
        // Clear token and redirect to login page
        localStorage.removeItem("apiToken");
        navigate("/login");
      } else if (
        err.response &&
        err.response.status === 400 &&
        err.response.data.pay_request_id
      ) {
        // Handle payment request logic
      } else {
        const errorMessage =
          err.response?.data?.error_message ||
          "Incorrect Details Please Try Again !!!";
        setError((prevError) => ({
          ...prevError,
          email: "Invalid email or password",
          password: "Invalid email or password",
        }));
        toast.error(errorMessage);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSendOTP = async (event) => {
    event.preventDefault();
    if (!validateEmail(email) && !validateMobile(email)) {
      setError((prevError) => ({
        ...prevError,
        email: "Please enter a valid email address or mobile number",
      }));
      return;
    }

    setLoading(true);
    setError({ email: "", password: "", otp: "", general: "" });

    try {
      const response = await axios.post(
        "https://my.ispl-t10.com/api/send-otp",
        { email }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setShowOTP(true); // Show OTP input
      } else {
        toast.error("Failed to send OTP. Please try again.");
      }
    } catch (err) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError({ email: "", password: "", otp: "", general: "" });
  
    try {
      const response = await axios.post(
        "https://my.ispl-t10.com/api/verify-otp",
        { otp, email }
      );
  
      if (response.data.status) {
        toast.success(response.data.message);
        
        // Store apiToken in local storage
        const token = response.data.data.token;
        localStorage.setItem("apiToken", token);
  
        // Navigate to dashboard after successful OTP verification
        // if (response.data.via_otp_city_update === true && response.data.is_city_update === 0) {
        //   navigate("/dashboard-session-2");
        // } else {
        //   navigate("/dashboard-golden-page");
        // }
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
          const is_city_updated = response.data.users.is_city_updated;
          const { completed_status, form_city_edit } = response.data;
          const is_email_verify = response.data.users.is_email_verify;
          const is_mobile_verify = response.data.users.is_mobile_verify;
  
          if (completed_status === 1 && form_city_edit === true) {
            setShowModal(true);
          }
          if (is_email_verify === 0 && is_mobile_verify === 0) {
            setVerifyModal(true);
          }
          if (
            (is_city_updated === 1 && completed_status === 1) ||
            (response.data.personal_info_status === "created" &&
              response.data.playing_details_status === "created") ||
            (response.data.personal_info_status === "updated" &&
              response.data.playing_details_status === "updated")
          ) {
            
            navigate("/dashboard-golden-page");
            window.location.reload();
          } else {
            navigate("/dashboard-session-2");
            window.location.reload();
          }
        } catch (error) {
          toast.error("Error fetching user data");
          console.error("Fetch user data error:", error);
        }
        // window.location.reload();
      } else {
        toast.error("Failed to verify OTP. Please try again.");
      }
    } catch (err) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleLoginWithPassword = (event) => {
    event.preventDefault();
    setShowOTP(false);
  };

  return (
    <>
      <form
        className="form p-t-20"
        id="register_user_form_data"
        onSubmit={handleSubmit}
      >
        <div className="com-div-md">
          <SectionTitle titleText="Login" />
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
                  onChange={(e) => {
                    setemail(e.target.value);
                    if (!validateEmail(e.target.value) && !validateMobile(e.target.value)) {
                      setError((prevError) => ({
                        ...prevError,
                        email: "Please enter a valid email address or mobile number",
                      }));
                    } else {
                      setError((prevError) => ({ ...prevError, email: "" }));
                    }
                  }}
                />
                {error.email && <div className="error">{error.email}</div>}
              </div>
            </div>
            {showOTP ? (
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
                  {error.otp && <div className="error">{error.otp}</div>}
                  <div className="form-check justify-content-end">
                    <p className="btmText mt-0">
                      <Link
                        to=""
                        className="regster-bn frgtBtn"
                        onClick={handleLoginWithPassword}
                      >
                        Login with password
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="row mb-4">
                  <div className="col-md-6 mx-auto">
                    <div className="form-check justify-content-end">
                      <p className="btmText mt-0">
                        <Link
                          to=""
                          className="regster-bn frgtBtn"
                          onClick={handleSendOTP}
                        >
                          Send OTP
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
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
                    {error.password && (
                      <div className="error">{error.password}</div>
                    )}
                    <div className="form-check">
                      <div className="d-flex align-items-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="gridCheck"
                        />
                        <label className="form-check-label" htmlFor="gridCheck">
                          Remember Me
                        </label>
                      </div>
                      <p className="btmText mt-0">
                        <Link
                          to="/password/reset"
                          className="regster-bn frgtBtn"
                        >
                          forget password ?
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}

            <div className="col-md-12 d-flex align-items-center justify-content-center my-5">
              <SqareButton
                classNameText="sqrBtn"
                btnName={showOTP ? "Verify OTP" : "Login Now"}
                svgFill="#caf75a"
                textColor="#caf75a"
                bordercolor="#caf75a"
                type="submit"
                onClick={showOTP ? handleVerifyOTP : handleSubmit}
                disabled={loading}
              />
            </div>

            <p className="btmText">
              Do not have an account? &nbsp;
              <Link to="/registration" className="regster-bn">
                Register Here
              </Link>
            </p>
          </div>
        </div>
      </form>
      <ToastContainer />
    </>
  );
}

export default LoginForm;
