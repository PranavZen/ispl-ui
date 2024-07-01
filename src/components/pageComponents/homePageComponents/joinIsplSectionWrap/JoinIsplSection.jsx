import React from "react";
import "../joinIsplSectionWrap/joinisplsection.css";
import { ball } from "../../../../assets/imagePath";
import SqareButton from "../../../common/cta/SqareButton";

function JoinIsplSection() {
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
                <SqareButton
                  classNameText="sqrBtn"
                  btnName="Register Now"
                  svgFill="#CAF75A"
                  textColor="#CAF75A"
                  bordercolor="#CAF75A"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinIsplSection;
