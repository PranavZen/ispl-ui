import React from "react";
import "../videos/videopagestyle.css";
import SectionTitle from "../../components/common/sectiontitletext/SectionTitle";
import HeighlightsCard from "../../components/common/sliderCard/heighlights/HeighlightsCard";

function HighlightsVideos() {
  return (
    <section id="videoSection">
      <div className="container">
        <SectionTitle titleText="HIGHLIGHTS Videos" />
        <div className="row">
          <div className="col-lg-10 col-md-12 mx-auto">
            <div className="row cardGap">
              <div className="col-md-3">
                <HeighlightsCard
                  mainTitle="Tiigers of Kolkata vs Majhi Mumbai | 1st Innings..."
                  backgroundImg="https://www.ispl-t10.com/images/videos/thumbnail/Y5LgjVkQ4jsrhvUdZ0gGEKMqjLyRaVpHLSWzN9yN.jpg"
                  date="22 May, 2024"
                  matchLink="https://www.youtube.com/embed/LYFI1ACU0_M?feature=shared"
                />
              </div>
              <div className="col-md-3">
                <HeighlightsCard
                  mainTitle="Chennai Singams vs Majhi Mumbai | Highlights | ISPL..."
                  backgroundImg="https://www.ispl-t10.com/images/videos/thumbnail/sWHqVfRLtJjXNpPlSy0W2DTIF0FmE3Omp4NIyuSo.jpg"
                  date="22 May, 2024"
                  matchLink="https://www.youtube.com/embed/xQdgdmxdPVs?feature=shared"
                />
              </div>
              <div className="col-md-3">
                <HeighlightsCard
                  mainTitle="Tiigers of Kolkata vs Srinagar Ke Veer | Highlights..."
                  backgroundImg="https://www.ispl-t10.com/images/videos/thumbnail/9wwznpGcGtlmICu5I6CEA43YsNEhZVsxhpy5hMZt.jpg"
                  date="22 May, 2024"
                  matchLink="https://www.youtube.com/embed/00p7UgSJu6E?feature=shared"
                />
              </div>
              <div className="col-md-3">
                <HeighlightsCard
                  mainTitle="Tiigers of Kolkata vs Srinagar Ke Veer | Highlights..."
                  backgroundImg="https://www.ispl-t10.com/images/videos/thumbnail/G6xqZDcENbrDJvfQtijojv9RGQUBa1C2JrOcA5jq.jpg"
                  date="22 May, 2024"
                  matchLink="https://www.youtube.com/embed/7ucE8BAychI?feature=shared"
                />
              </div>
              <div className="col-md-3">
                <HeighlightsCard
                  mainTitle="Chennai Singams vs Falcon Risers Hyderabad | Highlights |..."
                  backgroundImg="https://www.ispl-t10.com/images/videos/thumbnail/PIfW2k1BQAfvATvZas7NWHLfw5guknGOTz0Vkxsr.jpg"
                  date="22 May, 2024"
                  matchLink="https://www.youtube.com/embed/igpw_HiepdI?feature=shared"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HighlightsVideos;
