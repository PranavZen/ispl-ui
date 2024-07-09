import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Tabs from "../../../../components/pageComponents/homePageComponents/pointTableSectionWrap/Tabs";
import { bat, redball } from "../../../../assets/imagePath";
import SectionTitle from "../../../../components/common/sectiontitletext/SectionTitle";
import "../matchTeamPlayers/matchTeamplayers.css";
import Spinner from "../spinnercomponent/Spinner";

const TeamPlayers = () => {
  const { id } = useParams();
  const [teamPlayers, setTeamPlayers] = useState(null);

  useEffect(() => {
    const fetchTeamPlayers = async () => {
      try {
        const response = await axios.get(
          `https://my.ispl-t10.com/api/matches/match-center/${id}`
        );
        setTeamPlayers(response.data.data);
      } catch (error) {
        console.error("Error fetching team players:", error);
      }
    };

    fetchTeamPlayers();
  }, [id]);

  if (!teamPlayers) return <Spinner />;

  const renderPlayerBlock = (team, specialization, icon1, icon2, title) => (
    <div>
      <div className="innerTabsSectionTitle">
        <SectionTitle titleText={title} />
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 g-lg-5">
        {team.match_center
          .filter((player) => player.specializations_name === specialization)
          .map((player) => (
            <div className="col-6 col-sm-3" key={player.player_name}>
              <div className={`crm-teams01`}>
                <figure>
                  <img
                    src={`https://my.ispl-t10.com/images/team-master/players/${player.player_image}`}
                    alt={player.player_name}
                    loading="lazy" // Lazy load images for optimization
                  />
                  <div
                    className={`bat-icon ${
                      specialization === "All Rounders" ? "allRoundBox" : ""
                    }`}
                  >
                    {specialization === "All Rounders" && (
                      <>
                        <img
                          src={icon1}
                          alt="Bat"
                          className="img-fluid"
                          loading="lazy"
                        />
                        <img
                          src={icon2}
                          alt="Red Ball"
                          className="img-fluid"
                          loading="lazy"
                        />
                      </>
                    )}
                    {specialization !== "All Rounders" && (
                      <img
                        src={icon1}
                        alt={specialization}
                        className="img-fluid"
                        loading="lazy"
                      />
                    )}
                  </div>
                </figure>
                <div className="design">
                  <p>{player.player_name}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );

  return (
    <div className="customTeamPlayersDetails">
      <Tabs>
        <div
          label={teamPlayers.team_1.team_name[0].team_name}
          spanImg='<i class="fa fa-users"></i>'
        >
          <div className="playerspage d-inline-block w-100">
            <div className="container">
              {renderPlayerBlock(
                teamPlayers.team_1,
                "Batters",
                bat,
                redball,
                "Batters"
              )}
              {renderPlayerBlock(
                teamPlayers.team_1,
                "All Rounders",
                bat,
                redball,
                "All Rounders"
              )}
              {renderPlayerBlock(
                teamPlayers.team_1,
                "Bowlers",
                redball,
                redball,
                "Bowlers"
              )}
            </div>
          </div>
        </div>
        <div
          label={teamPlayers.team_2.team_name[0].team_name}
          spanImg='<i class="fa fa-users"></i>'
        >
          <div className="playerspage d-inline-block w-100">
            <div className="container">
              {renderPlayerBlock(
                teamPlayers.team_2,
                "Batters",
                bat,
                redball,
                "Batters"
              )}
              {renderPlayerBlock(
                teamPlayers.team_2,
                "All Rounders",
                bat,
                redball,
                "All Rounders"
              )}
              {renderPlayerBlock(
                teamPlayers.team_2,
                "Bowlers",
                redball,
                redball,
                "Bowlers"
              )}
            </div>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default TeamPlayers;
