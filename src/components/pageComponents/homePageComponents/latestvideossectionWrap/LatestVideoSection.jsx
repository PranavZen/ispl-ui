import React from "react";
import "../latestvideossectionWrap/latestvideossection.css";
import SectionTitle from "../../../common/sectiontitletext/SectionTitle";
import Grid from "./gridBox/Grid";

function LatestVideoSection() {
  return (
    <section id="latestVideoSection">
      <div className="container">
        <SectionTitle titleText="Latest Videos" />
        <div className="row">
          <div className="col-lg-10 col-md-12 mx-auto">
            <Grid />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestVideoSection;
