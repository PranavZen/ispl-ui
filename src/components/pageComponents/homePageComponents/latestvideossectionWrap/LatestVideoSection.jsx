import React from "react";
import "../latestvideossectionWrap/latestvideossection.css";
import SectionTitle from "../../../common/sectiontitletext/SectionTitle";
import Grid from "./gridBox/Grid";
import SqareButton from "../../../common/cta/SqareButton";

function LatestVideoSection() {
  return (
    <section id="latestVideoSection">
      <div className="container">
        <SectionTitle titleText="Latest Videos" />
        <div className="row">
          <div className="col-lg-10 col-md-12 mx-auto">
            <Grid />
            <div className="centerBtnWrap">
              <SqareButton
                classNameText="sqrBtn"
                btnName="View More"
                svgFill="#CAF75A"
                textColor="#CAF75A"
                bordercolor="#CAF75A"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestVideoSection;
