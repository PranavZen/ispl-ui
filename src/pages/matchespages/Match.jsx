import React from "react";
import "../matchespages/matchesstyle.css";
import MatchCard from "../../components/pageComponents/matchPageComponents/matchCard/MatchCard";
import MatchDetails from "../../components/pageComponents/matchPageComponents/MatchDetails/MatchDetails";

function Match() {
  return (
    <>
      <MatchCard/>
      <MatchDetails/>
    </>
  );
}

export default Match;
