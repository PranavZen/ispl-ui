import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SectionTitle from "../../components/common/sectiontitletext/SectionTitle";
import { bat, redball } from "../../assets/imagePath";
import { Helmet } from "react-helmet-async";
import Spinner from "../../components/pageComponents/matchPageComponents/spinnercomponent/Spinner";

function ChennaiSingams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const { team_name } = useParams(); // Extract team_name from URL parameters

  useEffect(() => {
    async function fetchTeams() {
      try {
        const response = await fetch(
          "https://my.ispl-t10.com/api/team/team-list-mobile"
        );
        const data = await response.json();

        // Check if the data structure is as expected and update teams state
        if (data.status === "success" && Array.isArray(data.data.teams_data)) {
          setTeams(data.data.teams_data); // Access the correct teams data
        } else {
          console.error(
            "Failed to fetch teams, unexpected data structure:",
            data
          );
        }
      } catch (error) {
        console.error("Error fetching teams:", error);
      } finally {
        setLoading(false); // Set loading to false regardless of fetch success
      }
    }

    fetchTeams();
  }, []);

  if (loading) {
    return <div className="spinnerHight"><Spinner /></div>; // Show loading state while fetching
  }

  // Find the team that matches the team_name from the URL
  const selectedTeam = teams.find(
    (team) => team.team_name.replace(/\s+/g, "-").toLowerCase() === team_name
  );

  if (!selectedTeam) {
    return <div>Team not found</div>; // Show a message if no team matches
  }

  return (
    <section className="teamPage">
      <div className="about-page-main comon-sub-page-main d-inline-block w-100 bgGregdwint">
        <div className="about-club-top">
          <div className="container">
            <div className="row row-cols-3 row-cols-md-6 team-logos justify-content-center">
              {teams.map((team) => (
                <div key={team.team_name} className="col text-center">
                  <Link
                    to={`/team-list/${team.team_name
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}
                  >
                    <img
                      src={`https://my.ispl-t10.com/images/team-master/teams/${team.team_logo}`}
                      alt={team.team_name}
                      className={team.team_name.replace(/\s+/g, "-").toLowerCase() === team_name ? "bg-info img-fluid" : "img-fluid"}
                      loading="lazy"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Displaying selected team-specific information */}
        <div className="about-page-main custom-about comon-sub-page-main d-inline-block w-100">
          <div className="about-club-top">
            <div className="container">
              <div className="row g-3 d-flex justify-content-center">
                <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
                  <div className="team-logo">
                    <Link to="">
                      <img
                        src={`https://my.ispl-t10.com/images/team-master/teams/${selectedTeam.team_logo}`}
                        alt={selectedTeam.team_name}
                      />
                    </Link>
                  </div>
                  <div className="team-name align-text-center">
                    <h2>{selectedTeam.team_name}</h2>
                  </div>
                </div>
                <div className="col-lg-5 col-md-12">
                  <div className="team-detail-text">
                    <p>
                      <span>Owner</span> <b>-</b>{" "}
                      {selectedTeam.team_owner || "N/A"}
                    </p>
                    <p>
                      <span>Coach</span> <b>-</b>{" "}
                      {selectedTeam.team_coach || "N/A"}
                    </p>
                    <p>
                      <span>Venue</span> <b>-</b> {selectedTeam.venue || "N/A"}
                    </p>
                    <p>
                      <span>Captain</span> <b>-</b> {selectedTeam.captain_name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Players Sections by Specialization */}
          <div className="playerspage d-inline-block w-100">
            <div className="container">
              {/* ALL ROUNDERS Section */}
              <SectionTitle titleText="ALL ROUNDERS" />
              <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 g-lg-5">
                {selectedTeam.players &&
                  selectedTeam.players
                    .filter(
                      (player) => player.specialization_name === "All Rounders"
                    )
                    .map((player) => (
                      <div key={player.player_name} className="col-12 col-md-6">
                        <Link to="/matches/#statsId">
                          <div className="crm-teams01">
                            <figure>
                              <img
                                src={`https://my.ispl-t10.com/images/team-master/players/${player.player_image}`}
                                alt={player.player_name}
                                loading="lazy"
                              />
                              <div className="bat-icon allRoundBox">
                                <img
                                  src={redball}
                                  alt="All Rounders"
                                  className="img-fluid"
                                  loading="lazy"
                                />
                                <img
                                  src={bat}
                                  alt="All Rounders"
                                  className="img-fluid"
                                  loading="lazy"
                                />
                              </div>
                            </figure>
                            <div className="design">
                              <p>{player.player_name}</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
              </div>

              {/* BOWLERS Section */}
              <SectionTitle titleText="BOWLERS" />
              <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 g-lg-5">
                {selectedTeam.players &&
                  selectedTeam.players
                    .filter(
                      (player) => player.specialization_name === "Bowlers"
                    )
                    .map((player) => (
                      <div key={player.player_name} className="col-12 col-md-6">
                        <Link to="/matches/#statsId">
                          <div className="crm-teams01">
                            <figure>
                              <img
                                src={`https://my.ispl-t10.com/images/team-master/players/${player.player_image}`}
                                alt={player.player_name}
                                loading="lazy"
                              />
                              <div className="bat-icon allRoundBox">
                                <img
                                  src={redball}
                                  alt="Bowlers"
                                  className="img-fluid"
                                  loading="lazy"
                                />
                              </div>
                            </figure>
                            <div className="design">
                              <p>{player.player_name}</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
              </div>

              {/* BATTERS Section */}
              <SectionTitle titleText="BATTERS" />
              <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 g-lg-5">
                {selectedTeam.players &&
                  selectedTeam.players
                    .filter(
                      (player) => player.specialization_name === "Batters"
                    )
                    .map((player) => (
                      <div key={player.player_name} className="col-12 col-md-6">
                        <Link to="/matches/#statsId">
                          <div className="crm-teams01">
                            <figure>
                              <img
                                src={`https://my.ispl-t10.com/images/team-master/players/${player.player_image}`}
                                alt={player.player_name}
                                loading="lazy"
                              />
                              <div className="bat-icon allRoundBox">
                                <img
                                  src={bat}
                                  alt="Batters"
                                  className="img-fluid"
                                  loading="lazy"
                                />
                              </div>
                            </figure>
                            <div className="design">
                              <p>{player.player_name}</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChennaiSingams;
