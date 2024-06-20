import React from "react";
import "../matchresultcard/matchresultcardstyle.css";
import { team1, team3, vs } from "../../../../../assets/imagePath";

function MatchResultCard() {
  return (
    <div className="matchResultCard">
      <div className="matchTagWrap">
        <span>final</span>
      </div>
      <div className="matchDetailWrap">
        <h6>Dadoji Kondadev Stadium</h6>
        <p>15 Mar, 2024 | 06:00 PM</p>
      </div>
      <div className="teamsWraps">
        <div className="leftTeamWrap boxx">
          <span>
            <img src={team1} alt="" className="img-fluid" />
          </span>
        </div>
        <div className="midBoxx">
          <span>
            <img src={vs} alt="" className="img-fluid" />
          </span>
        </div>
        <div className="rightTeamWrap boxx">
          <span>
            <img src={team3} alt="" className="img-fluid" />
          </span>
        </div>
      </div>
      <div className="matchScoringWrap">
        <div className="leftTeamScore scoreBox">
          <h4>58/9</h4>
          <p>10.0 OV</p>
        </div>
        <div className="rightTeamScore scoreBox">
          <h4>58/9</h4>
          <p>10.0 OV</p>
        </div>
      </div>
      <div className="matchFinalResultBox">
        <h3>TIIGERS OF KOLKATA WON BY 4 RUNS</h3>
      </div>
    </div>
  );
}

export default MatchResultCard;
