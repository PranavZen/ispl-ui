import React, { useState, useEffect } from "react";
import SqareButton from "../../components/common/cta/SqareButton";
import { toast, ToastContainer } from "react-toastify";

function TimeSlot() {
  const [showModal, setShowModal] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [currentSection, setCurrentSection] = useState(1);
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [timeSlots, setTimeSlots] = useState({});
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedBatch, setSelectedBatch] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [timer, setTimer] = useState(0);
  const [mobileOtp, setMobileOtp] = useState("");
  const [emailOtp, setEmailOtp] = useState("");
  const [cityId, setCityId] = useState("");
  const [savedTimeSlot, setSavedTimeSlot] = useState("");
  const [savedTimeSlotUser, setSavedTimeSlotUser] = useState("");
  const [checkSlot, setCheckSlot] = useState("");
  console.log("checkSlot", checkSlot);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleConfirm = async () => {
    if (isChecked) {
      try {
        const apiToken = localStorage.getItem("apiToken");
        if (!apiToken) {
          throw new Error("API token is missing");
        }

        const response = await fetch(
          "https://my.ispl-t10.com/api/check-disclaimer-slots",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${apiToken}`,
            },
            body: JSON.stringify({ is_check_disclaimer_slot: 1 }),
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            `Failed to update disclaimer slot: ${
              errorData.message || "Unknown error"
            }`
          );
        }
        setIsConfirmed(true);
        setCurrentSection(2);
      } catch (error) {
        console.error("Error:", error.message);
      }
    }
  };

  const handleSubmit = () => {
    setCurrentSection(3);
  };

  const handleConfirmationYes = async () => {
    try {
      const apiToken = localStorage.getItem("apiToken");
      if (!apiToken) {
        throw new Error("API token is missing");
      }

      if (!email || !mobileNumber) {
        throw new Error("Email or mobile number is missing");
      }

      const otpResponse = await fetch(
        "https://my.ispl-t10.com/api/timeslot_send_otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiToken}`,
          },
          body: JSON.stringify({
            email,
            mobile_number: mobileNumber,
          }),
        }
      );

      if (!otpResponse.ok) {
        const errorData = await otpResponse.json();
        throw new Error(
          `Failed to send OTP: ${errorData.message || "Unknown error"}`
        );
      }
      toast.success("OTP has been sent successfully!");
      setOtpSent(true);
      setCurrentSection(4);
      startTimer();
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const handleConfirmationNo = () => {
    setCurrentSection(2);
    setOtpSent(false);
  };

  const handleResendOtp = async () => {
    await handleConfirmationYes();
  };

  const handleVerifyOtp = async () => {
    try {
      const apiToken = localStorage.getItem("apiToken");
      if (!apiToken) {
        throw new Error("API token is missing");
      }

      const response = await fetch(
        "https://my.ispl-t10.com/api/timeslot_verify_otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiToken}`,
          },
          body: JSON.stringify({
            mobile_otp: mobileOtp,
            email_otp: emailOtp,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Failed to verify OTP: ${errorData.message || "Unknown error"}`
        );
      }

      toast.success("OTP verified successfully!");

      const saveSlotResponse = await fetch(
        "https://my.ispl-t10.com/api/save-time-slots",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiToken}`,
          },
          body: JSON.stringify({
            city_id: cityId,
            venue_date: selectedDate,
            time_slot: selectedBatch,
          }),
        }
      );

      if (!saveSlotResponse.ok) {
        const errorData = await saveSlotResponse.json();
        throw new Error(
          `Failed to save time slot: ${errorData.message || "Unknown error"}`
        );
      }

      const saveTimeSlotData = await saveSlotResponse.json();
      setSavedTimeSlot(saveTimeSlotData);

      toast.success("Time slot saved successfully!");

      setCurrentSection(5);
      setMobileOtp("");
      setEmailOtp("");
    } catch (error) {
      console.error("Error:", error.message);
      toast.error("Failed to verify OTP or save time slot. Please try again.");
    }
  };

  const startTimer = () => {
    setTimer(120);
  };

  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer]);

  useEffect(() => {
    if (currentSection === 2 && selectedDate) {
      setSelectedDate(selectedDate);
    }
  }, [currentSection, selectedDate]);

  const fetchTimeSlots = async (cityId) => {
    try {
      const apiToken = localStorage.getItem("apiToken");

      const response = await fetch(
        `https://my.ispl-t10.com/api/get-time-slots?city_id=${cityId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch time slots");
      }

      const data = await response.json();
      setTimeSlots(data.time_slots);
    } catch (error) {
      console.error("Error fetching time slots:", error);
    }
  };

  useEffect(() => {
    const fetchDisclaimerStatus = async () => {
      try {
        const apiToken = localStorage.getItem("apiToken");
        if (!apiToken) {
          throw new Error("API token is missing");
        }

        const response = await fetch(
          "https://my.ispl-t10.com/api/user-dashboard-api",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${apiToken}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        const cityName = data.users.cities_states_name;
        const checkSlotConfirm = data.users.is_time_slot_confirmed;
        const userTimeSlotDatas = data.user_slots_master[0];
        const is_check_disclaimer_slot = data.users.is_check_disclaimer_slot;
        console.log("is_check_disclaimer_slot", is_check_disclaimer_slot);
        setSavedTimeSlotUser(userTimeSlotDatas);
        setCheckSlot(checkSlotConfirm);

        setEmail(data.users.email);
        setMobileNumber(data.users.mobile_number);
        if (is_check_disclaimer_slot === 1) {
          setCurrentSection(2);
        }else {
          setCurrentSection(1);
        }
        if (checkSlotConfirm === 1 && is_check_disclaimer_slot === 1) {
          setCurrentSection(6);
        }

        if (cityName) {
          setCityId(cityName);
          fetchTimeSlots(cityName);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchDisclaimerStatus();

    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);

  return (
    <>
      <div className="btnWraps">
        <SqareButton
          classNameText="sqrBtn"
          btnName="Trial Time Slot"
          textColor="#fbe29a"
          svgFill="#fbe29a"
          bordercolor="#fbe29a"
          type="button"
          onClick={() => setShowModal(true)}
        />
      </div>
      {showModal ? (
        <>
          <div className="timeSlotModalWrap">
            <div className="slotWrap">
              <div className="modalHeder">
                <h1>
                  {currentSection === 1
                    ? "Disclaimer"
                    : currentSection === 2
                    ? "Select Time Slot"
                    : currentSection === 3
                    ? "Confirm Selection"
                    : "OTP Verification"}
                </h1>
                <button
                  className="closeBtn btn-close btn-close-black"
                  onClick={() => setShowModal(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="#fff"
                  >
                    <path d="M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z" />
                  </svg>
                </button>
              </div>

              {/* Section 1 */}
              {currentSection === 1 && (
                <div className="contentWrap">
                  <p className="mainPara">
                    To support the <b>"Street to Stadium"</b> initiative and
                    contribute to grassroots cricket development, organizations
                    or individuals must meet the following criteria:
                  </p>

                  <form>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        name="is_check_disclaimer_slot"
                        value=""
                      />
                      <label title="" className="form-check-label">
                        I agree
                      </label>
                    </div>
                    <div className="d-flex justify-content-center">
                      <SqareButton
                        classNameText="sqrBtn"
                        btnName="Confirm"
                        svgFill="#fbe29a"
                        textColor="#fbe29a"
                        bordercolor="#fbe29a"
                        type="button"
                        onClick={handleConfirm}
                        disabled={!isChecked}
                      />
                    </div>
                  </form>
                </div>
              )}

              {/* Section 2 */}
              {currentSection === 2 && (
                <form className="slotForm">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 col-12 mx-auto">
                      <div className="cityBox">
                        <h4>City : {cityId}</h4>
                      </div>
                      <label htmlFor="venue_id" className="form-label">
                        Select Date
                      </label>
                      <select
                        id="venue_id"
                        className="form-control mb-3"
                        onChange={(e) => setSelectedDate(e.target.value)}
                        value={selectedDate}
                        name="venue_date"
                      >
                        <option value="">Select Date</option>
                        {Object.keys(timeSlots).map((date) => (
                          <option key={date} value={date}>
                            {date}
                          </option>
                        ))}
                      </select>
                      {selectedDate && (
                        <div className="">
                          <label htmlFor="time_slot" className="form-label">
                            Select Time
                          </label>
                          <div className="timeBox">
                            {timeSlots[selectedDate] &&
                              Object.keys(timeSlots[selectedDate]).map(
                                (batchKey, index) => {
                                  const slot =
                                    timeSlots[selectedDate][batchKey];
                                  return (
                                    <label
                                      htmlFor={`batch-${index}`}
                                      className="card-radio-btn"
                                      key={index}
                                    >
                                      <input
                                        type="radio"
                                        className="card-input-element d-none"
                                        name="time_slot"
                                        id={`batch-${index}`}
                                        value={`${slot.start_time} | ${slot.end_time}`}
                                        checked={
                                          selectedBatch ===
                                          `${slot.start_time} | ${slot.end_time}`
                                        }
                                        onChange={(e) =>
                                          setSelectedBatch(e.target.value)
                                        }
                                      />
                                      <div className="card card-radio">
                                        <div className="card-body">
                                          <p className="card-title">
                                            {batchKey}
                                          </p>
                                          <p className="card-text">
                                            {slot.start_time} - {slot.end_time}
                                            <small>
                                              Available Slots:{" "}
                                              {slot.no_of_users}
                                            </small>
                                          </p>
                                        </div>
                                      </div>
                                    </label>
                                  );
                                }
                              )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mt-3">
                    <SqareButton
                      classNameText="sqrBtn"
                      btnName="Continue"
                      svgFill="#fbe29a"
                      textColor="#fbe29a"
                      bordercolor="#fbe29a"
                      type="button"
                      onClick={handleSubmit}
                      disabled={!selectedBatch}
                    />
                  </div>
                </form>
              )}

              {/* Section 3 */}
              {currentSection === 3 && (
                <div className="contentWrap">
                  <h3 className="mb-5 text-center">
                    You have selected the date and time slot. Please confirm
                    your selection.
                  </h3>
                  <div className="d-flex justify-content-center gap-5">
                    <SqareButton
                      classNameText="sqrBtn"
                      btnName="Confirm"
                      svgFill="#fbe29a"
                      textColor="#fbe29a"
                      bordercolor="#fbe29a"
                      type="button"
                      onClick={handleConfirmationYes}
                    />
                    <SqareButton
                      classNameText="sqrBtn"
                      btnName="Change"
                      svgFill="#fbe29a"
                      textColor="#fbe29a"
                      bordercolor="#fbe29a"
                      type="button"
                      onClick={handleConfirmationNo}
                    />
                  </div>
                </div>
              )}

              {/* Section 4 */}
              {currentSection === 4 && (
                <div className="contentWrap">
                  {otpSent ? (
                    <div className="col-lg-6 col-md-12 col-12 mx-auto">
                      <h3 className="mb-4">
                        OTP has been sent to your mobile number and Email.
                      </h3>
                      <form>
                        <div className="form-group mb-4">
                          <label
                            htmlFor="Mobileotp"
                            className="form-check-label mb-2"
                          >
                            Enter Mobile OTP
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="otpmobile"
                            name="mobile_otp"
                            value={mobileOtp}
                            onChange={(e) => setMobileOtp(e.target.value)}
                          />
                          {timer > 0 && (
                            <p className="btmText mt-0 text-end">
                              <span className="regster-bn frgtBtn">
                                OTP expires in {Math.floor(timer / 60)}:
                                {timer % 60}
                              </span>
                            </p>
                          )}

                          {timer === 0 && (
                            <p
                              className="btmText mt-0 text-end"
                              onClick={handleResendOtp}
                            >
                              <span className="regster-bn frgtBtn">
                                Resend OTP
                              </span>
                            </p>
                          )}
                        </div>
                        <h3 className="text-center">OR</h3>
                        <div className="form-group">
                          <label
                            htmlFor="Emailotp"
                            className="form-check-label mb-2"
                          >
                            Enter Email OTP
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="otpemail"
                            name="email_otp"
                            value={emailOtp}
                            onChange={(e) => setEmailOtp(e.target.value)}
                          />
                          {timer > 0 && (
                            <p className="btmText mt-0 text-end">
                              <span className="regster-bn frgtBtn">
                                OTP expires in {Math.floor(timer / 60)}:
                                {timer % 60}
                              </span>
                            </p>
                          )}

                          {timer === 0 && (
                            <p
                              className="btmText mt-0 text-end"
                              onClick={handleResendOtp}
                            >
                              <span className="regster-bn frgtBtn">
                                Resend OTP
                              </span>
                            </p>
                          )}
                        </div>
                        <div className="d-flex justify-content-center mt-5">
                          <SqareButton
                            classNameText="sqrBtn"
                            btnName="Verify OTP"
                            svgFill="#fbe29a"
                            textColor="#fbe29a"
                            bordercolor="#fbe29a"
                            type="button"
                            onClick={handleVerifyOtp}
                          />
                        </div>
                      </form>
                    </div>
                  ) : (
                    <p>Please wait while we send you an OTP.</p>
                  )}
                </div>
              )}

              {currentSection === 5 && savedTimeSlot && (
                <div className="contentWrap">
                  <h3 className="mb-5 text-center">
                    Your Time Slots Are Booked
                  </h3>
                  <div className="details">
                    <p>
                      <strong>City Name:</strong>{" "}
                      {savedTimeSlot?.data?.user?.cities_name}
                    </p>
                    <p>
                      <strong>Venue Date:</strong>{" "}
                      {savedTimeSlot?.data?.user?.venue_date}
                    </p>
                    <p>
                      <strong>Start Time:</strong>{" "}
                      {savedTimeSlot?.data?.user?.venue_start_time}
                    </p>
                    <p>
                      <strong>End Time:</strong>{" "}
                      {savedTimeSlot?.data?.user?.venue_end_time}
                    </p>
                  </div>
                </div>
              )}
              {currentSection === 6 && savedTimeSlotUser && (
                <div className="contentWrap">
                  <h3 className="mb-5 text-center">Time Slot Details</h3>
                  <div className="details">
                    <p>
                      <strong>City Name:</strong>{" "}
                      {savedTimeSlotUser.cities_name}
                    </p>
                    <p>
                      <strong>Venue Date:</strong>{" "}
                      {savedTimeSlotUser.venue_date}
                    </p>
                    <p>
                      <strong>Start Time:</strong>{" "}
                      {savedTimeSlotUser.venue_start_time}
                    </p>
                    <p>
                      <strong>End Time:</strong>{" "}
                      {savedTimeSlotUser.venue_end_time}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="backDropModal"></div>
        </>
      ) : null}
      <ToastContainer />
    </>
  );
}

export default TimeSlot;
