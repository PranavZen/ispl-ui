import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import TimeSlot from "./glodenpage/TimeSlot";
import { QRCodeSVG } from "qrcode.react";
import Lottie from "react-lottie";
import animationData from "../components/anime/confitee.json";
import GreenMessage from "./message/GreenMessage";
import RejectedMessage from "./message/RejectedMessage";
import NotAttended from "./message/NotAttended";

function GlodenPage() {
  const [playerName, setPlayerName] = useState("");
  const [playerRole, setPlayerRole] = useState("");
  const [isplId, setIsplId] = useState("");
  const [userNameSlot, setUserNameSlot] = useState(""); // Corrected naming
  const [userSlotId, setUserSlotId] = useState(""); // Corrected naming
  const [playerId, setPlayerId] = useState("");
  const [cityName, setCityName] = useState("");
  const [zoneName, setZoneName] = useState("");
  const [seasonTypes, setSeasonTypes] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedSlotDate, setSelectedSlotDate] = useState(null);
  const [selectedSlotStartTime, setSelectedSlotStartTime] = useState(null);
  const [selectedSlotEndTime, setSelectedSlotEndTime] = useState(null);
  const [selectedSlotCityName, setSelectedSlotCityName] = useState("");
  const [isSlotAvailable, setIsSlotAvailable] = useState(false);
  const [isTicketId, setIsTicketId] = useState(false);
  const [slotTimeFuture, setSlotTimeFuture] = useState(0);
  const [slotTimePassed, setSlotTimePassed] = useState(0);
  const [isticketTitle, setIsticketTitle] = useState("");
  const [isticketDescription, setIsticketDescription] = useState("");

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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
        const slot_time_future = response.data.slot_time_future;
        const slot_time_passed = response.data.slot_time_passed;

        // console.log("slot_time_future", response.data.slot_time_future);
        // console.log("slot_time_passed", response.data.slot_time_passed);
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

          selectedSlotDate = response.data.formatted_date || ""; // Fallback to empty string if undefined
          selectedSlotStartTime = response.data.formatted_start_time || "";
          selectedSlotEndTime = response.data.formatted_end_time || "";
          userName = slotMaster.user_name || ""; // Check if user_name exists
          userslotId = response.data.venue_name || ""; // Check if venue_name exists

          setIsSlotAvailable(true); // Enable slot-related elements
        } else {
          setIsSlotAvailable(false); // Disable slot-related elements
        }

        const selectedSlotCityName = response.data.venue_name;
        setSlotTimeFuture(slot_time_future);
        setSlotTimePassed(slot_time_passed);
        setPlayerName(`${userData.first_name} ${userData.surname}`);
        setPlayerRole(response.data.player_role);
        setPlayerId(userData.user_name);
        const cityNameArray = JSON.parse(userData.cities_states_names);
        const cityName = cityNameArray[0];
        setCityName(cityName);
        setZoneName(response.data.users.zone_name);
        setLoading(false);
        setSeasonTypes(response.data.season);
        setSelectedSlotDate(response.data.formatted_date);
        setSelectedSlotStartTime(response.data.formatted_start_time);
        setSelectedSlotEndTime(response.data.formatted_end_time);
        setSelectedSlotCityName(selectedSlotCityName);
        setIsplId(isplId);
        setUserNameSlot(userName); // Corrected to setUserNameSlot
        setUserSlotId(userslotId); // Corrected to setUserSlotId
        setIsTicketId(userData.ticket_id);
        setIsticketTitle(response.data.ticket_title);
        setIsticketDescription(response.data.ticket_description);
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
                      {(() => {
                        if (
                          (isTicketId === 0 ||
                            isTicketId === 1 ||
                            isTicketId === 4) &&
                          slotTimePassed === 0
                        ) {
                          return <TimeSlot />;
                        } else if (isTicketId === 2 && slotTimeFuture === 0) {
                          return <TimeSlot />;
                        } else {
                          return null;
                        }
                      })()}
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
                  <p>
                    {isTicketId === 2 ? (
                      <p className="goldenMsg innerMsg">
                        {" "}
                        {isticketTitle} {playerName}
                      </p>
                    ) : isTicketId === 5 ? (
                      <p className="goldenMsg innerMsg">{isticketTitle}</p>
                    ) : isTicketId === 6 ? (
                      <p className="goldenMsg innerMsg">{isticketTitle}</p>
                    ) : (
                      <p className="goldenMsg innerMsg">{isticketTitle}</p>
                    )}
                  </p>
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

                    <>
                      {isTicketId === 2 ? (
                        <>
                          <GreenMessage
                            playerName={playerName}
                            isticketDescription={isticketDescription}
                          />
                          <p>
                            Congratulations once again, {playerName}! we await
                            your brilliance, and we’re counting down the days
                            until you take the stage!
                          </p>
                        </>
                      ) : isTicketId === 5 ? (
                        <RejectedMessage
                          isticketDescription={isticketDescription}
                        />
                      ) : isTicketId === 6 ? (
                        <NotAttended
                          isticketDescription={isticketDescription}
                        />
                      ) : (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: isticketDescription,
                          }}
                        ></div>
                      )}
                    </>

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
                        {isTicketId === 2 ? (
                          <div className="confiteeWrap">
                            <Lottie
                              options={defaultOptions}
                              height={800}
                              width={800}
                            />
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="centered-text">
                        <h1 className="golden-ticket-text">
                          {isTicketId === 4
                            ? "Spot Registration Ticket"
                            : `${isTicketId === 2 ? "GREEN" : "GOLDEN"} TICKET`}
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
                            `MR. ${playerName} ${
                              isTicketId === 2 ? `(${playerRole})` : ""
                            }`
                          )}
                        </p>
                        <hr
                          style={{
                            width: "100%",
                            border: "1px solid #000",
                          }}
                        />
                        {isTicketId === 5 || isTicketId === 6 ? (
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
                            ({loading ? <Skeleton width={150} /> : isTicketId === 2 ? `${zoneName} Zone` :cityName})
                          </span>
                        </p>
                        {isTicketId === 5 || isTicketId === 6 ? (
                          ""
                        ) : (
                          <p className="finalTextSlotTicket">
                            {userSlotId}
                            <br />
                            {isSlotAvailable ? (
                              <>
                                {selectedSlotDate}
                                <br />
                                {selectedSlotStartTime} to {selectedSlotEndTime}
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
