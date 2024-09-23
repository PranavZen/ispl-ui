import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/common/sectiontitletext/SectionTitle";
import SqareButton from "../../components/common/cta/SqareButton";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    email: "",
    password: "",
    otp: "",
    general: "",
  });
  const [showOTP, setShowOTP] = useState(false);
  const [timer, setTimer] = useState(0);
  const [showResendButton, setShowResendButton] = useState(false);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showVerifyModal, setVerifyModal] = useState(false);

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setShowResendButton(true);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer]);

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
        email: "Please enter a valid email address",
      }));
      return;
    }

    try {
      const response = await axios.post(
        "https://my.ispl-t10.com/api/post-login",
        { email, password }
      );

      // console.log("Post Login Data", response);

      if (response.status === 200) {
        const token = response.data.data.token;
        localStorage.setItem("apiToken", token);

        toast.success("Login successful");

        const { completed_status } = response.data.data.user;
        const form_city_edit = response.data.form_city_edit;

        let redirectPath = "/dashboard-session-2";

        if (completed_status === 1 && form_city_edit === true) {
          redirectPath = "/dashboard-golden-page";
        }
        if (completed_status === 1 && form_city_edit === false) {
          redirectPath = "/dashboard-golden-page";
        }

        navigate(redirectPath);
        window.location.reload();
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        toast.error("Session expired. Please login again.");
        localStorage.removeItem("apiToken");
        navigate("/login");
      } else if (
        err.response &&
        err.response.status === 400 &&
        err.response.data.pay_request_id
      ) {
        // handlePaymentFailure(err.response.data.pay_request_id);
        alert(
          "Since you did not complete the payment and registration is now closed, we regret to inform you that you are unable to log in at this time."
        );
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
        email: "Please enter a valid email address",
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
        setShowOTP(true);
        setTimer(120);
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

      // console.log("Dashboard Data", response);

      if (response.data.status) {
        toast.success(response.data.message);

        const token = response.data.data.token;
        localStorage.setItem("apiToken", token);

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
          const is_mobile_verify = response.data.users.is_mo;

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
        navigate("/dashboard-golden-page");
        window.location.reload();
      } else {
        toast.error("Failed to verify OTP. Please try again.");
      }
    } catch (err) {
      if (
        err.response &&
        err.response.data &&
        err.response.data.message &&
        err.response.data.message.failed
      ) {
        // toast.error(err.response.data.message.failed[0]);
        // handlePaymentFailure(err.response.data.pay_request_id);
        alert(
          "Since you did not complete the payment and registration is now closed, we regret to inform you that you are unable to log in at this time."
        );
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  // const handlePaymentFailure = async (payRequestId) => {
  //   try {
  //     const paymentRequestResponse = await axios.post(
  //       `https://my.ispl-t10.com/api/payment-request/${payRequestId}`
  //     );

  //     if (paymentRequestResponse.data.status === "Successful") {
  //       const { encrypted_data, access_code } = paymentRequestResponse.data;

  //       const ccAvenueForm = document.createElement("form");
  //       ccAvenueForm.method = "POST";
  //       ccAvenueForm.action =
  //         "https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction";

  //       const inputEncRequest = document.createElement("input");
  //       inputEncRequest.type = "hidden";
  //       inputEncRequest.name = "encRequest";
  //       inputEncRequest.value = encrypted_data;
  //       ccAvenueForm.appendChild(inputEncRequest);

  //       const inputAccessCode = document.createElement("input");
  //       inputAccessCode.type = "hidden";
  //       inputAccessCode.name = "access_code";
  //       inputAccessCode.value = access_code;
  //       ccAvenueForm.appendChild(inputAccessCode);

  //       document.body.appendChild(ccAvenueForm);
  //       ccAvenueForm.submit();

  //       window.addEventListener("message", async (event) => {
  //         if (event.origin !== "https://secure.ccavenue.com") return;
  //         const paymentStatus = event.data.status;

  //         if (paymentStatus === "Successful") {
  //           window.location.href = "/login";
  //         } else {
  //           toast.error("Payment was unsuccessful. Please try again.");
  //           // window.location.href = "/payment-page";
  //         }
  //       });
  //     } else {
  //       toast.error("Payment request failed. Please try again.");
  //       // window.location.href = "/payment-page";
  //     }
  //   } catch (error) {
  //     console.error("Payment request error:", error);
  //     toast.error("An error occurred during payment. Please try again.");
  //     // window.location.href = "/payment-page";
  //   }
  // };

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
                    setEmail(e.target.value);
                    if (
                      !validateEmail(e.target.value) &&
                      !validateMobile(e.target.value)
                    ) {
                      setError((prevError) => ({
                        ...prevError,
                        email:
                          "Please enter a valid email address or mobile number",
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
                  <div className="form-check justify-content-end">
                    {timer > 0 ? (
                      <p className="btmText mt-2">
                        OTP expires in {Math.floor(timer / 60)}:
                        {(timer % 60).toString().padStart(2, "0")}
                      </p>
                    ) : (
                      showResendButton && (
                        <p className="btmText mt-2">
                          <Link
                            to=""
                            className="regster-bn frgtBtn resend-otp"
                            onClick={handleSendOTP}
                            disabled={loading}
                          >
                            {loading ? "Resending OTP..." : "Resend OTP"}
                          </Link>
                        </p>
                      )
                    )}
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
                          { loading ? "Sending OTP" : "  Login with OTP"}
                        
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
                svgFill="#fbe29a"
                textColor="#fbe29a"
                bordercolor="#fbe29a"
                type="submit"
                onClick={showOTP ? handleVerifyOTP : handleSubmit}
                disabled={loading}
              />
            </div>

            {/* <p className="btmText">
              Do not have an account? &nbsp;
              <Link to="/registration" className="regster-bn">
                Register Here
              </Link>
            </p> */}
          </div>
        </div>
      </form>
      <ToastContainer />
    </>
  );
}

export default LoginForm;
