import React from "react";
import HeighlightsSection from "../components/pageComponents/homePageComponents/heighlightsSectionWrap/HeighlightsSection";
import MagicMovementSection from "../components/pageComponents/homePageComponents/magicmovmentsectionwrap/MagicMovementSection";
import JoinIsplSection from "../components/pageComponents/homePageComponents/joinIsplSectionWrap/JoinIsplSection";
import Banner from "../components/pageComponents/homePageComponents/hompageBannerSection/Banner";
import PointTableSection from "../components/pageComponents/homePageComponents/pointTableSectionWrap/PointTableSection";
import LatestVideoSection from "../components/pageComponents/homePageComponents/latestvideossectionWrap/LatestVideoSection";
import NewsEventsSection from "../components/pageComponents/homePageComponents/newseventsSectionWrap/NewsEventsSection";
import GlimpseSection from "../components/pageComponents/homePageComponents/glimpseSectionWrap/GlimpseSection";
import { Helmet } from "react-helmet-async";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>ISPL T10 | Home</title>
        <meta
          name="description"
          content="This is the home page of our website."
        />
        <meta name="keywords" content="home, main, index" />
        <meta name="author" content="Author Name" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="ISPL T10 | Home" />
        <meta
          property="og:description"
          content="This is the home page of our website."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ispl-t10.com" />
        <meta property="og:image" content="https://ispl-t10.com/logo.png" />
        <meta property="og:image:width" content="90" />
        <meta property="og:image:height" content="90" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ISPL T10 | Home" />
        <meta
          name="twitter:description"
          content="This is the home page of our website."
        />
        <meta
          name="twitter:image"
          content="https://ispl-t10.com/logo.png"
        />
        <meta name="twitter:image:type" content="image/png" />
        <meta name="twitter:site" content="@ispl_t10" />
        <meta name="twitter:creator" content="@ispl_t10" />
        <link rel="canonical" href="https://ispl-t10.com" />
      </Helmet>
      <Banner />
      <HeighlightsSection />
      <PointTableSection />
      <MagicMovementSection />
      <LatestVideoSection />
      <JoinIsplSection />
      <NewsEventsSection />
      <GlimpseSection />
    </>
  );
}

export default HomePage;
