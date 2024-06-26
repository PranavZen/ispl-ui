import React from "react";
import Tabs from "../../homePageComponents/pointTableSectionWrap/Tabs";
import "../MatchDetails/matchDetailsStyles.css";
import { Link } from "react-router-dom";
import SqareButton from "../../../common/cta/SqareButton";

function MatchDetails() {
  return (
    <div className="our-history-div d-inline-block w-100 matchDetailsCustom">
      <Tabs>
        <div label="Results" spanImg='<i  className="fa fa-book"></i>'>
          <div className="tab-pane  active show" id="result" role="tabpanel">
            <div className="container">
              <div className="row">
                <div className="col-3 col-md-3 d-flex align-items-start">
                  <div className="shedTeam">
                    <p className="badge bg-primary">FINAL</p>

                    <p className="team-info">[ Dadoji Kondadev Stadium ]</p>

                    <p className="team-info">
                      TIIGERS OF KOLKATA WON BY 4 RUNS
                    </p>
                  </div>
                </div>
                <div className="col-8 col-md-7 result-tab mt-3 team-logo-1 ">
                  {/* <!-- First Team Row --> */}
                  <div className="row d-flex align-items-center">
                    {/* <!-- First Team Logo and Details --> */}
                    <div className="col-md-2 col-3">
                      <img
                        src="https://www.ispl-t10.com/images/team-master/teams/l0WvkaiAK483mzsHgU44h4uAXFkzUr9PWWd8D3DU.png"
                        alt="Team Logo"
                        className="team-logo align-middle"
                      />
                    </div>
                    <div className="col-md-3 col-2">
                      <div className="row text-start">
                        <div className="col-12">
                          <p className="team-name">MAJHI MUMBAI</p>
                        </div>
                        <div className="col-12">
                          <p className="team-score">58 / 9</p>
                        </div>
                        <div className="col-12">
                          <p className="over">10.0 OV</p>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Versus --> */}
                    <div className="col-md-1 col-2 text-center">
                      <span className="versus"></span>
                    </div>

                    {/* <!-- Second Team Details and Logo --> */}
                    <div className="col-md-3 col-2">
                      <div className="row text-end">
                        <div className="col-12">
                          <p className="team-name">TIIGERS OF KOLKATA</p>
                        </div>
                        <div className="col-12">
                          <p className="team-score">62 / 0</p>
                        </div>
                        <div className="col-12">
                          <p className="over">7.4 OV</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 col-3">
                      <img
                        src="https://www.ispl-t10.com/images/team-master/teams/5PVSNCiBIBHYA94YN0ezkMMglhucXbX0JmIM2Svm.png"
                        alt="Team Logo"
                        className="team-logo align-middle"
                      />
                    </div>
                  </div>

                  {/* <!-- Super Over Row --> */}
                </div>

                <div className="col-1 col-md-2 shedTeam d-flex justify-content-end align-items-center">
                  <Link
                    href="https://www.ispl-t10.com/matche-center/22"
                    className="btn continue-bn btn-match-center"
                  >
                    <SqareButton
                      classNameText="sqrBtn"
                      btnName="Match Center"
                      svgFill="#CAF75A"
                      textColor="#CAF75A"
                      bordercolor="#CAF75A"
                    />
                  </Link>

                  <span className="mobile-toggle">
                    <Link href="https://www.ispl-t10.com/matche-center/22">
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </span>
                </div>
              </div>

              <hr className="hr-background" />
              <div className="row">
                <div className="col-3 col-md-3 d-flex align-items-start">
                  <div className="shedTeam">
                    <p className="badge bg-primary">QUALIFIER 2</p>

                    <p className="team-info">[ Dadoji Kondadev Stadium ]</p>

                    <p className="team-info">
                      TIIGERS OF KOLKATA WON BY 2 RUNS
                    </p>
                  </div>
                </div>
                <div className="col-8 col-md-7 result-tab mt-3 team-logo-1 ">
                  {/* <!-- First Team Row --> */}
                  <div className="row d-flex align-items-center">
                    {/* <!-- First Team Logo and Details --> */}
                    <div className="col-md-2 col-3">
                      <img
                        src="https://www.ispl-t10.com/images/team-master/teams/5PVSNCiBIBHYA94YN0ezkMMglhucXbX0JmIM2Svm.png"
                        alt="Team Logo"
                        className="team-logo align-middle"
                      />
                    </div>
                    <div className="col-md-3 col-2">
                      <div className="row text-start">
                        <div className="col-12">
                          <p className="team-name">TIIGERS OF KOLKATA</p>
                        </div>
                        <div className="col-12">
                          <p className="team-score">78 / 5</p>
                        </div>
                        <div className="col-12">
                          <p className="over">9.0 OV</p>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Versus --> */}
                    <div className="col-md-1 col-2 text-center">
                      <span className="versus"></span>
                    </div>

                    {/* <!-- Second Team Details and Logo --> */}
                    <div className="col-md-3 col-2">
                      <div className="row text-end">
                        <div className="col-12">
                          <p className="team-name">SRINAGAR KE VEER</p>
                        </div>
                        <div className="col-12">
                          <p className="team-score">76 / 8</p>
                        </div>
                        <div className="col-12">
                          <p className="over">10.0 OV</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 col-3">
                      <img
                        src="https://www.ispl-t10.com/images/team-master/teams/bbe0uutmwUfRVW4FrpGg7EmHBs8kOd1DSimaIKjZ.png"
                        alt="Team Logo"
                        className="team-logo align-middle"
                      />
                    </div>
                  </div>

                  {/* <!-- Super Over Row --> */}
                </div>

                <div className="col-1 col-md-2 shedTeam d-flex justify-content-end align-items-center">
                  <Link
                    href="https://www.ispl-t10.com/matche-center/21"
                    className="btn continue-bn btn-match-center"
                  >
                    <SqareButton
                      classNameText="sqrBtn"
                      btnName="Match Center"
                      svgFill="#CAF75A"
                      textColor="#CAF75A"
                      bordercolor="#CAF75A"
                    />
                  </Link>

                  <span className="mobile-toggle">
                    <Link href="https://www.ispl-t10.com/matche-center/21">
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </span>
                </div>
              </div>

              <hr className="hr-background" />
              <div className="row">
                <div className="col-3 col-md-3 d-flex align-items-start">
                  <div className="shedTeam">
                    <p className="badge bg-primary">QUALIFIER 1</p>

                    <p className="team-info">[ Dadoji Kondadev Stadium ]</p>

                    <p className="team-info">MAJHI MUMBAI WON BY 59 RUNS</p>
                  </div>
                </div>
                <div className="col-8 col-md-7 result-tab mt-3 team-logo-1 ">
                  {/* <!-- First Team Row --> */}
                  <div className="row d-flex align-items-center">
                    {/* <!-- First Team Logo and Details --> */}
                    <div className="col-md-2 col-3">
                      <img
                        src="https://www.ispl-t10.com/images/team-master/teams/l0WvkaiAK483mzsHgU44h4uAXFkzUr9PWWd8D3DU.png"
                        alt="Team Logo"
                        className="team-logo align-middle"
                      />
                    </div>
                    <div className="col-md-3 col-2">
                      <div className="row text-start">
                        <div className="col-12">
                          <p className="team-name">MAJHI MUMBAI</p>
                        </div>
                        <div className="col-12">
                          <p className="team-score">146 / 6</p>
                        </div>
                        <div className="col-12">
                          <p className="over">10.0 OV</p>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Versus --> */}
                    <div className="col-md-1 col-2 text-center">
                      <span className="versus"></span>
                    </div>

                    {/* <!-- Second Team Details and Logo --> */}
                    <div className="col-md-3 col-2">
                      <div className="row text-end">
                        <div className="col-12">
                          <p className="team-name">CHENNAI SINGAMS</p>
                        </div>
                        <div className="col-12">
                          <p className="team-score">87 / 10</p>
                        </div>
                        <div className="col-12">
                          <p className="over">9.4 OV</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 col-3">
                      <img
                        src="https://www.ispl-t10.com/images/team-master/teams/bjbZn8mrGvQLq8YZBccwvPge7kXwtCo17zdDGZyl.png"
                        alt="Team Logo"
                        className="team-logo align-middle"
                      />
                    </div>
                  </div>

                  {/* <!-- Super Over Row --> */}
                </div>

                <div className="col-1 col-md-2 shedTeam d-flex justify-content-end align-items-center">
                  <Link
                    href="https://www.ispl-t10.com/matche-center/20"
                    className="btn continue-bn btn-match-center"
                  >
                    <SqareButton
                      classNameText="sqrBtn"
                      btnName="Match Center"
                      svgFill="#CAF75A"
                      textColor="#CAF75A"
                      bordercolor="#CAF75A"
                    />
                  </Link>

                  <span className="mobile-toggle">
                    <Link href="https://www.ispl-t10.com/matche-center/20">
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </span>
                </div>
              </div>

              <hr className="hr-background" />
              <div className="row">
                <div className="col-3 col-md-3 d-flex align-items-start">
                  <div className="shedTeam">
                    <p className="badge bg-primary">ISPL LEAGUE</p>

                    <p className="team-info">[ Dadoji Kondadev Stadium ]</p>

                    <p className="team-info">CHENNAI SINGAMS WON BY 13 RUNS</p>
                  </div>
                </div>
                <div className="col-8 col-md-7 result-tab mt-3 team-logo-1 ">
                  {/* <!-- First Team Row --> */}
                  <div className="row d-flex align-items-center">
                    {/* <!-- First Team Logo and Details --> */}
                    <div className="col-md-2 col-3">
                      <img
                        src="https://www.ispl-t10.com/images/team-master/teams/swp1DD0AQL6lQPc9SbwPlWNPx6IjBCosZDzBFZ1t.png"
                        alt="Team Logo"
                        className="team-logo align-middle"
                      />
                    </div>
                    <div className="col-md-3 col-2">
                      <div className="row text-start">
                        <div className="col-12">
                          <p className="team-name">FALCON RISERS HYDERABAD</p>
                        </div>
                        <div className="col-12">
                          <p className="team-score">80 / 9</p>
                        </div>
                        <div className="col-12">
                          <p className="over">10.0 OV</p>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Versus --> */}
                    <div className="col-md-1 col-2 text-center">
                      <span className="versus"></span>
                    </div>

                    {/* <!-- Second Team Details and Logo --> */}
                    <div className="col-md-3 col-2">
                      <div className="row text-end">
                        <div className="col-12">
                          <p className="team-name">CHENNAI SINGAMS</p>
                        </div>
                        <div className="col-12">
                          <p className="team-score">93 / 6</p>
                        </div>
                        <div className="col-12">
                          <p className="over">10.0 OV</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 col-3">
                      <img
                        src="https://www.ispl-t10.com/images/team-master/teams/bjbZn8mrGvQLq8YZBccwvPge7kXwtCo17zdDGZyl.png"
                        alt="Team Logo"
                        className="team-logo align-middle"
                      />
                    </div>
                  </div>

                  {/* <!-- Super Over Row --> */}
                </div>

                <div className="col-1 col-md-2 shedTeam d-flex justify-content-end align-items-center">
                  <Link
                    href="https://www.ispl-t10.com/matche-center/19"
                    className="btn continue-bn btn-match-center"
                  >
                    <SqareButton
                      classNameText="sqrBtn"
                      btnName="Match Center"
                      svgFill="#CAF75A"
                      textColor="#CAF75A"
                      bordercolor="#CAF75A"
                    />
                  </Link>

                  <span className="mobile-toggle">
                    <Link href="https://www.ispl-t10.com/matche-center/19">
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </span>
                </div>
              </div>

              <hr className="hr-background" />
              <div className="row">
                <div className="col-3 col-md-3 d-flex align-items-start">
                  <div className="shedTeam">
                    <p className="badge bg-primary">ISPL LEAGUE</p>

                    <p className="team-info">[ Dadoji Kondadev Stadium ]</p>

                    <p className="team-info">
                      TIIGERS OF KOLKATA WON BY 3 RUNS
                    </p>
                  </div>
                </div>
                <div className="col-8 col-md-7 result-tab mt-3 team-logo-1 ">
                  {/* <!-- First Team Row --> */}
                  <div className="row d-flex align-items-center">
                    {/* <!-- First Team Logo and Details --> */}
                    <div className="col-md-2 col-3">
                      <img
                        src="https://www.ispl-t10.com/images/team-master/teams/bbe0uutmwUfRVW4FrpGg7EmHBs8kOd1DSimaIKjZ.png"
                        alt="Team Logo"
                        className="team-logo align-middle"
                      />
                    </div>
                    <div className="col-md-3 col-2">
                      <div className="row text-start">
                        <div className="col-12">
                          <p className="team-name">SRINAGAR KE VEER</p>
                        </div>
                        <div className="col-12">
                          <p className="team-score">109 / 7</p>
                        </div>
                        <div className="col-12">
                          <p className="over">10.0 OV</p>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Versus --> */}
                    <div className="col-md-1 col-2 text-center">
                      <span className="versus"></span>
                    </div>

                    {/* <!-- Second Team Details and Logo --> */}
                    <div className="col-md-3 col-2">
                      <div className="row text-end">
                        <div className="col-12">
                          <p className="team-name">TIIGERS OF KOLKATA</p>
                        </div>
                        <div className="col-12">
                          <p className="team-score">112 / 4</p>
                        </div>
                        <div className="col-12">
                          <p className="over">9.4 OV</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 col-3">
                      <img
                        src="https://www.ispl-t10.com/images/team-master/teams/5PVSNCiBIBHYA94YN0ezkMMglhucXbX0JmIM2Svm.png"
                        alt="Team Logo"
                        className="team-logo align-middle"
                      />
                    </div>
                  </div>

                  {/* <!-- Super Over Row --> */}
                </div>

                <div className="col-1 col-md-2 shedTeam d-flex justify-content-end align-items-center">
                  <Link
                    href="https://www.ispl-t10.com/matche-center/18"
                    className="btn continue-bn btn-match-center"
                  >
                    <SqareButton
                      classNameText="sqrBtn"
                      btnName="Match Center"
                      svgFill="#CAF75A"
                      textColor="#CAF75A"
                      bordercolor="#CAF75A"
                    />
                  </Link>

                  <span className="mobile-toggle">
                    <Link href="https://www.ispl-t10.com/matche-center/18">
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </span>
                </div>
              </div>

              <hr className="hr-background" />
              <div className="row">
                <div className="col-3 col-md-3 d-flex align-items-start">
                  <div className="shedTeam">
                    <p className="badge bg-primary">ISPL LEAGUE</p>

                    <p className="team-info">[ Dadoji Kondadev Stadium ]</p>

                    <p className="team-info">
                      KVN BANGALORE STRIKERS WON BY 4 RUNS
                    </p>
                  </div>
                </div>
                <div className="col-8 col-md-7 result-tab mt-3 team-logo-1 ">
                  {/* <!-- First Team Row --> */}
                  <div className="row d-flex align-items-center">
                    {/* <!-- First Team Logo and Details --> */}
                    <div className="col-md-2 col-3">
                      <img
                        src="https://www.ispl-t10.com/images/team-master/teams/jzVTaGm8x3sv0HJFsbDELFR0juXkWCKUdturAY7e.png"
                        alt="Team Logo"
                        className="team-logo align-middle"
                      />
                    </div>
                    <div className="col-md-3 col-2">
                      <div className="row text-start">
                        <div className="col-12">
                          <p className="team-name">KVN BANGALORE STRIKERS</p>
                        </div>
                        <div className="col-12">
                          <p className="team-score">104 / 4</p>
                        </div>
                        <div className="col-12">
                          <p className="over">9.5 OV</p>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Versus --> */}
                    <div className="col-md-1 col-2 text-center">
                      <span className="versus"></span>
                    </div>

                    {/* <!-- Second Team Details and Logo --> */}
                    <div className="col-md-3 col-2">
                      <div className="row text-end">
                        <div className="col-12">
                          <p className="team-name">MAJHI MUMBAI</p>
                        </div>
                        <div className="col-12">
                          <p className="team-score">100 / 5</p>
                        </div>
                        <div className="col-12">
                          <p className="over">10.0 OV</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 col-3">
                      <img
                        src="https://www.ispl-t10.com/images/team-master/teams/l0WvkaiAK483mzsHgU44h4uAXFkzUr9PWWd8D3DU.png"
                        alt="Team Logo"
                        className="team-logo align-middle"
                      />
                    </div>
                  </div>

                  {/* <!-- Super Over Row --> */}
                </div>

                <div className="col-1 col-md-2 shedTeam d-flex justify-content-end align-items-center">
                  <Link
                    href="https://www.ispl-t10.com/matche-center/17"
                    className="btn continue-bn btn-match-center"
                  >
                    <SqareButton
                      classNameText="sqrBtn"
                      btnName="Match Center"
                      svgFill="#CAF75A"
                      textColor="#CAF75A"
                      bordercolor="#CAF75A"
                    />
                  </Link>

                  <span className="mobile-toggle">
                    <Link href="https://www.ispl-t10.com/matche-center/17">
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </span>
                </div>
              </div>

              <hr className="hr-background" />
              <div className="row">
                <div className="col-3 col-md-3 d-flex align-items-start">
                  <div className="shedTeam">
                    <p className="badge bg-primary">ISPL LEAGUE</p>

                    <p className="team-info">[ Dadoji Kondadev Stadium ]</p>

                    <p className="team-info">SRINAGAR KE VEER WON BY 2 RUNS</p>
                  </div>
                </div>
                <div className="col-8 col-md-7 result-tab mt-3 team-logo-1 ">
                  {/* <!-- First Team Row --> */}
                  <div className="row d-flex align-items-center">
                    {/* <!-- First Team Logo and Details --> */}
                    <div className="col-md-2 col-3">
                      <img
                        src="https://www.ispl-t10.com/images/team-master/teams/bbe0uutmwUfRVW4FrpGg7EmHBs8kOd1DSimaIKjZ.png"
                        alt="Team Logo"
                        className="team-logo align-middle"
                      />
                    </div>
                    <div className="col-md-3 col-2">
                      <div className="row text-start">
                        <div className="col-12">
                          <p className="team-name">SRINAGAR KE VEER</p>
                        </div>
                        <div className="col-12">
                          <p className="team-score">111 / 7</p>
                        </div>
                        <div className="col-12">
                          <p className="over">9.5 OV</p>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Versus --> */}
                    <div className="col-md-1 col-2 text-center">
                      <span className="versus"></span>
                    </div>

                    {/* <!-- Second Team Details and Logo --> */}
                    <div className="col-md-3 col-2">
                      <div className="row text-end">
                        <div className="col-12">
                          <p className="team-name">CHENNAI SINGAMS</p>
                        </div>
                        <div className="col-12">
                          <p className="team-score">109 / 7</p>
                        </div>
                        <div className="col-12">
                          <p className="over">10.0 OV</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 col-3">
                      <img
                        src="https://www.ispl-t10.com/images/team-master/teams/bjbZn8mrGvQLq8YZBccwvPge7kXwtCo17zdDGZyl.png"
                        alt="Team Logo"
                        className="team-logo align-middle"
                      />
                    </div>
                  </div>

                  {/* <!-- Super Over Row --> */}
                </div>

                <div className="col-1 col-md-2 shedTeam d-flex justify-content-end align-items-center">
                  <Link
                    href="https://www.ispl-t10.com/matche-center/16"
                    className="btn continue-bn btn-match-center"
                  >
                    <SqareButton
                      classNameText="sqrBtn"
                      btnName="Match Center"
                      svgFill="#CAF75A"
                      textColor="#CAF75A"
                      bordercolor="#CAF75A"
                    />
                  </Link>

                  <span className="mobile-toggle">
                    <Link href="https://www.ispl-t10.com/matche-center/16">
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </span>
                </div>
              </div>

              <hr className="hr-background" />
              <div className="row">
                <div className="col-3 col-md-3 d-flex align-items-start">
                  <div className="shedTeam">
                    <p className="badge bg-primary">ISPL LEAGUE</p>

                    <p className="team-info">[ Dadoji Kondadev Stadium ]</p>

                    <p className="team-info">MAJHI MUMBAI WON BY 37 RUNS</p>
                  </div>
                </div>
                <div className="col-8 col-md-7 result-tab mt-3 team-logo-1 ">
                  {/* <!-- First Team Row --> */}
                  <div className="row d-flex align-items-center">
                    {/* <!-- First Team Logo and Details --> */}
                    <div className="col-md-2 col-3">
                      <img
                        src="https://www.ispl-t10.com/images/team-master/teams/l0WvkaiAK483mzsHgU44h4uAXFkzUr9PWWd8D3DU.png"
                        alt="Team Logo"
                        className="team-logo align-middle"
                      />
                    </div>
                    <div className="col-md-3 col-2">
                      <div className="row text-start">
                        <div className="col-12">
                          <p className="team-name">MAJHI MUMBAI</p>
                        </div>
                        <div className="col-12">
                          <p className="team-score">140 / 7</p>
                        </div>
                        <div className="col-12">
                          <p className="over">10.0 OV</p>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Versus --> */}
                    <div className="col-md-1 col-2 text-center">
                      <span className="versus"></span>
                    </div>

                    {/* <!-- Second Team Details and Logo --> */}
                    <div className="col-md-3 col-2">
                      <div className="row text-end">
                        <div className="col-12">
                          <p className="team-name">SRINAGAR KE VEER</p>
                        </div>
                        <div className="col-12">
                          <p className="team-score">103 / 7</p>
                        </div>
                        <div className="col-12">
                          <p className="over">10.0 OV</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 col-3">
                      <img
                        src="https://www.ispl-t10.com/images/team-master/teams/bbe0uutmwUfRVW4FrpGg7EmHBs8kOd1DSimaIKjZ.png"
                        alt="Team Logo"
                        className="team-logo align-middle"
                      />
                    </div>
                  </div>

                  {/* <!-- Super Over Row --> */}
                </div>

                <div className="col-1 col-md-2 shedTeam d-flex justify-content-end align-items-center">
                  <Link
                    href="https://www.ispl-t10.com/matche-center/5"
                    className="btn continue-bn btn-match-center"
                  >
                    <SqareButton
                      classNameText="sqrBtn"
                      btnName="Match Center"
                      svgFill="#CAF75A"
                      textColor="#CAF75A"
                      bordercolor="#CAF75A"
                    />
                  </Link>

                  <span className="mobile-toggle">
                    <Link href="https://www.ispl-t10.com/matche-center/5">
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </span>
                </div>
              </div>

              <hr className="hr-background" />
            </div>
          </div>
        </div>
        <div
          label="Points Table"
          spanImg='<i  className="fa fa-hand-o-right "></i>'
        >
          <div className="tab-pane  active show" id="points" role="tabpanel">
            <div className="container ">
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                >
                  <div className="table-responsive">
                    <div className="card">
                      <table
                        width="100%"
                        className="text-center table tab-tables table-bordered table-striped"
                      >
                        <thead
                          className="text-light"
                          style={{
                            backgroundColor: "#002458",
                            important: "true",
                          }}
                        >
                          <tr className="ih-pt-tbl">
                            <th>No</th>
                            <th>Team</th>
                            <th>M</th>
                            <th>W</th>
                            <th>L</th>
                            <th>T</th>
                            <th>N/R</th>
                            <th>PTS</th>
                            <th>Net RR</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Majhi Mumbai (Q)</td>
                            <td>5</td>
                            <td>3</td>
                            <td>2</td>
                            <td>0</td>
                            <td>0</td>
                            <td>6</td>
                            <td>1.247</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Tigers Of Kolkata (Q)</td>
                            <td>5</td>
                            <td>3</td>
                            <td>2</td>
                            <td>0</td>
                            <td>0</td>
                            <td>6</td>
                            <td>0.5</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Srinagar Ke Veer (Q)</td>
                            <td>5</td>
                            <td>3</td>
                            <td>2</td>
                            <td>0</td>
                            <td>0</td>
                            <td>6</td>
                            <td>0.156</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Chennai Singhams (Q)</td>
                            <td>5</td>
                            <td>3</td>
                            <td>2</td>
                            <td>0</td>
                            <td>0</td>
                            <td>6</td>
                            <td>-0.017</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>Bangalore Strikers</td>
                            <td>5</td>
                            <td>2</td>
                            <td>3</td>
                            <td>0</td>
                            <td>0</td>
                            <td>4</td>
                            <td>-1.013</td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>Falcon Risers Hyderabad</td>
                            <td>5</td>
                            <td>1</td>
                            <td>4</td>
                            <td>0</td>
                            <td>0</td>
                            <td>2</td>
                            <td>-0.688</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tabs>
    </div>
  );
}

export default MatchDetails;
