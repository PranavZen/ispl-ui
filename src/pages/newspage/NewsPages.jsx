import React from "react";
import "../newspage/newspagestyle.css";
import EventsnNewsCard from "../../components/pageComponents/homePageComponents/newseventsSectionWrap/eventnewscard/EventsnNewsCard";
import SectionTitle from "../../components/common/sectiontitletext/SectionTitle";
import { Helmet } from "react-helmet-async";

function NewsPages() {
  return (
    <section id="newsSection">
      <Helmet>
        <title>ISPL T10 | News</title>
        <meta
          name="description"
          content="This is the home page of our website."
        />
        <meta name="keywords" content="home, main, index" />
        <meta name="author" content="Author Name" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Home Page" />
        <meta
          property="og:description"
          content="This is the home page of our website."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.example.com/" />
        <meta
          property="og:image"
          content="https://www.example.com/home-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home Page" />
        <meta
          name="twitter:description"
          content="This is the home page of our website."
        />
        <meta
          name="twitter:image"
          content="https://www.example.com/home-image.jpg"
        />
        <link rel="canonical" href="https://www.example.com/" />
      </Helmet>
      <div className="container">
        <SectionTitle titleText="ALL NEWS" />
        <div className="row">
          <div className="col-lg-10 col-md-12 mx-auto">
            <div className="row cardGap">
              <div className="col-md-4">
                <EventsnNewsCard
                  newsLink="https://my.ispl-t10.com/news-details/east-zone-cricketer-dalhor-bought-for-rs-27-lakh-in-ispl-auction"
                  newsType="News"
                  thumbnailUrl="https://my.ispl-t10.com/news/1716454075.jpg"
                  newsTitle="East Zone cricketer Dalhor bought for Rs 27 lakh..."
                />
              </div>
              <div className="col-md-4">
                <EventsnNewsCard
                  newsLink="https://my.ispl-t10.com/news-details/ispl-saif-ali-khan-opens-up-on-his-love-for-cricket-and-city-of-joy-kolkata"
                  newsType="News"
                  thumbnailUrl="https://my.ispl-t10.com/news/1716454285.jpg"
                  newsTitle="ISPL: Saif Ali Khan opens up on his love..."
                />
              </div>
              <div className="col-md-4">
                <EventsnNewsCard
                  newsLink="https://my.ispl-t10.com/news-details/when-i-was-11-or-12-i-was-not-selected-sachin-tendulkar-recalls-setback-during-cricketing-journey"
                  newsType="News"
                  thumbnailUrl="https://my.ispl-t10.com/news/1716619156.jpg"
                  newsTitle="When I was 11 or 12, I was not..."
                />
              </div>
              <div className="col-md-4">
                <EventsnNewsCard
                  newsLink="https://my.ispl-t10.com/news-details/rs-27-lakh-for-abhishek-dalhor-lock-kiya-jaye-say-team-big-b"
                  newsType="News"
                  thumbnailUrl="https://my.ispl-t10.com/news/1716619582.jpg"
                  newsTitle="Rs 27 lakh for Abhishek Dalhor? Lock kiya jaye,..."
                />
              </div>
              <div className="col-md-4">
                <EventsnNewsCard
                  newsLink="https://my.ispl-t10.com/news-details/ispl-aaiiesapael-ka-lkara-utasahata-blvada-hasatara-safa-ahashhaka-na-tanamata-ka-lkara-ka-ya-bta"
                  newsType="News"
                  thumbnailUrl="https://my.ispl-t10.com/news/1716619833.jpg"
                  newsTitle="ISPL: आईएसपीएल को लेकर उत्साहित िैं बॉलीवुड हसतारे, सैफ-अहिषेक..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsPages;
