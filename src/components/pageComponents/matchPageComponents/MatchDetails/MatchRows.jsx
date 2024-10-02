import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SqareButton from "../../../common/cta/SqareButton";
import Spinner from "../spinnercomponent/Spinner";

function MatchRows() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch(
          "https://my.ispl-t10.com/api/matches/results"
        );
        const data = await response.json();
        if (data.status === "success") {
          setMatches(data.data.result);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching match data:", error);
      }
    };

    fetchMatches();
  }, []);

  const getWinMessage = (match) => {
    if (match.team_one_scrore > match.team_two_scrore) {
      return `${match.from_team_name.toUpperCase()} WON BY ${
        match.team_one_scrore - match.team_two_scrore
      } RUNS`;
    } else if (match.team_one_scrore < match.team_two_scrore) {
      return `${match.to_team_name.toUpperCase()} WON BY ${
        match.team_two_scrore - match.team_one_scrore
      } RUNS`;
    }
    return "MATCH TIED"; // Default message if scores are equal
  };

  const getCategoryName = (match) => {
    if (match.cat_id === 3) {
      return "LEAGUE MATCH";
    } else if (match.category_name === "QUALIFIER 1") {
      return "SEMIFINAL 1";
    } else if (match.category_name === "QUALIFIER 2") {
      return "SEMIFINAL 2";
    } else if (match.category_name === "FINAL") {
      return "FINAL";
    } else {
      return match.category_name;
    }
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {matches.map((match, index) => (
            <div className="row pb-5" key={index}>
              <div className="col-3 col-md-3 d-flex align-items-start">
                <div className="shedTeam">
                  <p className="badge bg-primary">{getCategoryName(match)}</p>
                  <p className="team-info">[ {match.stadium_name} ]</p>
                  <p className="team-info">{getWinMessage(match)}</p>
                </div>
              </div>
              <div className="col-8 col-md-7 result-tab mt-3 team-logo-1">
                <div className="row d-flex align-items-center">
                  <div className="col-md-2 col-3">
                    <img
                      src={`https://my.ispl-t10.com/images/team-master/teams/${match.from_team_logo}`}
                      alt="Team Logo"
                      className="team-logo align-middle"
                    />
                  </div>
                  <div className="col-md-3 col-2">
                    <div className="row text-start">
                      <div className="col-12">
                        <p className="team-name">{match.from_team_name}</p>
                      </div>
                      <div className="col-12">
                        <p className="team-score">
                          {match.team_one_scrore} / {match.team_one_wicket}
                        </p>
                      </div>
                      <div className="col-12">
                        <p className="over">{match.team_one_over} OV</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-1 col-2 text-center">
                    <span className="versus"></span>
                  </div>
                  <div className="col-md-3 col-2">
                    <div className="row text-end">
                      <div className="col-12">
                        <p className="team-name">{match.to_team_name}</p>
                      </div>
                      <div className="col-12">
                        <p className="team-score">
                          {match.team_two_scrore} / {match.team_two_wicket}
                        </p>
                      </div>
                      <div className="col-12">
                        <p className="over">{match.team_two_over} OV</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2 col-3">
                    <img
                      src={`https://my.ispl-t10.com/images/team-master/teams/${match.to_team_logo}`}
                      alt="Team Logo"
                      className="team-logo align-middle"
                    />
                  </div>
                </div>
              </div>
              <div className="col-1 col-md-2 shedTeam d-flex justify-content-end align-items-center">
                <Link
                  to={`/matches/match-center/${match.id}`}
                  className="btn continue-bn btn-match-center txt16"
                >
                  <SqareButton
                    classNameText="sqrBtn"
                    btnName="Match Center"
                    svgFill="#263574"
                    textColor="#263574"
                    bordercolor="#263574"
                  />
                </Link>
                <span className="mobile-toggle">
                  <Link to={`/matches/match-center/${match.id}`}>
                    <i className="fa fa-angle-right"></i>
                  </Link>
                </span>
              </div>
              <hr className="hr-background mt-5" />
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default MatchRows;
