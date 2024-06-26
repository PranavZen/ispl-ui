import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../components/common/sectiontitletext/SectionTitle";
import { bat, redball } from "../../assets/imagePath";

function ChennaiSingams() {
  return (
    <section className="teamPage">
      <div
        className="about-page-main comon-sub-page-main d-inline-block w-100"
        style={{
          backgroundImage:
            "url(https://www.ispl-t10.com/assets/image/ispl-bg.jpg)",
        }}
      >
        <div className="about-club-top">
          <div className="container">
            <div className="row row-cols-3 row-cols-md-6 team-logos justify-content-center">
              <div className="col text-center">
                <Link to="/team-list/chennai-singams">
                  <img
                    src="https://www.ispl-t10.com/images/team-master/teams/bjbZn8mrGvQLq8YZBccwvPge7kXwtCo17zdDGZyl.png"
                    alt=""
                    className="bg-info img-fluid"
                  />
                </Link>
              </div>
              <div className="col text-center">
                <Link to="/team-list/majhi-mumbai">
                  <img
                    src="https://www.ispl-t10.com/images/team-master/teams/l0WvkaiAK483mzsHgU44h4uAXFkzUr9PWWd8D3DU.png"
                    alt=""
                    className="img-fluid"
                  />
                </Link>
              </div>
              <div className="col text-center">
                <Link to="/team-list/tiigers-of-kolkata">
                  <img
                    src="https://www.ispl-t10.com/images/team-master/teams/5PVSNCiBIBHYA94YN0ezkMMglhucXbX0JmIM2Svm.png"
                    alt=""
                    className="img-fluid"
                  />
                </Link>
              </div>
              <div className="col text-center">
                <Link to="/team-list/srinagar-ke-veer">
                  <img
                    src="https://www.ispl-t10.com/images/team-master/teams/bbe0uutmwUfRVW4FrpGg7EmHBs8kOd1DSimaIKjZ.png"
                    alt=""
                    className="img-fluid"
                  />
                </Link>
              </div>
              <div className="col text-center">
                <Link to="/team-list/kvn-bangalore-strikers">
                  <img
                    src="https://www.ispl-t10.com/images/team-master/teams/jzVTaGm8x3sv0HJFsbDELFR0juXkWCKUdturAY7e.png"
                    alt=""
                    className="img-fluid"
                  />
                </Link>
              </div>
              <div className="col text-center">
                <Link to="/team-list/falcon-risers-hyderabad">
                  <img
                    src="https://www.ispl-t10.com/images/team-master/teams/swp1DD0AQL6lQPc9SbwPlWNPx6IjBCosZDzBFZ1t.png"
                    alt=""
                    className="img-fluid"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="about-page-main custom-about comon-sub-page-main d-inline-block w-100">
          <div className="about-club-top">
            <div className="container">
              <div className="row g-3 d-flex justify-content-center">
                <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
                  <div className="team-logo">
                    <Link to="">
                      <img
                        src="https://www.ispl-t10.com/images/team-master/teams/bjbZn8mrGvQLq8YZBccwvPge7kXwtCo17zdDGZyl.png"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="team-name align-text-center">
                    <h2>CHENNAI SINGAMS</h2>
                  </div>
                </div>
                <div className="col-lg-5 col-md-12">
                  <div className="team-detail-text">
                    <p>
                      <span>Owner</span> <b>-</b> Rajdeep Gupta and Sandeep
                      Gupta / Suriya (Saravanan Sivakumar)
                    </p>
                    <p>
                      <span>Coach</span> <b>-</b> Sumeet Dhekle
                    </p>
                    <p>
                      <span>Venue</span> <b>-</b> Chennai
                    </p>
                    <p>
                      <span>Captain</span>
                      <b>-</b> Sumeet Dhekale
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="playerspage d-inline-block w-100">
        <div className="container">
          <SectionTitle titleText="ALL ROUNDERS" />
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 g-lg-5">
            <div className="col-6 col-sm-3">
              <div className="crm-teams01">
                <figure>
                  <img
                    src="https://www.ispl-t10.com/images/team-master/players/Cwu5FqRx8TV8MO5pF0aV3yTfPGkMIkOwcSyIK962.png"
                    alt="teams01"
                  />
                  <div className="bat-icon allRoundBox">
                    <img src={redball} alt="BOWLERS" className="img-fluid" />
                    <img src={bat} alt="BOWLERS" className="img-fluid" />
                  </div>
                </figure>
                <div className="design">
                  <p>Vishwanath Jadhav</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-3">
              <div className="crm-teams01">
                <figure>
                  <img
                    src="https://www.ispl-t10.com/images/team-master/players/V9Lod9QZzsaPPDY4VPJmsExRk0uznwSFWsZwyj0a.png"
                    alt="teams01"
                  />
                  <div className="bat-icon allRoundBox">
                    <img src={redball} alt="BOWLERS" className="img-fluid" />
                    <img src={bat} alt="BOWLERS" className="img-fluid" />
                  </div>
                </figure>
                <div className="design">
                  <p>Dilip Binjwa</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-3">
              <div className="crm-teams01">
                <figure>
                  <img
                    src="https://www.ispl-t10.com/images/team-master/players/6aWIfGxN37iPZf1f59XMLzNORDxe4Q9R7V1cHuJd.png"
                    alt="teams01"
                  />
                  <div className="bat-icon allRoundBox">
                    <img src={redball} alt="BOWLERS" className="img-fluid" />
                    <img src={bat} alt="BOWLERS" className="img-fluid" />
                  </div>
                </figure>
                <div className="design">
                  <p>R.Thavith Kumar</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-3">
              <div className="crm-teams01">
                <figure>
                  <img
                    src="https://www.ispl-t10.com/images/team-master/players/NJYMT7y12mCBvBkXiCwlJLoKGDeVwsraNKkxGZMS.png"
                    alt="teams01"
                  />
                  <div className="bat-icon allRoundBox">
                    <img src={redball} alt="BOWLERS" className="img-fluid" />
                    <img src={bat} alt="BOWLERS" className="img-fluid" />
                  </div>
                </figure>
                <div className="design">
                  <p>VENKATACHALAPATHI VIGNESH</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-3">
              <div className="crm-teams01">
                <figure>
                  <img
                    src="https://www.ispl-t10.com/images/team-master/players/jHgMCRLGhlTdHSnTvudS3Divhz5VXdbP9SUyIyOx.png"
                    alt="teams01"
                  />
                  <div className="bat-icon allRoundBox">
                    <img src={redball} alt="BOWLERS" className="img-fluid" />
                    <img src={bat} alt="BOWLERS" className="img-fluid" />
                  </div>
                </figure>
                <div className="design">
                  <p>Bablu Patil</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-3">
              <div className="crm-teams01">
                <figure>
                  <img
                    src="https://www.ispl-t10.com/images/team-master/players/S0vQOr35Vz3jHi4huGzinuQRGZLa4pSwotUNMvqh.png"
                    alt="teams01"
                  />
                  <div className="bat-icon allRoundBox">
                    <img src={redball} alt="BOWLERS" className="img-fluid" />
                    <img src={bat} alt="BOWLERS" className="img-fluid" />
                  </div>
                </figure>
                <div className="design">
                  <p>Harish Parmar</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-3">
              <div className="crm-teams01">
                <figure>
                  <img
                    src="https://www.ispl-t10.com/images/team-master/players/IfR5Wn2CcNHLSvOH4zNyF3EhyMpRDpHflZn2MbNT.png"
                    alt="teams01"
                  />
                  <div className="bat-icon allRoundBox">
                    <img src={redball} alt="BOWLERS" className="img-fluid" />
                    <img src={bat} alt="BOWLERS" className="img-fluid" />
                  </div>
                </figure>
                <div className="design">
                  <p>VEDANT MAYEKAR</p>
                </div>
              </div>
            </div>
          </div>
          <SectionTitle titleText="BOWLERS" />
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 g-lg-5">
            <div className="col-6 col-sm-3">
              <div className="crm-teams01">
                <figure>
                  <img
                    src="https://www.ispl-t10.com/images/team-master/players/4qNAPjNXOz9ujykhK1bNCiFKwmjhwvvvduMYNYJK.png"
                    alt="teams01"
                  />
                  <div className="bat-icon">
                    <img src={redball} alt="BOWLERS" className="img-fluid" />
                  </div>
                </figure>
                <div className="design">
                  <p>Pankaj Parel</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-3">
              <div className="crm-teams01">
                <figure>
                  <img
                    src="https://www.ispl-t10.com/images/team-master/players/lTp9WGlEqhxK59uYjjPQKZhyY7ilacsCtEINBtIG.png"
                    alt="teams01"
                  />
                  <div className="bat-icon">
                    <img src={redball} alt="BOWLERS" className="img-fluid" />
                  </div>
                </figure>
                <div className="design">
                  <p>Farhat Ahmad</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-3">
              <div className="crm-teams01">
                <figure>
                  <img
                    src="https://www.ispl-t10.com/images/team-master/players/DmLrVHkIBAVDw3BlJiWQDyObDeibrUZfgK8b56Ja.png"
                    alt="teams01"
                  />
                  <div className="bat-icon">
                    <img src={redball} alt="BOWLERS" className="img-fluid" />
                  </div>
                </figure>
                <div className="design">
                  <p>Farman Khan</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-3">
              <div className="crm-teams01">
                <figure>
                  <img
                    src="https://www.ispl-t10.com/images/team-master/players/VOuOrKAqX7BPuh47fDcz7qo3qvLpEwj28qppaXjG.png"
                    alt="teams01"
                  />
                  <div className="bat-icon">
                    <img src={redball} alt="BOWLERS" className="img-fluid" />
                  </div>
                </figure>
                <div className="design">
                  <p>Aniket Sanap</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-3">
              <div className="crm-teams01">
                <figure>
                  <img
                    src="https://www.ispl-t10.com/images/team-master/players/XJoHjouhCeq3ne5QdkDIxxlVVE84m9Yv4vt4N541.png"
                    alt="teams01"
                  />
                  <div className="bat-icon">
                    <img src={redball} alt="BOWLERS" className="img-fluid" />
                  </div>
                </figure>
                <div className="design">
                  <p>Rajdeep Jadeja</p>
                </div>
              </div>
            </div>
          </div>
          <SectionTitle titleText="BATTERS" />
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 g-lg-5">
            <div className="col-6 col-sm-3">
              <div className="crm-teams01">
                <figure>
                  <img
                    src="https://www.ispl-t10.com/images/team-master/players/dnjW94ppdAAqOTAJhjwPCdvkQIwJNb4W9Kf5kBXo.png"
                    alt="teams01"
                  />
                  <div className="bat-icon">
                    <img src={bat} alt="BATTERS" className="img-fluid" />
                  </div>
                </figure>
                <div className="design">
                  <p>Sagar Ali</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-3">
              <div className="crm-teams01">
                <figure>
                  <img
                    src="https://www.ispl-t10.com/images/team-master/players/FgS2sqy6pmPrjyCJT2pP8Z2D5QYU8FZg6UawHiHn.png"
                    alt="teams01"
                  />
                  <div className="bat-icon">
                    <img src={bat} alt="BATTERS" className="img-fluid" />
                  </div>
                </figure>
                <div className="design">
                  <p>Sanjay Kanojjiya</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-3">
              <div className="crm-teams01">
                <figure>
                  <img
                    src="https://www.ispl-t10.com/images/team-master/players/vDzHWYgVYcN4GAVFbjd9zyk0MLylzGBb2rRgh8md.png"
                    alt="teams01"
                  />
                  <div className="bat-icon">
                    <img src={bat} alt="BATTERS" className="img-fluid" />
                  </div>
                </figure>
                <div className="design">
                  <p>ketan mhatre</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-3">
              <div className="crm-teams01">
                <figure>
                  <img
                    src="https://www.ispl-t10.com/images/team-master/players/vDnYYQnQVkhOL96nVcj5vKpmYZ3pINUKcNRQVXfD.png"
                    alt="teams01"
                  />
                  <div className="bat-icon">
                    <img src={bat} alt="BATTERS" className="img-fluid" />
                  </div>
                </figure>
                <div className="design">
                  <p>Sumeet Dhekale</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChennaiSingams;
