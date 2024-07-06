import React, { useState } from "react";
import SectionTitle from "../../components/common/sectiontitletext/SectionTitle";
import SqareButton from "../../components/common/cta/SqareButton";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ email: "", password: "", general: "" });
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError({ email: "", password: "", general: "" });

    if (!validateEmail(email)) {
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
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
        const token = response.data.data.token;
        localStorage.setItem("apiToken", token);
        localStorage.setItem("formData", JSON.stringify(response.data.data));

        toast.success("Login successful");

        const { completed_status } = response.data.data.user;
        if (completed_status === 1) {
          navigate("/dashboard-golden-page");
          window.location.reload();
        } else {
          navigate("/dashboard-session-2");
          window.location.reload();
        }

        await axios.get("https://my.ispl-t10.com/api/user-dashboard-api", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("apiToken")}`,
          },
        });
      }
    } catch (err) {
      if (
        err.response &&
        err.response.status === 400 &&
        err.response.data.pay_request_id
      ) {
        const pay_request_id = err.response.data.pay_request_id;
        try {
          const paymentRequestResponse = await axios.post(
            `https://my.ispl-t10.com/api/payment-request/${pay_request_id}`
          );

          if (paymentRequestResponse.data.status === "Successful") {
            const { encrypted_data, access_code } = paymentRequestResponse.data;

            const ccAvenueForm = document.createElement("form");
            ccAvenueForm.method = "POST";
            ccAvenueForm.action =
              "https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction";

            const inputEncRequest = document.createElement("input");
            inputEncRequest.type = "hidden";
            inputEncRequest.name = "encRequest";
            inputEncRequest.value = encrypted_data;
            ccAvenueForm.appendChild(inputEncRequest);

            const inputAccessCode = document.createElement("input");
            inputAccessCode.type = "hidden";
            inputAccessCode.name = "access_code";
            inputAccessCode.value = access_code;
            ccAvenueForm.appendChild(inputAccessCode);

            document.body.appendChild(ccAvenueForm);
            ccAvenueForm.submit();

            window.addEventListener("message", (event) => {
              if (event.origin !== "https://secure.ccavenue.com") return;
              const paymentStatus = event.data.status;

              if (paymentStatus === "Successful") {
                window.location.href = "/login";
              } else {
                toast.error("Payment was unsuccessful. Please try again.");
              }
            });
          } else {
            toast.error("Payment request failed. Please try again.");
          }
        } catch (error) {
          console.error("Error processing payment request:", error);
          toast.error(
            "An error occurred while processing the payment. Please try again later."
          );
        }
      } else {
        const errorMessage =
          err.response?.data?.error_message ||
          "Incorrect Details Please Try Again !!!";
        setError((prevError) => ({
          ...prevError,
          general: errorMessage,
        }));
        toast.error(errorMessage);
      }
    } finally {
      setLoading(false);
    }
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
                  Email Address
                </label>
                <input
                  required
                  id="email"
                  type="email"
                  className="form-control"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (!validateEmail(e.target.value)) {
                      setError((prevError) => ({
                        ...prevError,
                        email: "Please enter a valid email address",
                      }));
                    } else {
                      setError((prevError) => ({ ...prevError, email: "" }));
                    }
                  }}
                />
                {error.email && <div className="error">{error.email}</div>}
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
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-md-6 mx-auto">
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
                    <Link to="/password/reset" className="regster-bn frgtBtn">
                      forget password ?
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12 d-flex align-items-center justify-content-center my-5">
              <SqareButton
                classNameText="sqrBtn"
                btnName="Login Now"
                svgFill="#caf75a"
                textColor="#caf75a"
                bordercolor="#caf75a"
                type="submit"
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
