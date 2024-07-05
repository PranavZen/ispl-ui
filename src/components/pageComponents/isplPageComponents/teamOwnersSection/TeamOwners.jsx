import React from "react";
import TeamOwnersSliderLayout from "./TeamOwnersSliderLayout";
import TeamOwnersSliderCard from "./TeamOwnersSliderCard";
import "../teamOwnersSection/teamOwnersSliderStyles.css";

function TeamOwners() {
  return (
    <TeamOwnersSliderLayout>
      <TeamOwnersSliderCard imageSrc="https://my.ispl-t10.com/assets/img/team_owner/1711699544.jpg" />
      <TeamOwnersSliderCard imageSrc="https://my.ispl-t10.com/assets/img/team_owner/1711699523.jpg" />
      <TeamOwnersSliderCard imageSrc="https://my.ispl-t10.com/assets/img/team_owner/1711699556.jpg" />
      <TeamOwnersSliderCard imageSrc="https://my.ispl-t10.com/assets/img/team_owner/1711699569.jpg" />
      <TeamOwnersSliderCard imageSrc="https://my.ispl-t10.com/assets/img/team_owner/1711699580.jpg" />
      <TeamOwnersSliderCard imageSrc="https://my.ispl-t10.com/assets/img/team_owner/1711699654.webp" />
    </TeamOwnersSliderLayout>
  );
}

export default TeamOwners;
