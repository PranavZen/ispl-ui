import React from "react";
import { Link } from "react-router-dom";
import "../eventnewscard/eventnewscard.css";
import { greenArrow } from "../../../../../assets/imagePath";
function EventsnNewsCard({
  newsLink, 
  newsType,
  thumbnailUrl,
  newsTitle
}) {
  return (
    <Link to={newsLink} className="eventCardWrap">
      <div className="eImgWrap">
        <img src={thumbnailUrl} alt="" className="img-fluid" loading="lazy"/>
      </div>
      <div className="overLayBox">
        <div className="TextWraps">
          <span className="newsCategory">{newsType}</span>
          <h3>
            {newsTitle}
          </h3>
        </div>

        <div className="readMoreBtnWrap">
          read more
          <span>
            <img src={greenArrow} alt="read more" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default EventsnNewsCard;
