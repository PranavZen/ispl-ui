import React from "react";
import "../videos/videopagestyle.css";
import SectionTitle from "../../components/common/sectiontitletext/SectionTitle";
import HeighlightsCard from "../../components/common/sliderCard/heighlights/HeighlightsCard";
import { Helmet } from "react-helmet-async";

function AllVideos() {
  return (
    <section id="videoSection">
      <Helmet>
        <title>ISPL T10 | All Videos</title>
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
        <SectionTitle titleText="All Videos" />
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

export default AllVideos;
