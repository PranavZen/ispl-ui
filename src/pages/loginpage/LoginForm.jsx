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
      const response = await axios.post("https://ispl-t10.com/api/post-login", {
        email,
        password,
      });

      if (response.status === 200) {
        // Handle success
        const token = response.data.data.token;
        // Store the token in localStorage
        localStorage.setItem("apiToken", token);

        toast.success("Login successful");

        const dashboard = await axios.get(
          "https://ispl-t10.com/api/user-dashboard-api",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("apiToken")}`,
            },
          }
        );

        // Redirect to user dashboard
        navigate("/dashboard-session-2");
      }
    } catch (err) {
      const errorMessage =
        err.response?.data?.error_message ||
        "Incorrect Details Please Try Again !!!";
      setError((prevError) => ({
        ...prevError,
        general: errorMessage,
      }));
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
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
      <ToastContainer />
    </form>
  );
}

export default LoginForm;
