import React, { useState, useEffect } from "react";
import "../teamlist/teamspage.css";
import Tabs from "../../components/pageComponents/homePageComponents/pointTableSectionWrap/Tabs";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Spinner from "../../components/pageComponents/matchPageComponents/spinnercomponent/Spinner";

function TeamListPage() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
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

  return (
    <section className="teamListSection">
      <Helmet>
        <title>ISPL T10 | Teams</title>
        <meta
          name="description"
          content="This is the home page of our website."
        />
        <meta name="keywords" content="home, main, index" />
        <meta name="author" content="Author Name" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Home Page" />
        <meta
          property="og:description"
          content="This is the home page of our website."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.example.com/" />
        <meta
          property="og:image"
          content="https://www.example.com/home-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home Page" />
        <meta
          name="twitter:description"
          content="This is the home page of our website."
        />
        <meta
          name="twitter:image"
          content="https://www.example.com/home-image.jpg"
        />
        <link rel="canonical" href="https://www.example.com/" />
      </Helmet>
      <div className="our-history-div d-inline-block w-100 mt-5">
        <div className="container">
          <Tabs>
            <div label="Season 1">
              <div className="container">
                <div className="row">
                  {loading ? (
                    <Spinner />
                  ) : (
                    <>
                      {teams.map((team) => (
                        <div
                          className="col-lg-4 col-md-6 col-sm-12"
                          key={team.team_name}
                        >
                          <Link
                            to={`/team-list/${team.team_name
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="teamCard"
                          >
                            <div
                              className="second hero image-alignment"
                              style={{ background: "#003899" }}
                            >
                              <img
                                className="hero-profile-img"
                                src={`https://my.ispl-t10.com/images/team-master/teams/${team.team_logo}`}
                                alt={team.team_name}
                              />
                              <div
                                className="hero-description-bk"
                                style={{
                                  backgroundImage:
                                    "linear-gradient(-20deg, #003cf8, #000000)",
                                }}
                              ></div>
                              <div className="hero-logo">
                                <img
                                  src="https://my.ispl-t10.com/assets/img/Home Page Header Logo.png"
                                  alt="Home Page Header Logo"
                                />
                              </div>
                              <div className="hero-description">
                                <p>{team.team_name}</p>
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

export default TeamListPage;
