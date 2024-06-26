import React from "react";
import SectionTitle from "../../components/common/sectiontitletext/SectionTitle";

function AuctionVideos() {
  return (
    <section id="videoSection" className="pgNotFoundSection">
      <div className="container">
        <SectionTitle titleText="AUCTION Videos" />
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

export default AuctionVideos;
