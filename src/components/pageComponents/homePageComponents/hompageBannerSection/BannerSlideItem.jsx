import React from "react";
import SqareButton from "../../../common/cta/SqareButton";

function BannerSlideItem({
  tagline,
  bannerImg,
  title,
  buttonName,
  altTitle,
  completedStatus,
}) {
  return (
    <>
      <div className="sliderItme">
        <div className="sliderItmeImg">
          <img
            src={bannerImg}
            alt={altTitle}
            className="img-fluid"
            loading="lazy"
          />
        </div>
        <div className="sliderItmeContent">
          <span>{tagline}</span>
          <h4>{title}</h4>
          {completedStatus !== 1 && (
            <SqareButton
              classNameText="sqrBtn"
              btnName={buttonName}
              svgFill="#fbe29a"
              textColor="#fbe29a"
              bordercolor="#fbe29a"
              btnLinkUrl="/registration"
            />
          )}
        </div>
      </div>
    </>
  );
}

export default BannerSlideItem;
