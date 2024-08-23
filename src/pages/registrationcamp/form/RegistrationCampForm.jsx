import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SectionTitle from "../../../components/common/sectiontitletext/SectionTitle";
import SqareButton from "../../../components/common/cta/SqareButton";

const RegistrationCampForm = () => {
  // State to manage the thank you message
  const [showThankYou, setShowThankYou] = useState(false);

  // Validation schema using Yup
  const validationSchema = Yup.object({
    full_name: Yup.string().required("Full Name is required"),
    contact_no: Yup.string()
      .required("Contact No. is required")
      .matches(/^\d+$/, "Contact No. must be a number"),
    alt_contact_no: Yup.string().matches(
      /^\d+$/,
      "Alternate No. must be a number"
    ),
    city: Yup.string().required("City is required"),
    pincode: Yup.string()
      .required("Pincode is required")
      .matches(/^\d+$/, "Pincode must be a number"),
    comment: Yup.string(),
  });

  // Initial form values
  const initialValues = {
    full_name: "",
    contact_no: "",
    alt_contact_no: "",
    city: "",
    pincode: "",
    comment: "",
  };

  // Form submission handler
  const onSubmit = (values, { setSubmitting, resetForm }) => {
    axios
      .post("https://my.ispl-t10.com/api/send-inquiry-mail", values)
      .then((response) => {
        if (response.data.success) {
          toast.success(response.data.message);
          resetForm();
          setShowThankYou(true); // Show thank you message
        } else {
          toast.error("Something went wrong. Please try again.");
        }
      })
      .catch((error) => {
        toast.error(
          error.response?.data?.message ||
            "Something went wrong. Please try again."
        );
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="form p-t-20">
            <div className="com-div-md">
              <SectionTitle titleText="Registration Camp" />
              <div className="Register-form">
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label htmlFor="full_name" className="form-label">
                      Full Name *
                    </label>
                    <Field
                      id="full_name"
                      name="full_name"
                      type="text"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="full_name"
                      component="div"
                      className="error"
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label htmlFor="contact_no" className="form-label">
                      Contact No. *
                    </label>
                    <Field
                      id="contact_no"
                      name="contact_no"
                      type="text"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="contact_no"
                      component="div"
                      className="error"
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label htmlFor="alt_contact_no" className="form-label">
                      Alternate No.
                    </label>
                    <Field
                      id="alt_contact_no"
                      name="alt_contact_no"
                      type="text"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="alt_contact_no"
                      component="div"
                      className="error"
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label htmlFor="city" className="form-label">
                      City *
                    </label>
                    <Field
                      id="city"
                      name="city"
                      type="text"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="city"
                      component="div"
                      className="error"
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label htmlFor="pincode" className="form-label">
                      Pincode *
                    </label>
                    <Field
                      id="pincode"
                      name="pincode"
                      type="text"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="pincode"
                      component="div"
                      className="error"
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label htmlFor="comment" className="form-label">
                      Comment
                    </label>
                    <Field
                      id="comment"
                      name="comment"
                      as="textarea"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="comment"
                      component="div"
                      className="error"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-12 d-flex align-items-center justify-content-center my-5">
                <SqareButton
                  classNameText="sqrBtn"
                  btnName="Submit"
                  svgFill="#fbe29a"
                  textColor="#fbe29a"
                  bordercolor="#fbe29a"
                  type="submit"
                  disabled={isSubmitting}
                />
              </div>
              {/* Conditionally render the thank you message */}
              {showThankYou && (
                <div className="thank-you-message">
                  <p>Thank you for your submission! We will get back to you soon.</p>
                </div>
              )}
            </div>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </>
  );
};

export default RegistrationCampForm;
