import React from "react";
import { Link } from "react-router-dom";
import "../matchCard/matchCardStyles.css";

function MatchCard({
  team_one_scrore,
  team_one_wicket,
  team_one_over,
  team_two_scrore,
  team_two_wicket,
  team_two_over,
  match_date,
  match_time,
  win_message,
  stadium_name,
  to_team_name,
  to_team_logo,
  from_team_logo,
}) {
  return (
    <section className="w-100 body-part pt-0 subpahe-head-cmon rugby-spacla">
      <div className="d-inline-block w-100">
        <div className="col-lg-12 mx-auto">
          <div className="common-results-div">
            <div className="leag-name text-center">
              <h2>ISPL T-10 Latest Winner</h2>
              <div className="common-results-div">
                <div className="row align-items-center justify-content-center">
                  <div className="col-3">
                    <div className="club-items d-flex align-items-center">
                      <figure className="m-0">
                        <img
                          src={`https://my.ispl-t10.com/images/team-master/teams/${from_team_logo}`}
                          alt={to_team_name}
                        />
                      </figure>
                      <h5 className="ms-3 d-none d-md-block">
                        {team_one_scrore} / {team_one_wicket}
                        <span className="d-block oponents-logo">
                          {team_one_over} OV
                        </span>
                      </h5>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="d-none d-md-block">
                      <div className="vds-result text-center">
                        <div className="watch-div">
                          <Link to="" className="btn ">
                            <img
                              src="https://my.ispl-t10.com/assets/image/versus.png"
                              style={{ width: "50px" }}
                              alt="versus"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="d-block d-md-none">
                      <h3 className="text-center text-white"> VS </h3>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="club-items d-flex align-items-center">
                      <figure className="m-0">
                        <img
                          src={`https://my.ispl-t10.com/images/team-master/teams/${to_team_logo}`}
                          alt={to_team_logo}
                        />
                      </figure>
                      <h5 className="ms-3 d-none d-md-block">
                        {team_two_scrore} / {team_two_wicket}
                        <span className="d-block oponents-logo">
                          {team_two_over} OV
                        </span>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 text-center ap-match-innerwrap">
                    <span className="ap-match-place">{stadium_name}</span>
                    <i className="fa fa-circle"></i>
                    <span className="ap-match-place">{match_date}</span>
                    <i className="fa fa-circle"></i>
                    <span className="ap-match-place">{match_time}</span>
                  </div>
                </div>
                <div className="row justify-content-center pt-5">
                  <div className="ms-matchComments ng-binding ng-scope">
                    {win_message}
                  </div>
                </div>
                <div className="img-bg-div">
                  <img
                    src="https://my.ispl-t10.com/assets/images/new-images/events-bg2.png"
                    alt="background"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MatchCard;
