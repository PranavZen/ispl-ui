import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Initialize toast container
// toast.configure();

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      surname: "",
      email: "",
      phone: "",
      message: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.firstname) {
        errors.firstname = "First name is required";
      }
      if (!values.surname) {
        errors.surname = "Surname is required";
      }
      if (!values.email) {
        errors.email = "Email is required";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Invalid email address";
      }
      if (!values.phone) {
        errors.phone = "Phone number is required";
      } else if (!/^\d{10}$/.test(values.phone)) {
        errors.phone = "Phone number must be 10 digits";
      }
      if (!values.message) {
        errors.message = "Message is required";
      }
      return errors;
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post("https://my.ispl-t10.com/api/send-contact-us-mail", values);
        toast.success("Message sent successfully!");
        resetForm();
      } catch (error) {
        if (error.response && error.response.data) {
          toast.error(error.response.data.message || "Failed to send message.");
        } else {
          toast.error("An error occurred. Please try again.");
        }
      }
    },
  });

  return (
   <>
    <form id="contact_us_form" onSubmit={formik.handleSubmit}>
      <div className="row mt-4">
        <div className="col-lg-6">
          <div className="from-group">
            <input
              type="text"
              name="firstname"
              className="form-control"
              placeholder="First Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstname}
            />
            {formik.touched.firstname && formik.errors.firstname ? (
              <div className="error">{formik.errors.firstname}</div>
            ) : null}
          </div>
        </div>
        <div className="col-lg-6">
          <div className="from-group">
            <input
              type="text"
              name="surname"
              className="form-control"
              placeholder="Surname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.surname}
            />
            {formik.touched.surname && formik.errors.surname ? (
              <div className="error">{formik.errors.surname}</div>
            ) : null}
          </div>
        </div>
        <div className="col-lg-6">
          <div className="from-group">
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>
        </div>
        <div className="col-lg-6">
          <div className="from-group">
            <input
              type="tel"
              name="phone"
              className="form-control"
              placeholder="Phone"
              maxLength="10"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="error">{formik.errors.phone}</div>
            ) : null}
          </div>
        </div>
        <div className="col-lg-12">
          <div className="from-group">
            <textarea
              className="form-control"
              name="message"
              placeholder="Message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            ></textarea>
            {formik.touched.message && formik.errors.message ? (
              <div className="error">{formik.errors.message}</div>
            ) : null}
          </div>
        </div>
        <div className="col-lg-12">
          <button type="submit" className="btn continue-bn submit_btn">
            <span>Submit</span>
          </button>
        </div>
      </div>
    </form>
    <ToastContainer/>
   </>
  );
};

export default ContactForm;
