import React from "react";
import "../pointscard/pointscard.css";
import { Link } from "react-router-dom";

function PointsTableCard({
  addClassName,
  cardNum,
  teamLogo,
  teamName,
  pts,
  playedgames,
  winsPt, 
  nrr,
  winLable,
  lossLable,
  tag,
  fullPtsLink,
}) {
  return (
    <div className={`pointCardWrap ${addClassName}`}>
      <Link to={fullPtsLink}>
        <div className="qualifyTagWrap">
          <img src={tag} alt={teamName} className="img-fluid" loading="lazy"/>
        </div>
        <div className="cardNumberWrap">
          <span>{cardNum}</span>
        </div>
        <div className="teamLogoWrap">
          <img src={teamLogo} alt={teamName} className="img-fluid" loading="lazy"/>
        </div>
        <div className="teamNameWrap">
          <span>{teamName}</span>
        </div>
        <div className="ptDetailsWrap">
          <ul>
            <li>
              <span className="num">{pts}</span>
              <span className="lable">Points</span>
            </li>
            <li>
              <span className="num">{playedgames}</span>
              <span className="lable">Played</span>
            </li>
            <li>
              <span className="num">{winsPt}</span>
              <span className="lable">Won</span>
            </li>
            <li>
              <span className="num heilightText">{nrr}</span>
              <span className="lable">NRR</span>
            </li>
          </ul>
        </div>
        <div className="matchSummeryWrap d-none">
          <ul>
            <li className="losstext">
              <span>{lossLable}</span>
            </li>
            <li className="wintext">
              <span>{winLable}</span>
            </li>
            <li className="losstext">
              <span>{lossLable}</span>
            </li>
            <li className="wintext">
              <span>{winLable}</span>
            </li>
            <li className="wintext">
              <span>{winLable}</span>
            </li>
          </ul>
        </div>
      </Link>
    </div>
  );
}

export default PointsTableCard;
