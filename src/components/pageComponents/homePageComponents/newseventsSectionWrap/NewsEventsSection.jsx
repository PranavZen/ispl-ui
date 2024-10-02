import React, { useEffect, useState } from "react";
import axios from "axios";
import "../newseventsSectionWrap/newseventsSection.css";
import SectionTitle from "../../../common/sectiontitletext/SectionTitle";
import SqareButton from "../../../common/cta/SqareButton";
import EventsNewsSlider from "./eventnewsSliderLayout/EventsNewsSlider";
import EventsnNewsCard from "./eventnewscard/EventsnNewsCard";
import Spinner from "../../matchPageComponents/spinnercomponent/Spinner";

function NewsEventsSection() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://my.ispl-t10.com/api/news/get-news"
        );
        if (response.data.status === "success") {
          setNewsData(response.data.data["get-news"]);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

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
                btnLinkUrl="/news/all-news"
              />
            </div>
            <div className="sliderContainer">
              {loading ? (
                <Spinner />
              ) : (
                <EventsNewsSlider>
                  {newsData.map((newsItem, index) => (
                    <EventsnNewsCard
                      key={index}
                      newsLink="/news/all-news"
                      newsType="News"
                      thumbnailUrl={`https://my.ispl-t10.com/news/${newsItem.image_path}`}
                      newsTitle={newsItem.title}
                    />
                  ))}
                </EventsNewsSlider>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsEventsSection;
