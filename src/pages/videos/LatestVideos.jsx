import React from "react";
import "../videos/videopagestyle.css";
import SectionTitle from "../../components/common/sectiontitletext/SectionTitle";
import HeighlightsCard from "../../components/common/sliderCard/heighlights/HeighlightsCard";
function LatestVideos() {
  return (
    <section id="videoSection">
      <div className="container">
        <SectionTitle titleText="LATEST Videos" />
        <div className="row">
          <div className="col-lg-10 col-md-12 mx-auto">
            <div className="row cardGap">
              <div className="col-md-3">
                <HeighlightsCard
                  mainTitle="Ravi Shashtri"
                  backgroundImg="https://www.ispl-t10.com/images/videos/thumbnail/2BTbG0z1rxumYLQ1ENHuXFfGBZaSRfqnwIH9MXDD.jpg"
                  date="30 Mar, 2024"
                  matchLink="https://www.youtube.com/embed/QQsavbMfhy4?si=TPtoW9Uj09y8scWR"
                />
              </div>
              <div className="col-md-3">
                <HeighlightsCard
                  mainTitle="Opening Ceremony"
                  backgroundImg="https://www.ispl-t10.com/images/videos/thumbnail/ptWFTfIn2fSeVEUqSlPlEBH99l2PFZEnTWXmtrNZ.jpg"
                  date="30 Mar, 2024"
                  matchLink="https://www.youtube.com/embed/AHyHKRx8mbg?si=eBJA2jYklbBbUhkO"
                />
              </div>
              <div className="col-md-3">
                <HeighlightsCard
                  mainTitle="National Anthem in Finale"
                  backgroundImg="https://www.ispl-t10.com/images/videos/thumbnail/JphM6koPhcLSHiTPO3ifK0qrh42xnUAAfeYHX8u1.jpg"
                  date="22 May, 2024"
                  matchLink="https://www.youtube.com/embed/Ar-TanMHEuc?si=imGGwU3lZcTLUPTl"
                />
              </div>
              <div className="col-md-3">
                <HeighlightsCard
                  mainTitle="ISPL Journey"
                  backgroundImg="https://www.ispl-t10.com/images/videos/thumbnail/P3Dipr75lXUGXVkC63CU7pNbC0zoj9GGiMmlEuVL.jpg"
                  date="30 Mar, 2024"
                  matchLink="https://www.youtube.com/embed/u2uxWeNs04s?si=3d_ZDjCzrNm3NOQ-"
                />
              </div>
              <div className="col-md-3">
                <HeighlightsCard
                  mainTitle="ISPL Season 1"
                  backgroundImg="https://www.ispl-t10.com/images/videos/thumbnail/MQpRHg1UsJJlOY0nVrkFL8PyJN7Pf7NXGkbeZpHG.jpg"
                  date="30 Mar, 2024"
                  matchLink="https://www.youtube.com/embed/u2uxWeNs04s?si=2-8ed4RQcaukOFw1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestVideos;
