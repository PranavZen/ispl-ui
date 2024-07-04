import React from "react";
import SqareButton from "../../../common/cta/SqareButton";

function BannerSlideItem({
  tagline,
  bannerImg,
  title,
  buttonName,
  altTitle
}) {
  return (
    <>
      <div className="sliderItme">
        <div className="sliderItmeImg">
          <img src={bannerImg} alt={altTitle} className="img-fluid" width={1920} height={651}/>
        </div>
        <div className="sliderItmeContent">
          <span>{tagline}</span>
          <h4>{title}</h4>
          <SqareButton
            classNameText="sqrBtn"
            btnName={buttonName}
            svgFill="#CAF75A"
            textColor="#CAF75A"
            bordercolor="#CAF75A"
            btnLinkUrl="/registration"
          />
        </div>
      </div>
    </>
  );
}

export default BannerSlideItem;
