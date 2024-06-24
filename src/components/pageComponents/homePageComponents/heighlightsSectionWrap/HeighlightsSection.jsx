import React from "react";
import HeighlightsCard from "../../../common/sliderCard/heighlights/HeighlightsCard";
import CommonSlider from "../../../common/commonSliderLayout/CommonSlider";
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
} from "../../../../assets/imagePath";
import "../heighlightsSectionWrap/heighlightsPage.css";
import SectionTitle from "../../../common/sectiontitletext/SectionTitle";
import SqareButton from "../../../common/cta/SqareButton";
function HeighlightsSection() {
  return (
    <section id="heighhlightsSection">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-md-12 col-12 mx-auto px-0">
            <div className="topSecWrap">
              <SectionTitle titleText="Magic Movements" />
              <SqareButton
                classNameText="sqrBtn"
                btnName="View More"
                svgFill="#263574"
                textColor="#263574"
                bordercolor="#263574"
              />
            </div>
            <CommonSlider>
              <HeighlightsCard
                title="Match Highlights"
                mainTitle="1 Tiigers of Kolkata vs Majhi Mumbai | 1st Innings Lorem, ipsum dolor."
                backgroundImg={img1}
                date="22 May 2024"
                matchLink="/"
                shareLink="/wwww"
              />
              <HeighlightsCard
                title="Match Highlights"
                mainTitle="2 Tiigers of Kolkata vs Majhi Mumbai | 1st Innings Lorem, ipsum dolor."
                backgroundImg={img2}
                date="22 May 2024"
                matchLink="/"
                shareLink="/wwww"
              />
              <HeighlightsCard
                title="Match Highlights"
                mainTitle="3 Tiigers of Kolkata vs Majhi Mumbai | 1st Innings Lorem, ipsum dolor."
                backgroundImg={img3}
                date="22 May 2024"
                matchLink="/"
                shareLink="/wwww"
              />
              <HeighlightsCard
                title="Match Highlights"
                mainTitle="4 Chennai Singams vs Majhi Mumbai | Highlights"
                backgroundImg={img4}
                date="22 May 2024"
                matchLink="/"
                shareLink="/wwww"
              />
              <HeighlightsCard
                title="Match Highlights"
                mainTitle="5 Tiigers of Kolkata vs Srinagar Ke Veer | Highlights"
                backgroundImg={img5}
                date="21 May 2024"
                matchLink="/"
                shareLink="/wwww"
              />
              <HeighlightsCard
                title="Match Highlights"
                mainTitle="6 Chennai Singams vs Falcon Risers Hyderabad"
                backgroundImg={img6}
                date="21 May 2024"
                matchLink="/"
                shareLink="/wwww"
              />
            </CommonSlider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeighlightsSection;
