import React from "react";
import "../teamlist/teamspage.css";
import Tabs from "../../components/pageComponents/homePageComponents/pointTableSectionWrap/Tabs";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

function TeamListPage() {
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
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <Link to="/team-list/chennai-singams" className="teamCard">
                      <div
                        className="second hero image-alignment"
                        style={{ background: "#003899" }}
                      >
                        <img
                          className="hero-profile-img"
                          src="https://www.ispl-t10.com/images/team-master/teams/bjbZn8mrGvQLq8YZBccwvPge7kXwtCo17zdDGZyl.png"
                          alt=""
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
                            src="https://www.ispl-t10.com/assets/img/Home Page Header Logo.png"
                            alt=""
                          />
                        </div>
                        <div className="hero-description">
                          <p>CHENNAI SINGAMS</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <Link to="/team-list/majhi-mumbai" className="teamCard">
                      <div
                        className="second hero image-alignment"
                        style={{ background: "#118100" }}
                      >
                        <img
                          className="hero-profile-img"
                          src="https://www.ispl-t10.com/images/team-master/teams/l0WvkaiAK483mzsHgU44h4uAXFkzUr9PWWd8D3DU.png"
                          alt=""
                        />
                        <div
                          className="hero-description-bk"
                          style={{
                            backgroundImage:
                              "linear-gradient(-20deg, #42da1c, #000000)",
                          }}
                        ></div>
                        <div className="hero-logo">
                          <img
                            src="https://www.ispl-t10.com/assets/img/Home Page Header Logo.png"
                            alt=""
                          />
                        </div>
                        <div className="hero-description">
                          <p>MAJHI MUMBAI</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <Link to="/team-list/tiigers-of-kolkata" className="teamCard">
                      <div
                        className="second hero image-alignment"
                        style={{ background: "#941a12" }}
                      >
                        <img
                          className="hero-profile-img"
                          src="https://www.ispl-t10.com/images/team-master/teams/5PVSNCiBIBHYA94YN0ezkMMglhucXbX0JmIM2Svm.png"
                          alt=""
                        />
                        <div
                          className="hero-description-bk"
                          style={{
                            backgroundImage:
                              "linear-gradient(-20deg, #910014, #000000)",
                          }}
                        ></div>
                        <div className="hero-logo">
                          <img
                            src="https://www.ispl-t10.com/assets/img/Home Page Header Logo.png"
                            alt=""
                          />
                        </div>
                        <div className="hero-description">
                          <p>TIIGERS OF KOLKATA</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <Link to="/team-list/srinagar-ke-veer" className="teamCard">
                      <div
                        className="second hero image-alignment"
                        style={{ background: "#e8ff00" }}
                      >
                        <img
                          className="hero-profile-img"
                          src="https://www.ispl-t10.com/images/team-master/teams/bbe0uutmwUfRVW4FrpGg7EmHBs8kOd1DSimaIKjZ.png"
                          alt=""
                        />
                        <div
                          className="hero-description-bk"
                          style={{
                            backgroundImage:
                              "linear-gradient(-20deg, #ffe000, #000000)",
                          }}
                        ></div>
                        <div className="hero-logo">
                          <img
                            src="https://www.ispl-t10.com/assets/img/Home Page Header Logo.png"
                            alt=""
                          />
                        </div>
                        <div className="hero-description">
                          <p>SRINAGAR KE VEER</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <Link to="/team-list/kvn-bangalore-strikers" className="teamCard">
                      <div
                        className="second hero image-alignment"
                        style={{ background: "#ff6300c7" }}
                      >
                        <img
                          className="hero-profile-img"
                          src="https://www.ispl-t10.com/images/team-master/teams/jzVTaGm8x3sv0HJFsbDELFR0juXkWCKUdturAY7e.png"
                          alt=""
                        />
                        <div
                          className="hero-description-bk"
                          style={{
                            backgroundImage:
                              "linear-gradient(-20deg, #ff6500, #000000)",
                          }}
                        ></div>
                        <div className="hero-logo">
                          <img
                            src="https://www.ispl-t10.com/assets/img/Home Page Header Logo.png"
                            alt=""
                          />
                        </div>
                        <div className="hero-description">
                          <p>KVN BANGALORE STRIKERS</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <Link to="/team-list/falcon-risers-hyderabad" className="teamCard">
                      <div
                        className="second hero image-alignment"
                        style={{ background: "#4f3b96" }}
                      >
                        <img
                          className="hero-profile-img"
                          src="https://www.ispl-t10.com/images/team-master/teams/swp1DD0AQL6lQPc9SbwPlWNPx6IjBCosZDzBFZ1t.png"
                          alt=""
                        />
                        <div
                          className="hero-description-bk"
                          style={{
                            backgroundImage:
                              "linear-gradient(-20deg, #8812ff, #000000)",
                          }}
                        ></div>
                        <div className="hero-logo">
                          <img
                            src="https://www.ispl-t10.com/assets/img/Home Page Header Logo.png"
                            alt=""
                          />
                        </div>
                        <div className="hero-description">
                          <p>FALCON RISERS HYDERABAD</p>
                        </div>
                      </div>
                    </Link>
                  </div>
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
