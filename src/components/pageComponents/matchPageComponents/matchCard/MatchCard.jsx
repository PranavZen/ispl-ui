import React from 'react';
import "../matchCard/matchCardStyles.css";

function MatchCard() {
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
                            src="https://www.ispl-t10.com/images/team-master/teams/l0WvkaiAK483mzsHgU44h4uAXFkzUr9PWWd8D3DU.png"
                            alt="bn"
                          />
                        </figure>
                        <h5 className="ms-3 d-none d-md-block">
                          58 / 9
                          <span className="d-block oponents-logo">10.0 OV</span>
                        </h5>
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="d-none d-md-block">
                        <div className="vds-result text-center">
                          <div className="watch-div">
                            <a href="" className="btn ">
                              <img
                                src="https://www.ispl-t10.com/assets/image/versus.png"
                                style={{ width: "50px" }}
                                alt="versus"
                              />
                            </a>
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
                            src="https://www.ispl-t10.com/images/team-master/teams/5PVSNCiBIBHYA94YN0ezkMMglhucXbX0JmIM2Svm.png"
                            alt="bn"
                          />
                        </figure>
                        <h5 className="ms-3 d-none d-md-block">
                          62 / 0
                          <span className="d-block oponents-logo">7.4 OV</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 text-center ap-match-innerwrap">
                      <span className="ap-match-place">
                        Dadoji Kondadev Stadium
                      </span>
                      <i className="fa fa-circle"></i>
                      <span className="ap-match-place">15 Mar, 2024</span>
                      <i className="fa fa-circle"></i>
                      <span className="ap-match-place">06:00 PM</span>
                    </div>
                  </div>
                  <div className="row justify-content-center pt-5">
                    <div className="ms-matchComments ng-binding ng-scope">
                      TIIGERS OF KOLKATA WON BY 4 RUNS
                    </div>
                  </div>
                  <div className="img-bg-div">
                    <img
                      src="https://www.ispl-t10.com/assets/images/new-images/events-bg2.png"
                      alt="bh"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default MatchCard
