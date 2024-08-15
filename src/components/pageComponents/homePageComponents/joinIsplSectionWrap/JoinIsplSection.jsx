import React, { useEffect, useState } from "react";
import "../joinIsplSectionWrap/joinisplsection.css";
import { ball } from "../../../../assets/imagePath";
import SqareButton from "../../../common/cta/SqareButton";
import axios from "axios";

function JoinIsplSection() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [completedStatus, setCompletedStatus] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("apiToken");
    if (token) {
      setIsLoggedIn(true);
      fetchUserDashboard();
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  const fetchUserDashboard = async () => {
    try {
      const response = await axios.get(
        "https://my.ispl-t10.com/api/user-dashboard-api",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("apiToken")}`,
          },
        }
      );
      // Assuming response.data contains the completed_status
      setCompletedStatus(response.data.completed_status);
    } catch (error) {
      console.error("Error fetching user dashboard:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("apiToken");
    setIsLoggedIn(false);
  };

  return (
    <section id="joinIsplSection">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-md-10 mx-auto">
            <div className="joinIsplWrap">
              <div className="overlayTextBox">
                <h1>
                  JOIN ISPL T-1
                  <span>
                    <img
                      src={ball}
                      alt="JOIN ISPL T-10"
                      className="img-fluid ballImg"
                      loading="lazy"
                    />
                  </span>
                </h1>
                <p>
                  ISPL is Committed to Bridging the gap between street cricket
                  and stadium glory !
                </p>
                <div className="hashTagWrap">
                  <ul>
                    <li>#Street2stadium</li>
                    <li>#Street2stadium</li>
                    <li>#Street2stadium</li>
                    <li>#Street2stadium</li>
                    <li>#Street2stadium</li>
                    <li>#Street2stadium</li>
                    <li>#Street2stadium</li>
                  </ul>
                </div>
                {completedStatus !== 1 && (
                  <SqareButton
                    classNameText="sqrBtn"
                    btnName="Register Now"
                    svgFill="#fbe29a"
                    textColor="#fbe29a"
                    bordercolor="#fbe29a"
                    btnLinkUrl="/registration"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinIsplSection;
