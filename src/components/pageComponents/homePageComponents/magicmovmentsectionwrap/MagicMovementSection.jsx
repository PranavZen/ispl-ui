import React, { useEffect, useState } from "react";
import axios from "axios";
import CommonSlider from "../../../common/commonSliderLayout/CommonSlider";
import HeighlightsCard from "../../../common/sliderCard/heighlights/HeighlightsCard";
import "../magicmovmentsectionwrap/magicmovement.css";
import SectionTitle from "../../../common/sectiontitletext/SectionTitle";
import SqareButton from "../../../common/cta/SqareButton";
import Spinner from "../../matchPageComponents/spinnercomponent/Spinner";

function MagicMovementSection() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the video data from the API
    axios
      .get("https://my.ispl-t10.com/api/video-master/all-vedios")
      .then((response) => {
        // Log the response to inspect its structure
        // console.log("API Response:", response.data);

        // Access the 'all-video' array within 'data'
        const allVideos = response.data.data["all-video"];

        // Filter videos with category name "Magic Moments"
        const magicMomentVideos = allVideos.filter(
          (video) => video.category_names === "Magic-Moments"
        );
        setVideos(magicMomentVideos);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching video data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <section id="magicMoveMentSection">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-md-12 col-12 mx-auto px-0">
            <div className="topSecWrap">
              <SectionTitle titleText="Magic Moments" />
              <SqareButton
                classNameText="sqrBtn"
                btnName="View More"
                svgFill="#263574"
                textColor="#263574"
                bordercolor="#263574"
                btnLinkUrl="/video/magic-moments"
              />
            </div>
            {loading ? (
              <Spinner />
            ) : (
              <CommonSlider>
                {videos.map((video, index) => (
                  <div className="col-md-3" key={index}>
                    <HeighlightsCard
                      mainTitle={video.title}
                      backgroundImg={`https://my.ispl-t10.com/images/videos/thumbnail/${video.thumbnail}`}
                      date={video.date}
                      matchLink={video.video_link}
                      datafancybox="data-fancybox"
                    />
                  </div>
                ))}
              </CommonSlider>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MagicMovementSection;
