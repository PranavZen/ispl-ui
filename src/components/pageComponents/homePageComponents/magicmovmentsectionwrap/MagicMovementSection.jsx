import React from "react";
import CommonSlider from "../../../common/commonSliderLayout/CommonSlider";
import HeighlightsCard from "../../../common/sliderCard/heighlights/HeighlightsCard";
import {
  magicmovement1,
  magicmovement2,
  magicmovement3,
  magicmovement4,
} from "../../../../assets/imagePath";
import "../magicmovmentsectionwrap/magicmovement.css";
import SectionTitle from "../../../common/sectiontitletext/SectionTitle";
import SqareButton from "../../../common/cta/SqareButton";

function MagicMovementSection() {
  return (
    <section id="magicMoveMentSection">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-md-12 col-12 mx-auto px-0">
            <div className="topSecWrap">
            <SectionTitle titleText="Magic Movements" />
              {/* <SqareButton
                classNameText="sqrBtn"
                btnName="View More"
                svgFill="#263574"
                textColor="#263574"
                bordercolor="#263574" 
              /> */}
            </div>
            <CommonSlider>
              <HeighlightsCard
                mainTitle="Srinagar Ke Veer vs Majhi Mumbai | Penkar's Impressive 61 "
                backgroundImg={magicmovement1}
                date="22 May 2024"
                matchLink="/"
                timeText="1hr ago"
              />
              <HeighlightsCard
                mainTitle="Chennai Singams vs Majhi Mumbai | Tape Ball Over"
                backgroundImg={magicmovement2}
                date="22 May 2024"
                matchLink="/"
                timeText="2hrs ago"
              />
              <HeighlightsCard
                mainTitle="Tiigers of Kolkata vs Majhi Mumbai | 50-50 Challenge Over"
                backgroundImg={magicmovement3}
                date="22 May 2024"
                matchLink="/"
                timeText="42 minutes ago"
              />
              <HeighlightsCard
                mainTitle="Chennai Singams vs Majhi Mumbai | Highlights"
                backgroundImg={magicmovement4}
                date="22 May 2024"
                matchLink="/"
                timeText="12 minutes ago"
              />
              <HeighlightsCard
                mainTitle="Tiigers of Kolkata vs Srinagar Ke Veer | Highlights"
                backgroundImg={magicmovement2}
                date="21 May 2024"
                matchLink="/"
                timeText="4hrs ago"
              />
              <HeighlightsCard
                mainTitle="Chennai Singams vs Falcon Risers Hyderabad"
                backgroundImg={magicmovement1}
                date="21 May 2024"
                matchLink="/"
                timeText="9 minutes ago"
              />
            </CommonSlider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MagicMovementSection;
