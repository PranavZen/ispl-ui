import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import TimeSlot from "./glodenpage/TimeSlot";
import { QRCodeSVG } from "qrcode.react";

function GlodenPage() {
  const [playerName, setPlayerName] = useState("");
  const [isplId, setIsplId] = useState("");
  const [userNameSlot, setUserNameSlot] = useState(""); // Corrected naming
  const [userSlotId, setUserSlotId] = useState(""); // Corrected naming
  const [playerId, setPlayerId] = useState("");
  const [cityName, setCityName] = useState("");
  const [seasonTypes, setSeasonTypes] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedSlotDate, setSelectedSlotDate] = useState(null);
  const [selectedSlotStartTime, setSelectedSlotStartTime] = useState(null);
  const [selectedSlotEndTime, setSelectedSlotEndTime] = useState(null);
  const [selectedSlotCityName, setSelectedSlotCityName] = useState("");
  const [isSlotAvailable, setIsSlotAvailable] = useState(false);
  const [isTicketId, setIsTicketId] = useState(false);

  // console.log("isTicketId", isTicketId);

  const generateQRCodeData = () => {
    return JSON.stringify(userNameSlot); // Corrected to userNameSlot
  };

  useEffect(() => {
    const token = localStorage.getItem("apiToken");
    axios
      .get("https://my.ispl-t10.com/api/user-dashboard-api", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const userData = response.data.user_data;
        const isplId = userData.user_name;

        let selectedSlotDate = null;
        let selectedSlotStartTime = null;
        let selectedSlotEndTime = null;
        let userName = null;
        let userslotId = null;

        if (
          response.data.user_slots_master &&
          response.data.user_slots_master.length > 0
        ) {
          const slotMaster = response.data.user_slots_master[0]; // First slot master entry

          selectedSlotDate = slotMaster.venue_date || ""; // Fallback to empty string if undefined
          selectedSlotStartTime = slotMaster.venue_start_time || "";
          selectedSlotEndTime = slotMaster.venue_end_time || "";
          userName = slotMaster.user_name || ""; // Check if user_name exists
          userslotId = slotMaster.venue_name || ""; // Check if venue_name exists

          setIsSlotAvailable(true); // Enable slot-related elements
        } else {
          setIsSlotAvailable(false); // Disable slot-related elements
        }

        const selectedSlotCityName = response.data.venue_name;

        setPlayerName(`${userData.first_name} ${userData.surname}`);
        setPlayerId(userData.user_name);
        const cityNameArray = JSON.parse(userData.cities_states_names);
        const cityName = cityNameArray[0];
        setCityName(cityName);
        setLoading(false);
        setSeasonTypes(response.data.season);
        setSelectedSlotDate(selectedSlotDate);
        setSelectedSlotStartTime(selectedSlotStartTime);
        setSelectedSlotEndTime(selectedSlotEndTime);
        setSelectedSlotCityName(selectedSlotCityName);
        setIsplId(isplId);
        setUserNameSlot(userName); // Corrected to setUserNameSlot
        setUserSlotId(userslotId); // Corrected to setUserSlotId
        setIsTicketId(userData.ticket_id);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <section className="teamListSection">
      <Helmet>
        <title>ISPL T10 | Golden Ticket</title>
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
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-3">
            <div className="text-white">
              <div className="card-body">
                <div className="d-flex justify-content-center mb-5">
                  {loading ? (
                    <Skeleton width={800} height={100} />
                  ) : (
                    <>
                      {isTicketId === 2 ? (
                        <p className="goldenMsg">
                          Congratulations !!! Here is your Green Ticket... Now
                          you are eligible to attend the Zone Trials. The
                          schedule of the Zone final trials is available on the
                          website. For any information, please feel free to
                          contact us.
                        </p>
                      ) : (
                        <TimeSlot />
                      )}
                    </>
                  )}
                </div>

                <div className="email-content">
                  <div className="text-center">
                    <Link to="/">
                      <img
                        className="header-logo"
                        src="https://my.ispl-t10.com/assets/img/logo.png"
                        alt="Logo"
                      />
                    </Link>
                    <h1 className="text-center mt-3">
                      Welcome to Indian Street Premiere League!
                    </h1>
                    <br />
                  </div>
                  <br />
                  <div className="email-body">
                    <p>
                      Dear{" "}
                      <span className="playerName">
                        {loading ? <Skeleton width={200} /> : playerName}
                      </span>
                      ,
                    </p>
                    <br />
                    <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Congratulations on
                      completing your online registration for the Indian Street
                      Premiere League! We are thrilled to have you on board and
                      look forward to an exciting journey together.
                    </p>
                    <p>
                      Here at ISPL, we are dedicated to providing a platform for
                      street players to showcase their talents and take their
                      cricketing journey to new heights. Your participation adds
                      immense value to our league, and we are excited to witness
                      the skills and passion you bring to the game.
                    </p>
                    <p>
                      As a registered player, you are now part of a dynamic
                      community that shares a common love for cricket. Get ready
                      for an unforgettable experience filled with opportunities,
                      challenges, and camaraderie.
                    </p>
                    <p>Here's what to expect next:</p>
                    <br />
                  </div>

                  {loading ? (
                    <Skeleton width={750} height={430} />
                  ) : (
                    <div className="col-lg-12 golden-ticket-container">
                      <div className="image-container">
                        <img
                          src={`https://my.ispl-t10.com/assets/img/${
                            isTicketId === 2 ? "green" : "golden"
                          }-ticket.png`}
                          style={{ maxHeight: "430px" }}
                          className="image-fluid"
                          alt="Golden Ticket "
                        />
                      </div>
                      <div className="centered-text">
                        <h1 className="golden-ticket-text">
                          {isTicketId === 2 ? "GREEN" : "GOLDEN"} TICKET
                        </h1>
                        <p className="typeTitle">
                          {loading ? (
                            <Skeleton width={150} />
                          ) : (
                            `Season ${seasonTypes}`
                          )}
                        </p>
                        <p className="ticket-info playerName">
                          {loading ? (
                            <Skeleton width={200} />
                          ) : (
                            `MR. ${playerName}`
                          )}
                        </p>
                        <hr
                          style={{
                            width: "100%",
                            border: "1px solid #000",
                          }}
                        />
                        {isTicketId === 2 ? (
                          ""
                        ) : (
                          <div className="qrCodeWrap">
                            {userNameSlot === null ? (
                              ""
                            ) : (
                              <QRCodeSVG
                                value={generateQRCodeData()}
                                size={110}
                                level={"H"}
                                bgColor="transparent"
                              />
                            )}
                          </div>
                        )}

                        <p className="ticket-info playerId">
                          {loading ? <Skeleton width={150} /> : playerId}{" "}
                          <span className="city-name-title">
                            ({loading ? <Skeleton width={150} /> : cityName})
                          </span>
                        </p>
                        {isTicketId === 2 ? (
                          ""
                        ) : (
                          <p className="finalTextSlotTicket">
                            {userSlotId}
                            <br />
                            {isSlotAvailable ? (
                              <>
                                {new Date(selectedSlotDate).toLocaleDateString(
                                  "en-US",
                                  {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  }
                                )}{" "}
                                <br />
                                {new Date(
                                  `1970-01-01T${selectedSlotStartTime}:00`
                                ).toLocaleTimeString("en-US", {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                  hour12: true,
                                })}{" "}
                                to{" "}
                                {new Date(
                                  `1970-01-01T${selectedSlotEndTime}:00`
                                ).toLocaleTimeString("en-US", {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                  hour12: true,
                                })}
                              </>
                            ) : (
                              <span></span>
                            )}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="email-body mt-5">
                    <br />
                    <p>
                      Your city trials will begin shortly. Kindly confirm your
                      trials slot for your selected city. Best of luck for your
                      trials.
                    </p>
                    <p>
                      Feel free to reach out if you have any questions or need
                      assistance along the way. Once again, welcome to the
                      Indian Street Premiere League family!
                    </p>
                    <p>
                      <br />
                      Best regards,
                      <br />
                      Indian Street Premiere League Team
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GlodenPage;
