import React from "react";
import HeighlightsSection from "../components/pageComponents/homePageComponents/heighlightsSectionWrap/HeighlightsSection";
import MagicMovementSection from "../components/pageComponents/homePageComponents/magicmovmentsectionwrap/MagicMovementSection";
import JoinIsplSection from "../components/pageComponents/homePageComponents/joinIsplSectionWrap/JoinIsplSection";
import Banner from "../components/pageComponents/homePageComponents/hompageBannerSection/Banner";
import PointTableSection from "../components/pageComponents/homePageComponents/pointTableSectionWrap/PointTableSection";
import LatestVideoSection from "../components/pageComponents/homePageComponents/latestvideossectionWrap/LatestVideoSection";

function HomePage() {
  return (
    <>
      <Banner />
      <HeighlightsSection />
      <PointTableSection/>
      <MagicMovementSection />
      <LatestVideoSection/>
      <JoinIsplSection />
    </>
  );
}

export default HomePage;
