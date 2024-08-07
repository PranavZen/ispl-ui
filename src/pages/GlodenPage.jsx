import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

function GlodenPage() {
  const [playerName, setPlayerName] = useState("");
  const [playerId, setPlayerId] = useState("");
  const [cityName, setCityName] = useState("");

  useEffect(() => {
    // Retrieve the token from localStorage
    const token = localStorage.getItem("apiToken");

    // Fetch data from the API using Axios with token in headers
    axios
      .get("https://my.ispl-t10.com/api/user-dashboard-api", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // Update state with the fetched data
        const userData = response.data.user_data;
        // console.log(userData);
        setPlayerName(`${userData.first_name} ${userData.surname}`);
        setPlayerId(userData.user_name);
        const cityNameArray = JSON.parse(userData.cities_states_names);
        const cityName = cityNameArray[0];
        setCityName(cityName);
      })
      .catch((error) => console.error("Error fetching data:", error));
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
                      Dear <span className="playerName ">{playerName}</span>,
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

                  {/* Golden Ticket Section */}
                  <div className="col-lg-12 golden-ticket-container">
                    <div className="image-container">
                      <img
                        src="https://my.ispl-t10.com/assets/img/golden-ticket.png"
                        style={{ maxHeight: "430px" }}
                        className="image-fluid"
                        alt="Golden Ticket"
                      />
                    </div>
                    <div className="centered-text">
                      <h1 className="golden-ticket-text">GOLDEN TICKET</h1>
                      <p className="ticket-info playerName">MR. {playerName}</p>
                      <hr
                        style={{
                          width: "100%",
                          border: "1px solid #000",
                        }}
                      />
                      <p className="ticket-info playerId">{playerId}</p>
                      <p className="city-name-title">{cityName}</p>
                      <p
                        className="city-name-title"
                        style={{
                          background: "#0b0b0b",
                          color: "white",
                        }}
                      ></p>
                    </div>
                  </div>

                  <div className="email-body mt-5">
                    <br />
                    <p>
                      Stay tuned for updates on trials, events, and important
                      announcements. We'll keep you informed every step of the
                      way.
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
