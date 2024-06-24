import React from "react";
import "../newseventsSectionWrap/newseventsSection.css";
import SectionTitle from "../../../common/sectiontitletext/SectionTitle";
import SqareButton from "../../../common/cta/SqareButton";
import EventsNewsSlider from "./eventnewsSliderLayout/EventsNewsSlider";
import EventsnNewsCard from "./eventnewscard/EventsnNewsCard";

function NewsEventsSection() {
  return (
    <section id="eventNewsSection">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-md-12 col-12 mx-auto px-0">
            <div className="topSecWrap">
              <SectionTitle titleText="News & Events" />
              <SqareButton
                classNameText="sqrBtn"
                btnName="View More"
                svgFill="#263574"
                textColor="#263574"
                bordercolor="#263574"
              />
            </div>
            <EventsNewsSlider>
              <EventsnNewsCard />
              <EventsnNewsCard />
              <EventsnNewsCard />
              <EventsnNewsCard />
              <EventsnNewsCard />
              <EventsnNewsCard />
            </EventsNewsSlider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsEventsSection;
