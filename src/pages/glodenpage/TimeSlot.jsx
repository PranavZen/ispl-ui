import React, { useState, useEffect } from "react";
import SqareButton from "../../components/common/cta/SqareButton";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { Link } from "react-router-dom";

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
  const [venuNameTop, setvenuNameTop] = useState("");
  const [savedTimeSlot, setSavedTimeSlot] = useState("");
  const [savedTimeSlotUser, setSavedTimeSlotUser] = useState("");
  const [checkSlot, setCheckSlot] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [lastCountSlot, setLastCountSlot] = useState(false);
  const [shouldReload, setShouldReload] = useState(false);
  const [isCheckTimeSlot, setIsCheckTimeSlot] = useState(0);
  const [isTimeSlotVeifyOtp, setTimeSlotVeifyOtp] = useState(0);
  const [isUserDataOuter, setIsUserDataOuter] = useState("");
  // console.log("timeSlots", timeSlots);

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

  const handleSubmit = async () => {
    // Fetch time slots from the API to get real-time data
    try {
      const apiToken = localStorage.getItem("apiToken");
      if (!apiToken) {
        throw new Error("API token is missing");
      }

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

      // Find the selected slot
      const selectedSlot =
        data.time_slots[selectedDate] &&
        Object.values(data.time_slots[selectedDate]).find(
          (slot) => `${slot.start_time} | ${slot.end_time}` === selectedBatch
        );

      if (selectedSlot) {
        if (selectedSlot.user_slots_count === 0) {
          alert("No slots available for the selected batch.");
          window.location.reload();
          return; // Exit the function early if no slots are available
        }

        // Update the state for disabled and last count slot
        setIsDisabled(selectedSlot.user_slots_count === 0);
        setLastCountSlot(selectedSlot.user_slots_count === 5);

        // Proceed to the next section if a batch is selected
        if (selectedBatch) {
          setCurrentSection(3);
        }
      } else {
        alert("Selected batch is invalid.");
      }
    } catch (error) {
      console.error("Error fetching time slots:", error);
    }
  };

  const handleReSubmit = async () => {
    saveToSession(cityId, selectedDate, selectedBatch);

    try {
      const token = localStorage.getItem("apiToken");

      if (!token) {
        toast.error("Authorization token is missing.");
        return;
      }

      const response = await axios.get(
        "https://my.ispl-t10.com/api/user-dashboard-api",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const user_name_ecp = response.data.user_name_ecp;

      const paymentRequestResponse = await axios.post(
        `https://my.ispl-t10.com/api/payment-time-slot-request/${user_name_ecp}`
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

        // Handle payment response
        const handlePaymentMessage = async (event) => {
          if (event.origin !== "https://secure.ccavenue.com") return;

          const paymentStatus = event.data.status;

          if (paymentStatus === "Successful") {
            // Redirect to a page with status query parameter
            window.location.href = "/dashboard-golden-page?status=Successful";
          } else {
            toast.error("Payment was unsuccessful. Please try again.");
          }

          // Remove the event listener after processing
          window.removeEventListener("message", handlePaymentMessage);
        };

        window.addEventListener("message", handlePaymentMessage);
      } else {
        toast.error("Payment request failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during payment process:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  const saveToSession = (cityId, selectedDate, selectedBatch) => {
    sessionStorage.setItem("cityId", cityId);
    sessionStorage.setItem("selectedDate", selectedDate);
    sessionStorage.setItem("selectedBatch", selectedBatch);
  };

  const getFromSession = () => {
    const cityId = sessionStorage.getItem("cityId");
    const selectedDate = sessionStorage.getItem("selectedDate");
    const selectedBatch = sessionStorage.getItem("selectedBatch");

    return { cityId, selectedDate, selectedBatch };
  };
  const clearSessionStorage = () => {
    sessionStorage.clear();
  };
  const checkQueryParams = async () => {
    const searchParams = new URLSearchParams(window.location.search);
    const status = searchParams.get("status");

    if (status === "Successful") {
      toast.success("Payment was successful.");

      const apiToken = localStorage.getItem("apiToken");
      const { cityId, selectedDate, selectedBatch } = getFromSession();

      if (apiToken && cityId && selectedDate && selectedBatch) {
        try {
          const response = await fetch(
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

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();

          if (data.status === "success") {
            clearSessionStorage();
            toast.success("Time Slot Saved Successfully"); // Avoid double call
            setTimeout(() => {
              // Clear status query param to avoid re-triggering the logic
              window.location.href = "/dashboard-golden-page";
            }, 2000);
          } else {
            toast.error("Failed to save Time Slot. Please try again.");
          }
        } catch (error) {
          toast.error("An error occurred while saving the time slot.");
        }
      } else {
        if (!cityId) console.error("cityId is missing");
        if (!selectedDate) console.error("selectedDate is missing");
        if (!selectedBatch) console.error("selectedBatch is missing");
      }
    } else if (status === "PaymentFailed") {
      clearSessionStorage();
      toast.error("Payment was unsuccessful. Please try again.");
      setTimeout(() => {
        window.location.href = "/dashboard-golden-page";
      }, 2000);
    }
  };

  useEffect(() => {
    checkQueryParams();
  }, []);

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

      // Check if the response has content before trying to parse
      const textResponse = await response.text();
      // console.log("textResponse",textResponse);
      if (textResponse.trim() === "") {
        throw new Error("Empty response from the server.");
      }
      const errorData = JSON.parse(textResponse);
      // console.log("errorData",errorData);

      if (!response.ok) {
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

      const saveSlotTextResponse = await saveSlotResponse.text();
      if (saveSlotTextResponse.trim() === "") {
        throw new Error("Empty response while saving time slot.");
      }
      const saveTimeSlotData = JSON.parse(saveSlotTextResponse);

      if (!saveSlotResponse.ok) {
        const errorData = saveTimeSlotData;
        throw new Error(
          `Failed to save time slot: ${errorData.message || "Unknown error"}`
        );
      }

      setSavedTimeSlot(saveTimeSlotData);
      toast.success("Time Slot Saved Successfully");
      setCurrentSection(5);
      setMobileOtp("");
      setEmailOtp("");
    } catch (error) {
      console.error("Error:", error.message);
      toast.error(
        `Failed to verify OTP or save time slot: ${error.message}. Please try again.`
      );
    }
  };

  const handleCloseModal = () => {
    if (shouldReload) {
      window.location.reload(); // Reload the page if needed
    }
    setShowModal(false); // Close the modal
  };

  // Effect to handle page reload when section 5 is set
  useEffect(() => {
    if (currentSection === 5) {
      setShouldReload(true); // Set reload flag to true
    } else {
      setShouldReload(false); // Reset reload flag for other sections
    }
  }, [currentSection]);

  const handleRechangeSlot = () => {
    setCurrentSection(2);
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
        const setvenuNameTopName = data.venue_name;
        const checkSlotConfirm = data.users.is_time_slot_confirmed;
        const userTimeSlotDatas = data.user_slots_master[0];
        const userOuterData = data;
        const is_check_disclaimer_slot = data.users.is_check_disclaimer_slot;
        const setTimeSlotVeifyOtp_slot = data.users.is_time_slot_otp_confirmed;
        setIsUserDataOuter(userOuterData);
        setIsCheckTimeSlot(is_check_disclaimer_slot);
        setSavedTimeSlotUser(userTimeSlotDatas);
        setCheckSlot(checkSlotConfirm);
        setTimeSlotVeifyOtp(setTimeSlotVeifyOtp_slot);
        setvenuNameTop(setvenuNameTopName);
        setEmail(data.users.email);
        setMobileNumber(data.users.mobile_number);
        if (is_check_disclaimer_slot === 1) {
          setCurrentSection(2);
        } else {
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

  const sectionTitles = {
    1: "Disclaimer",
    2: "Select Time Slot",
    3: "Confirm Selection",
    4: "OTP Verification",
    5: "Trial Time Slot Booked",
    6: "Your Trial Details",
  };

  const title = sectionTitles[currentSection] || "";

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
          <div
            className={
              currentSection === 6
                ? " timeSlotModalWrap bgGolden"
                : "timeSlotModalWrap"
            }
          >
            <div className="slotWrap">
              <div className="modalHeder">
                <h1 className={currentSection === 6 ? "darkText" : ""}>
                  {title}
                </h1>
                <button
                  className="closeBtn btn-close btn-close-black"
                  onClick={handleCloseModal}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill={currentSection === 6 ? "#172046" : "#fff"}
                  >
                    <path d="M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z" />
                  </svg>
                </button>
              </div>

              {/* Section 1 */}
              {currentSection === 1 && (
                <div className="contentWrap">
                  <p className="mainPara">
                    To secure your city trials, please book your slot
                    exclusively through the official website at{" "}
                    <Link to="https://ispl-t10.com/" target="_blank">
                      www.ispl-t10.com
                    </Link>
                    . City trial slots will open one hour before the selected
                    time and close two hours before the trial begins.
                  </p>
                  <p className="mainPara">
                    Booking confirmations will be sent via OTP to your
                    registered mobile number. Slot availability is limited, so
                    check availability before booking.
                  </p>
                  <p className="mainPara">
                    If you need to change your slot timing after confirmation,
                    an additional fee of ₹599 + GST will apply for each change,
                    subject to availability.
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
                        <h4>Venue Name : {venuNameTop}</h4>
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

                                  let availabilityMessage;
                                  if (slot.user_slots_count === 0) {
                                    availabilityMessage = "Fully Booked";
                                  } else if (slot.user_slots_count <= 3) {
                                    availabilityMessage = "Almost Full";
                                  } else if (slot.user_slots_count <= 5) {
                                    availabilityMessage = "Filling Fast...";
                                  }

                                  const isDisabled =
                                    slot.user_slots_count === 0;
                                  const lastCountSlot =
                                    slot.user_slots_count === 5;

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
                                        disabled={isDisabled}
                                      />
                                      <div
                                        className={
                                          isDisabled
                                            ? "card card-radio bgDisabled"
                                            : "card card-radio"
                                        }
                                      >
                                        <div className="card-body">
                                          <p className="card-title">
                                            {batchKey}
                                          </p>
                                          <p className="card-text">
                                            {slot.start_time} - {slot.end_time}
                                            {/* Display when user_slots_count is 2 */}
                                            <small
                                              className={
                                                lastCountSlot
                                                  ? "d-none"
                                                  : "d-block"
                                              }
                                            >
                                              Available Slots:{" "}
                                              {slot.user_slots_count}
                                            </small>
                                            {/* Display when user_slots_count is 0 */}
                                            <small
                                              className={
                                                isDisabled
                                                  ? "d-none"
                                                  : "d-block"
                                              }
                                            >
                                              {availabilityMessage}
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
                    {isTimeSlotVeifyOtp === 0 ? (
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
                    ) : (
                      <SqareButton
                        classNameText="sqrBtn"
                        btnName="Rechange Time Slot"
                        svgFill="#fbe29a"
                        textColor="#fbe29a"
                        bordercolor="#fbe29a"
                        type="button"
                        onClick={handleReSubmit}
                        disabled={!selectedBatch}
                      />
                    )}
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
                        <div className="form-group">
                          <label
                            htmlFor="Emailotp"
                            className="form-check-label mb-2"
                          >
                            Enter OTP
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="otpemail"
                            name="email_otp"
                            autoComplete
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
                  <div className="col-lg-12 col-md-12 col-12 mx-auto">
                    <h3 className="preFinalText">
                      Your time slot are booked in{" "}
                      <strong>{savedTimeSlot?.data?.user?.cities_name}</strong>{" "}
                      on <strong>{savedTimeSlot?.data?.formatted_date}</strong>.
                      The slot is scheduled from{" "}
                      <strong>
                        {savedTimeSlot?.data?.formatted_start_time}
                      </strong>{" "}
                      to{" "}
                      <strong>{savedTimeSlot?.data?.formatted_end_time}</strong>{" "}
                      . Please ensure to arrive on time.
                    </h3>
                    <br />
                    <h3 className="preFinalText text-center">
                      <b>
                        Your golden ticket would be sent via WhatsApp in next 3
                        working days.
                      </b>
                    </h3>
                  </div>
                </div>
              )}
              {currentSection === 6 && savedTimeSlotUser && (
                <div className="contentWrap">
                  <div className="col-lg-12 col-md-12 col-12 mx-auto">
                    <h3 className="finalText">
                      You have successfully booked your trial slot in{" "}
                      <strong>{savedTimeSlotUser.cities_name}</strong> at{" "}
                      <strong>{savedTimeSlotUser.venue_name}</strong> on{" "}
                      <strong>{isUserDataOuter.formatted_date}</strong>. The
                      trial is scheduled to take place from{" "}
                      <strong>{isUserDataOuter.formatted_start_time}</strong> to{" "}
                      <strong>{isUserDataOuter.formatted_end_time}</strong>.{" "}
                      {isUserDataOuter.formatted_start_time === "09:00"
                        ? "Please note that entry to the venue will be open from 8:00 a.m. and will close at 11:30 a.m. We request that you arrive on time to ensure a smooth and efficient trial process."
                        : "Please note that entry to the venue will be open from 12:30 p.m. and will close at 3:00 p.m. We request that you arrive on time to ensure a smooth and efficient trial process."}
                    </h3>
                  </div>
                  <div className="d-flex justify-content-center mt-5 mb-3">
                    <SqareButton
                      classNameText="sqrBtn"
                      btnName="Change Slot"
                      svgFill="#fbe29a"
                      textColor="#fbe29a"
                      bordercolor="#fbe29a"
                      type="button"
                      onClick={handleRechangeSlot}
                    />
                  </div>
                  <p className="chargedMsg">
                    If you need to change your trial slot, you can do so by
                    clicking the '<strong>Change Slot</strong>' button. Please
                    note that a fee of{" "}
                    <strong>Rs.599 + 18% GST = Rs. 707</strong> will be
                    applicable for changing your slot.
                  </p>
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
