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
              <EventsnNewsCard
                newsLink="https://my.ispl-t10.com/news-details/east-zone-cricketer-dalhor-bought-for-rs-27-lakh-in-ispl-auction"
                newsType="News"
                thumbnailUrl="https://my.ispl-t10.com/news/1716454075.jpg"
                newsTitle="East Zone cricketer Dalhor bought for Rs 27 lakh..."
              />
              <EventsnNewsCard
                newsLink="https://my.ispl-t10.com/news-details/ispl-saif-ali-khan-opens-up-on-his-love-for-cricket-and-city-of-joy-kolkata"
                newsType="News"
                thumbnailUrl="https://my.ispl-t10.com/news/1716454285.jpg"
                newsTitle="ISPL: Saif Ali Khan opens up on his love..."
              />
              <EventsnNewsCard
                newsLink="https://my.ispl-t10.com/news-details/when-i-was-11-or-12-i-was-not-selected-sachin-tendulkar-recalls-setback-during-cricketing-journey"
                newsType="News"
                thumbnailUrl="https://my.ispl-t10.com/news/1716619156.jpg"
                newsTitle="When I was 11 or 12, I was not..."
              />
              <EventsnNewsCard
                newsLink="https://my.ispl-t10.com/news-details/rs-27-lakh-for-abhishek-dalhor-lock-kiya-jaye-say-team-big-b"
                newsType="News"
                thumbnailUrl="https://my.ispl-t10.com/news/1716619582.jpg"
                newsTitle="Rs 27 lakh for Abhishek Dalhor? Lock kiya jaye,..."
              />
              <EventsnNewsCard
                newsLink="https://my.ispl-t10.com/news-details/ispl-aaiiesapael-ka-lkara-utasahata-blvada-hasatara-safa-ahashhaka-na-tanamata-ka-lkara-ka-ya-bta"
                newsType="News"
                thumbnailUrl="https://my.ispl-t10.com/news/1716619833.jpg"
                newsTitle="ISPL: आईएसपीएल को लेकर उत्साहित िैं बॉलीवुड हसतारे, सैफ-अहिषेक..."
              />
              <EventsnNewsCard
                newsLink="https://my.ispl-t10.com/news-details/in-pictures-glimpses-from-ispl-inaugural-season-auction"
                newsType="News"
                thumbnailUrl="https://my.ispl-t10.com/news/1716621477.jpg"
                newsTitle="In pictures: Glimpses from ISPL inaugural season auction"
              />
            </EventsNewsSlider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsEventsSection;
