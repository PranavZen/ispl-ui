import React from "react";
function TeamOwnersSliderCard({ imageSrc }) {
  return (
    <div
      className="comon-matchbn"
      style={{ display: "inline-block", width: "100%", borderRadius: "5px" }}
    >
      <img src={imageSrc} alt="pnhm" loading="lazy"/>
    </div>
  );
}

export default TeamOwnersSliderCard;
