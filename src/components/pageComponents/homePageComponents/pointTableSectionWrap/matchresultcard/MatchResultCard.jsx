import React from "react";
import "../matchresultcard/matchresultcardstyle.css";
import { vs } from "../../../../../assets/imagePath";

function MatchResultCard({
  matchStatus,
  location,
  dateTime,
  team1Logo,
  team2Logo,
  team1finalScore,
  team2finalScore,
  team1Out,
  team2Out,
  team1Over,
  team2Over,
  finalresult,
  mTime
}) {
  return (
    <div className="matchResultCard">
      <div className="matchTagWrap">
        <span>{matchStatus}</span>
      </div>
      <div className="matchDetailWrap">
        <h6>{location}</h6>
        <p>{dateTime}, {mTime}</p>
      </div>
      <div className="teamsWraps">
        <div className="leftTeamWrap boxx">
          <span>
            <img
              src={`https://my.ispl-t10.com/images/team-master/teams/${team1Logo}`}
              alt=""
              className="img-fluid"
              loading="lazy"
            />
          </span>
        </div>
        <div className="midBoxx">
          <span>
            <img src={vs} alt="" className="img-fluid" loading="lazy" />
          </span>
        </div>
        <div className="rightTeamWrap boxx">
          <span>
            <img
              src={`https://my.ispl-t10.com/images/team-master/teams/${team2Logo}`}
              alt=""
              className="img-fluid"
              loading="lazy"
            />
          </span>
        </div>
      </div>
      <div className="matchScoringWrap">
        <div className="leftTeamScore scoreBox">
          <h4>
            {team1finalScore}/{team1Out}
          </h4>
          <p>{team1Over} OV</p>
        </div>
        <div className="rightTeamScore scoreBox">
          <h4>
            {team2finalScore}/{team2Out}
          </h4>
          <p>{team2Over} OV</p>
        </div>
      </div>
      <div className="matchFinalResultBox">
        <h3>{finalresult}</h3>
      </div>
    </div>
  );
}

export default MatchResultCard;
