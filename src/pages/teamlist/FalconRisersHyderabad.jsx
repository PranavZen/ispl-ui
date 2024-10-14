import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../components/common/sectiontitletext/SectionTitle";
import { bat, redball } from "../../assets/imagePath";
import { Helmet } from "react-helmet-async";

function FalconRisersHyderabad() {
  return (
    <section className="teamPage">
      <Helmet>
        <title>ISPL T10 | Falcon Risers Hyderabad</title>
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
      <div
        className="about-page-main comon-sub-page-main d-inline-block w-100 bgGregdwint"
        
      >
        <div className="about-club-top">
          <div className="container">
            <div className="row row-cols-3 row-cols-md-6 team-logos justify-content-center">
              <div className="col text-center">
                <Link to="/team-list/chennai-singams">
                  <img
                    src="https://my.ispl-t10.com/images/team-master/teams/bjbZn8mrGvQLq8YZBccwvPge7kXwtCo17zdDGZyl.png"
                    alt=""
                    className="img-fluid"
                    loading="lazy"
                  />
                </Link>
              </div>
              <div className="col text-center">
                <Link to="/team-list/majhi-mumbai">
                  <img
                    src="https://my.ispl-t10.com/images/team-master/teams/l0WvkaiAK483mzsHgU44h4uAXFkzUr9PWWd8D3DU.png"
                    alt=""
                    className="img-fluid"
                    loading="lazy"
                  />
                </Link>
              </div>
              <div className="col text-center">
                <Link to="/team-list/tiigers-of-kolkata">
                  <img
                    src="https://my.ispl-t10.com/images/team-master/teams/5PVSNCiBIBHYA94YN0ezkMMglhucXbX0JmIM2Svm.png"
                    alt=""
                    className="img-fluid"
                    loading="lazy"
                  />
                </Link>
              </div>
              <div className="col text-center">
                <Link to="/team-list/srinagar-ke-veer">
                  <img
                    src="https://my.ispl-t10.com/images/team-master/teams/bbe0uutmwUfRVW4FrpGg7EmHBs8kOd1DSimaIKjZ.png"
                    alt=""
                    className="img-fluid"
                    loading="lazy"
                  />
                </Link>
              </div>
              <div className="col text-center">
                <Link to="/team-list/kvn-bangalore-strikers">
                  <img
                    src="https://my.ispl-t10.com/images/team-master/teams/jzVTaGm8x3sv0HJFsbDELFR0juXkWCKUdturAY7e.png"
                    alt=""
                    className="img-fluid"
                    loading="lazy"
                  />
                </Link>
              </div>
              <div className="col text-center">
                <Link to="/team-list/falcon-risers-hyderabad">
                  <img
                    src="https://my.ispl-t10.com/images/team-master/teams/swp1DD0AQL6lQPc9SbwPlWNPx6IjBCosZDzBFZ1t.png"
                    alt=""
                    className="bg-info  img-fluid"
                    loading="lazy"
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
                        src="https://my.ispl-t10.com/images/team-master/teams/swp1DD0AQL6lQPc9SbwPlWNPx6IjBCosZDzBFZ1t.png"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="team-name align-text-center">
                    <h2>FALCON RISERS HYDERABAD</h2>
                  </div>
                </div>
                <div className="col-lg-5 col-md-12">
                  <div className="team-detail-text">
                    <p>
                      <span>Owner</span> <b>-</b> Irfan Razack / Ram Charan
                    </p>
                    <p>
                      <span>Coach</span> <b>-</b> Nilesh Pardesi
                    </p>
                    <p>
                      <span>Venue</span> <b>-</b> Hyderabad
                    </p>
                    <p>
                      <span>Captain</span>
                      <b>-</b>Krishna Satpute
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
          <SectionTitle titleText="Bowlers" />
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 g-lg-5 ">
            <div className="col-12 col-md-6">
              <Link to="/matches/#statsId">
                <div className="crm-teams01">
                  <figure>
                    <img
                      src="https://my.ispl-t10.com/images/team-master/players/HohDNwETVNGiWMq52WkrK3lM5r10lJ9VNEiAF03F.png"
                      alt="teams01"
                      loading="lazy"
                    />
                    <div className="bat-icon">
                      <img
                        src={redball}
                        alt="BATTERS"
                        className="img-fluid"
                        loading="lazy"
                      />
                    </div>
                  </figure>
                  <div className="design">
                    <p>Anand Baghel</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-12 col-md-6">
              <Link to="/matches/#statsId">
                <div className="crm-teams01">
                  <figure>
                    <img
                      src="https://my.ispl-t10.com/images/team-master/players/o9S2nh08oBvpAQL2oTGYq7Aoo9DfMEPPs95yiSvA.png"
                      alt="teams01"
                      loading="lazy"
                    />
                    <div className="bat-icon">
                      <img
                        src={redball}
                        alt="BATTERS"
                        className="img-fluid"
                        loading="lazy"
                      />
                    </div>
                  </figure>
                  <div className="design">
                    <p>Anurag Sarshar</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-12 col-md-6">
              <Link to="/matches/#statsId">
                <div className="crm-teams01">
                  <figure>
                    <img
                      src="https://my.ispl-t10.com/images/team-master/players/OOpVIa6d6GzYQ6iQnV2oaSxao0GuyW8InJaPkdJT.png"
                      alt="teams01"
                      loading="lazy"
                    />
                    <div className="bat-icon">
                      <img
                        src={redball}
                        alt="BATTERS"
                        className="img-fluid"
                        loading="lazy"
                      />
                    </div>
                  </figure>
                  <div className="design">
                    <p>YASAR ARAFATH Md</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-12 col-md-6">
              <Link to="/matches/#statsId">
                <div className="crm-teams01">
                  <figure>
                    <img
                      src="https://my.ispl-t10.com/images/team-master/players/Po4KqSctXY2UcvmkRZ2708rAfI0s86fRaEiaCpb3.png"
                      alt="teams01"
                      loading="lazy"
                    />
                    <div className="bat-icon">
                      <img
                        src={redball}
                        alt="BATTERS"
                        className="img-fluid"
                        loading="lazy"
                      />
                    </div>
                  </figure>
                  <div className="design">
                    <p>Vicky Bhoir</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <SectionTitle titleText="All Rounders" />
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 g-lg-5 ">
            <div className="col-12 col-md-6">
              <Link to="/matches/#statsId">
                <div className="crm-teams01">
                  <figure>
                    <img
                      src="https://my.ispl-t10.com/images/team-master/players/KDQRTIX89KrTISHZ1bn0zSIBGOtEqtgNfhf0mlkb.png"
                      alt="teams01"
                      loading="lazy"
                    />
                    <div className="bat-icon allRoundBox">
                      <img
                        src={redball}
                        alt="BOWLERS"
                        className="img-fluid"
                        loading="lazy"
                      />
                      <img
                        src={bat}
                        alt="BOWLERS"
                        className="img-fluid"
                        loading="lazy"
                      />
                    </div>
                  </figure>
                  <div className="design">
                    <p>Irfan Patel</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-12 col-md-6">
              <Link to="/matches/#statsId">
                <div className="crm-teams01">
                  <figure>
                    <img
                      src="https://my.ispl-t10.com/images/team-master/players/256VAA14IXjFBl5IuAH3AVHwCM9V1SoPXRzYq5jV.png"
                      alt="teams01"
                      loading="lazy"
                    />
                    <div className="bat-icon allRoundBox">
                      <img
                        src={redball}
                        alt="BOWLERS"
                        className="img-fluid"
                        loading="lazy"
                      />
                      <img
                        src={bat}
                        alt="BOWLERS"
                        className="img-fluid"
                        loading="lazy"
                      />
                    </div>
                  </figure>
                  <div className="design">
                    <p>Furqan Khan</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-12 col-md-6">
              <Link to="/matches/#statsId">
                <div className="crm-teams01">
                  <figure>
                    <img
                      src="https://my.ispl-t10.com/images/team-master/players/VkDqnJmG6bjRy0LJy7Rl1SM87NUUWonK4nuUYp7z.png"
                      alt="teams01"
                      loading="lazy"
                    />
                    <div className="bat-icon allRoundBox">
                      <img
                        src={redball}
                        alt="BOWLERS"
                        className="img-fluid"
                        loading="lazy"
                      />
                      <img
                        src={bat}
                        alt="BOWLERS"
                        className="img-fluid"
                        loading="lazy"
                      />
                    </div>
                  </figure>
                  <div className="design">
                    <p>Ubaid Bashir</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-12 col-md-6">
              <Link to="/matches/#statsId">
                <div className="crm-teams01">
                  <figure>
                    <img
                      src="https://my.ispl-t10.com/images/team-master/players/yBcheThShlEvimEIcck4D1PotHzKpoemtzSILLZT.png"
                      alt="teams01"
                      loading="lazy"
                    />
                    <div className="bat-icon allRoundBox">
                      <img
                        src={redball}
                        alt="BOWLERS"
                        className="img-fluid"
                        loading="lazy"
                      />
                      <img
                        src={bat}
                        alt="BOWLERS"
                        className="img-fluid"
                        loading="lazy"
                      />
                    </div>
                  </figure>
                  <div className="design">
                    <p>VARUN KUMAR</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-12 col-md-6">
              <Link to="/matches/#statsId">
                <div className="crm-teams01">
                  <figure>
                    <img
                      src="https://my.ispl-t10.com/images/team-master/players/10H6Pci9IlzzDsLf8ICUFcIhdmPnaRNoIQfHVBPk.png"
                      alt="teams01"
                      loading="lazy"
                    />
                    <div className="bat-icon allRoundBox">
                      <img
                        src={redball}
                        alt="BOWLERS"
                        className="img-fluid"
                        loading="lazy"
                      />
                      <img
                        src={bat}
                        alt="BOWLERS"
                        className="img-fluid"
                        loading="lazy"
                      />
                    </div>
                  </figure>
                  <div className="design">
                    <p>C. Dhilip ranjan C. Dhilip ranjan</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-12 col-md-6">
              <Link to="/matches/#statsId">
                <div className="crm-teams01">
                  <figure>
                    <img
                      src="https://my.ispl-t10.com/images/team-master/players/nu25kJAnW2xvI39suVxWLGopOB6b8JzvT3i8bFi6.png"
                      alt="teams01"
                      loading="lazy"
                    />
                    <div className="bat-icon allRoundBox">
                      <img
                        src={redball}
                        alt="BOWLERS"
                        className="img-fluid"
                        loading="lazy"
                      />
                      <img
                        src={bat}
                        alt="BOWLERS"
                        className="img-fluid"
                        loading="lazy"
                      />
                    </div>
                  </figure>
                  <div className="design">
                    <p>Vivek Mohanan</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-12 col-md-6">
              <Link to="/matches/#statsId">
                <div className="crm-teams01">
                  <figure>
                    <img
                      src="https://my.ispl-t10.com/images/team-master/players/7o9DjhUR8RkZl0BJIaFbtStijYELGjyE2Y2XxuAA.png"
                      alt="teams01"
                      loading="lazy"
                    />
                    <div className="bat-icon allRoundBox">
                      <img
                        src={redball}
                        alt="BOWLERS"
                        className="img-fluid"
                        loading="lazy"
                      />
                      <img
                        src={bat}
                        alt="BOWLERS"
                        className="img-fluid"
                        loading="lazy"
                      />
                    </div>
                  </figure>
                  <div className="design">
                    <p>Prathamesh Thakare</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-12 col-md-6">
              <Link to="/matches/#statsId">
                <div className="crm-teams01">
                  <figure>
                    <img
                      src="https://my.ispl-t10.com/images/team-master/players/7XuFQjFyF5iajNkUSsomcElvYpD4mNqtVHR2Zv5G.png"
                      alt="teams01"
                      loading="lazy"
                    />
                    <div className="bat-icon allRoundBox">
                      <img
                        src={redball}
                        alt="BOWLERS"
                        className="img-fluid"
                        loading="lazy"
                      />
                      <img
                        src={bat}
                        alt="BOWLERS"
                        className="img-fluid"
                        loading="lazy"
                      />
                    </div>
                  </figure>
                  <div className="design">
                    <p>Vishwajit Thakur</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <SectionTitle titleText="Batters" />
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 g-lg-5 ">
            <div className="col-12 col-md-6">
              <Link to="/matches/#statsId">
                <div className="crm-teams01">
                  <figure>
                    <img
                      src="https://my.ispl-t10.com/images/team-master/players/5tsg92ZQANb0IKl3YgAqplcckdDDp013V2go1mrB.png"
                      alt="teams01"
                      loading="lazy"
                    />
                    <div className="bat-icon">
                      <img
                        src={bat}
                        alt="BATTERS"
                        className="img-fluid"
                        loading="lazy"
                      />
                    </div>
                  </figure>
                  <div className="design">
                    <p>Jagat Sarkar</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-12 col-md-6">
              <Link to="/matches/#statsId">
                <div className="crm-teams01">
                  <figure>
                    <img
                      src="https://my.ispl-t10.com/images/team-master/players/E1UI2Js8qpN6ZptS8m7Z7rjSN9L3574t9myDYQdm.png"
                      alt="teams01"
                      loading="lazy"
                    />
                    <div className="bat-icon">
                      <img
                        src={bat}
                        alt="BATTERS"
                        className="img-fluid"
                        loading="lazy"
                      />
                    </div>
                  </figure>
                  <div className="design">
                    <p>Krishna Satpute</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-12 col-md-6">
              <Link to="/matches/#statsId">
                <div className="crm-teams01">
                  <figure>
                    <img
                      src="https://my.ispl-t10.com/images/team-master/players/0uctvjsifKiO6bKSU5jFJCLybkQ3fEQ9Aa0tpd5N.png"
                      alt="teams01"
                      loading="lazy"
                    />
                    <div className="bat-icon">
                      <img
                        src={bat}
                        alt="BATTERS"
                        className="img-fluid"
                        loading="lazy"
                      />
                    </div>
                  </figure>
                  <div className="design">
                    <p>Nitin Anili Matunge</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-12 col-md-6">
              <Link to="/matches/#statsId">
                <div className="crm-teams01">
                  <figure>
                    <img
                      src="https://my.ispl-t10.com/images/team-master/players/aFVK3zgAmRuoA1ERoJp2bWf7TNsqLQ4pmw94MYab.png"
                      alt="teams01"
                      loading="lazy"
                    />
                    <div className="bat-icon">
                      <img
                        src={bat}
                        alt="BATTERS"
                        className="img-fluid"
                        loading="lazy"
                      />
                    </div>
                  </figure>
                  <div className="design">
                    <p>Shreyash Kadam</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FalconRisersHyderabad;
