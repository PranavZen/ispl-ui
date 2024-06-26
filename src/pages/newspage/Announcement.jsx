import React from "react";
import SectionTitle from "../../components/common/sectiontitletext/SectionTitle";

function Announcement() {
  return (
    <section id="newsSection" className="pgNotFoundSection">
      <div className="container">
        <SectionTitle titleText="announcement" />
        <div className="row">
          <div className="col-lg-10 col-md-12 mx-auto">
            <div className="pgNotFoundNotBox">
              <h3>No data found</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Announcement;
