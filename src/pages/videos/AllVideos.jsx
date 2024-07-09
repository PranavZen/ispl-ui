import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../videos/videopagestyle.css";
import SectionTitle from "../../components/common/sectiontitletext/SectionTitle";
import HeighlightsCard from "../../components/common/sliderCard/heighlights/HeighlightsCard";
import { Helmet } from "react-helmet-async";

const AllVideos = () => {
  const { category_names } = useParams();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://my.ispl-t10.com/api/video-master/all-vedios")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          const filteredVideos =
            category_names.toLowerCase() === "all"
              ? data.data["all-video"]
              : data.data["all-video"].filter(
                  (video) =>
                    video.category_names.toLowerCase() ===
                    category_names.toLowerCase()
                );
          setVideos(filteredVideos);
        } else {
          throw new Error(data.message.success[0]);
        }
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [category_names]);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;

  // Check if videos array is empty
  if (videos.length === 0) {
    return (
      <section id="videoSection" className="pgNotFoundSection">
        <div className="container">
          <SectionTitle titleText={`${category_names} Videos`} />
          <div className="row">
            <div className="col-lg-10 col-md-12 mx-auto">
              <div className="pgNotFoundNotBox">
                <h3>No data found</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="videoSection">
      <Helmet>
        <title>ISPL T10 | {category_names} Videos</title>
        <meta name="description" content={`All ${category_names} videos.`} />
        <meta name="keywords" content="videos, category, ISPL T10" />
        <meta name="author" content="Author Name" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={`${category_names} Videos`} />
        <meta
          property="og:description"
          content={`All ${category_names} videos.`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.example.com/" />
        <meta
          property="og:image"
          content="https://www.example.com/home-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${category_names} Videos`} />
        <meta
          name="twitter:description"
          content={`All ${category_names} videos.`}
        />
        <meta
          name="twitter:image"
          content="https://www.example.com/home-image.jpg"
        />
        <link rel="canonical" href="https://www.example.com/" />
      </Helmet>
      <div className="container">
        <SectionTitle titleText={`${category_names} Videos`} />
        <div className="row cardGap">
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
        </div>
      </div>
    </section>
  );
};

export default AllVideos;
