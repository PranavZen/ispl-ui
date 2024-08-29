import React from "react";
import { Link } from "react-router-dom";
import "../heighlights/heighlightsCard.css";
import { playIc, share } from "../../../../assets/imagePath";

function HeighlightsCard({
  title,
  mainTitle,
  backgroundImg,
  date, 
  matchLink,
  shareLink,
  timeText,
  target,
  datafancybox
}) {
  return (
    <div className="position-relative">
      <div className="cardInner">
        <Link to={matchLink} className="cardAllWrap" data-fancybox={datafancybox} target={target}>
          <div className="imgWrap">
            <img src={backgroundImg} alt={mainTitle} className="img-fluid" loading="lazy"/>
            <div className="playBtn">
              <span>
                <img src={playIc} alt="Play" />
              </span>
            </div>
          </div>
          <div className="midBox">
            <p>{title}</p>
            <h5>{mainTitle}</h5>
          </div>
          <div className="footBox">
            <span className="dateBox">{date}</span>
          </div>
        </Link>
      </div>
      <Link to={shareLink} className="shareBox">
          <img src={share} alt="share" />
        <span className="timeText">{timeText}</span>
      </Link>
    </div>
  );
}

export default HeighlightsCard;
