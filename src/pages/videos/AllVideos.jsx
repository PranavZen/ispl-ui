import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../videos/videopagestyle.css";
import SectionTitle from "../../components/common/sectiontitletext/SectionTitle";
import HeighlightsCard from "../../components/common/sliderCard/heighlights/HeighlightsCard";
import { Helmet } from "react-helmet-async";
import Spinner from "../../components/pageComponents/matchPageComponents/spinnercomponent/Spinner";
import axios from "axios";
import SqareButton from "../../components/common/cta/SqareButton";

// Define your API key and Channel ID here for better readability
const API_KEY = "AIzaSyDbmDhTtCeyOtnpqtCBbt5U3hTpVyN-nZw";
const CHANNEL_ID = "UC73dEMSiwTVJ8zZqeQfP9Lw";

const AllVideos = () => {
  const { category_names } = useParams();
  const [videos, setVideos] = useState([]);
  const [ytVideos, setYtVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nextPageToken, setNextPageToken] = useState(null);

  // Fetch local and YouTube videos when category_names changes
  useEffect(() => {
    fetchLocalVideos();
    fetchYouTubeVideos();
  }, [category_names]);

  // Fetch local videos from your API
  const fetchLocalVideos = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://my.ispl-t10.com/api/video-master/all-vedios");
      const data = await response.json();
      if (data.status === "success") {
        const filteredVideos =
          category_names.toLowerCase() === "all"
            ? data.data["all-video"]
            : data.data["all-video"].filter(
                (video) =>
                  video.category_names.toLowerCase() === category_names.toLowerCase()
              );
        setVideos(filteredVideos);
      } else {
        throw new Error(data.message.success[0]);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch YouTube videos using the YouTube Data API
  const fetchYouTubeVideos = async (pageToken = null) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search`,
        {
          params: {
            key: API_KEY,
            channelId: CHANNEL_ID,
            part: "snippet",
            order: "date",
            maxResults: 12,
            pageToken: pageToken,
          },
        }
      );

      const { items, nextPageToken } = response.data;
      const fetchedVideos = items.map((video) => ({
        ...video,
        video_link: `https://www.youtube.com/watch?v=${video.id.videoId}`,
      }));

      // Append to existing videos
      setYtVideos((prevVideos) => [...prevVideos, ...fetchedVideos]);
      setNextPageToken(nextPageToken);
    } catch (error) {
      console.error("Error fetching YouTube videos:", error);
      if (error.response && error.response.status === 403) {
        setError("Quota exceeded. Please try again later.");
      } else {
        setError("Failed to fetch YouTube videos.");
      }
    } finally {
      setLoading(false);
    }
  };

  // Load more videos when "View More" button is clicked
  const loadMoreVideos = () => {
    if (nextPageToken) {
      fetchYouTubeVideos(nextPageToken);
    }
  };

  // Format date to a more readable format
  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  // Display a spinner while loading
  if (loading) {
    return (
      <section id="videoSection" className="pgNotFoundSection">
        <div className="container">
          <SectionTitle titleText={`${category_names} Videos`} />
          <div className="row">
            <div className="col-lg-10 col-md-12 mx-auto">
              <div className="pgNotFoundNotBox bg-transparent">
                <Spinner />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Display a message if no videos are found
  if (videos.length === 0 && ytVideos.length === 0) {
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
        <meta property="og:description" content={`All ${category_names} videos.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.example.com/" />
        <meta property="og:image" content="https://www.example.com/home-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${category_names} Videos`} />
        <meta name="twitter:description" content={`All ${category_names} videos.`} />
        <meta name="twitter:image" content="https://www.example.com/home-image.jpg" />
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
                date={formatDate(video.date)}
                matchLink={video.video_link}
              />
            </div>
          ))}
          {category_names.toLowerCase() === "all" &&
            ytVideos.map((video, index) => (
              <div className="col-md-3" key={index}>
                <HeighlightsCard
                  mainTitle={video.snippet.title}
                  backgroundImg={video.snippet.thumbnails.default.url}
                  matchLink={video.video_link}
                  date={formatDate(video.snippet.publishTime)}
                />
              </div>
            ))}
        </div>
        <div className="loadMoreButton">
          {category_names.toLowerCase() === "all" && nextPageToken && (
            <SqareButton
              classNameText="sqrBtn"
              btnName="View More"
              svgFill="#CAF75A"
              textColor="#CAF75A"
              bordercolor="#CAF75A"
              onClick={loadMoreVideos}
              type="button"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default AllVideos;
