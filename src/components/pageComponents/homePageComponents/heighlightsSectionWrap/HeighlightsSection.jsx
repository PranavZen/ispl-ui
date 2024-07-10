import React, { useEffect, useState } from "react";
import HeighlightsCard from "../../../common/sliderCard/heighlights/HeighlightsCard";
import CommonSlider from "../../../common/commonSliderLayout/CommonSlider";
import "../heighlightsSectionWrap/heighlightsPage.css";
import SectionTitle from "../../../common/sectiontitletext/SectionTitle";
import SqareButton from "../../../common/cta/SqareButton";

function HeighlightsSection() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("https://my.ispl-t10.com/api/video-master/all-vedios")
      .then((response) => response.json())
      .then((data) => {
        const filteredVideos = data.data["all-video"].filter(
          (video) => video.category_names === "Highlights"
        );
        setVideos(filteredVideos);
      });
  }, []);

  return (
    <section id="heighhlightsSection">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-md-12 col-12 mx-auto px-0">
            <div className="topSecWrap">
              <SectionTitle titleText="Match Highlights" />
              <SqareButton
                classNameText="sqrBtn"
                btnName="View More"
                svgFill="#263574"
                textColor="#263574"
                bordercolor="#263574"
                btnLinkUrl="/video/highlights"
              />
            </div>
            <CommonSlider>
              {videos.map((video, index) => (
                <div className="col-md-3" key={index}>
                  <HeighlightsCard
                    mainTitle={video.title}
                    backgroundImg={`https://my.ispl-t10.com/images/videos/thumbnail/${video.thumbnail}`}
                    date={video.date}
                    matchLink={video.video_link}
                  />
                </div>
              ))}
            </CommonSlider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeighlightsSection;
