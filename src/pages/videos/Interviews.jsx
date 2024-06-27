import React from "react";
import SectionTitle from "../../components/common/sectiontitletext/SectionTitle";
import { Helmet } from "react-helmet-async";

function Interviews() {
  return (
    <section id="videoSection" className="pgNotFoundSection">
      <Helmet>
        <title>ISPL T10 | Interviews Videos</title>
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
        <SectionTitle titleText="INTERVIEWS  Videos" />
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

export default Interviews;
