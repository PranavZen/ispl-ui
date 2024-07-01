import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../components/common/sectiontitletext/SectionTitle";
import { bat, redball } from "../../assets/imagePath";
import { Helmet } from "react-helmet-async";

function TigersOfKolkata() {
  return (
    <section className="teamPage">
      <Helmet>
        <title>ISPL T10 | Tigers Of Kolkata</title>
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
        className="about-page-main comon-sub-page-main  d-inline-block w-100"
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
                    className=" img-fluid"
                    loading="lazy"
                  />
                </Link>
              </div>
              <div className="col text-center">
                <Link to="/team-list/majhi-mumbai">
                  <img
                    src="https://www.ispl-t10.com/images/team-master/teams/l0WvkaiAK483mzsHgU44h4uAXFkzUr9PWWd8D3DU.png"
                    alt=""
                    className=" img-fluid"
                    loading="lazy"
                  />
                </Link>
              </div>
              <div className="col text-center">
                <Link to="/team-list/tiigers-of-kolkata">
                  <img
                    src="https://www.ispl-t10.com/images/team-master/teams/5PVSNCiBIBHYA94YN0ezkMMglhucXbX0JmIM2Svm.png"
                    alt=""
                    className="bg-info img-fluid"
                    loading="lazy"
                  />
                </Link>
              </div>
              <div className="col text-center">
                <Link to="/team-list/srinagar-ke-veer">
                  <img
                    src="https://www.ispl-t10.com/images/team-master/teams/bbe0uutmwUfRVW4FrpGg7EmHBs8kOd1DSimaIKjZ.png"
                    alt=""
                    className=" img-fluid"
                    loading="lazy"
                  />
                </Link>
              </div>
              <div className="col text-center">
                <Link to="/team-list/kvn-bangalore-strikers">
                  <img
                    src="https://www.ispl-t10.com/images/team-master/teams/jzVTaGm8x3sv0HJFsbDELFR0juXkWCKUdturAY7e.png"
                    alt=""
                    className=" img-fluid"
                    loading="lazy"
                  />
                </Link>
              </div>
              <div className="col text-center">
                <Link to="/team-list/falcon-risers-hyderabad">
                  <img
                    src="https://www.ispl-t10.com/images/team-master/teams/swp1DD0AQL6lQPc9SbwPlWNPx6IjBCosZDzBFZ1t.png"
                    alt=""
                    className=" img-fluid"
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
                        src="https://www.ispl-t10.com/images/team-master/teams/5PVSNCiBIBHYA94YN0ezkMMglhucXbX0JmIM2Svm.png"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="team-name align-text-center">
                    <h2>TIIGERS OF KOLKATA</h2>
                  </div>
                </div>
                <div className="col-lg-5 col-md-12">
                  <div className="team-detail-text">
                    <p>
                      <span>Owner</span> <b>-</b> Aksha Kamboj / Saif Ali Khan
                      &amp; Kareena Kapoor Khan
                    </p>
                    <p>
                      <span>Coach</span> <b>-</b> Prathamesh Pawar
                    </p>
                    <p>
                      <span>Venue</span> <b>-</b> Kolkata
                    </p>
                    <p>
                      <span>Captain</span>
                      <b>-</b>Prathamesh Pawar
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
          <div className="container">
            <SectionTitle titleText="Bowlers" />
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 g-lg-5 ">
              <div className="col-6 col-sm-3">
                <div className="crm-teams01">
                  <figure>
                    <img
                      src="https://www.ispl-t10.com/images/team-master/players/fdtBm9Yr2yrQspeLX7vSDqJspbCoPLfTBd5IQKpF.png"
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
                    <p>Akhil singh</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="crm-teams01">
                  <figure>
                    <img
                      src="https://www.ispl-t10.com/images/team-master/players/UN281IrE7RwwUuHvefrKtQAynxsuhwFeGdz7V2Bd.png"
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
                    <p>Pritpal singh Pt Johnson</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="crm-teams01">
                  <figure>
                    <img
                      src="https://www.ispl-t10.com/images/team-master/players/0FvCeUjrWL4lkB35t7AAv90R8yrGqHr2WpgZvtVr.png"
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
                    <p>Raju mukhiya</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="crm-teams01">
                  <figure>
                    <img
                      src="https://www.ispl-t10.com/images/team-master/players/BljMowUrOkZV2hifsUoyEvpnZPSrLQkSO1CC55H9.png"
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
                    <p>Shivam Kumar</p>
                  </div>
                </div>
              </div>
            </div>

            <SectionTitle titleText="Batters" />
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 g-lg-5 ">
              <div className="col-6 col-sm-3">
                <div className="crm-teams01">
                  <figure>
                    <img
                      src="https://www.ispl-t10.com/images/team-master/players/Y2OxVTgSxhwj6QorOipSnuHVkAiMLjxMAsb8HDjG.png"
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
                    <p>Munna Shaikh</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="crm-teams01">
                  <figure>
                    <img
                      src="https://www.ispl-t10.com/images/team-master/players/9d5FIW9KEY2BSTsPxaIGC8ep5qLhUE447XkxbrSg.png"
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
                    <p>Jonty Sarkar</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="crm-teams01">
                  <figure>
                    <img
                      src="https://www.ispl-t10.com/images/team-master/players/QC4wXTHREM7clpnVaLUeSy7wJvMBFJqhM9ZsrUCh.png"
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
                    <p>Fardeen Kazi</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="crm-teams01">
                  <figure>
                    <img
                      src="https://www.ispl-t10.com/images/team-master/players/kbjV3BU2ai0Thqf5ua5QSwGU2Eg77H4aekJI9YND.png"
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
                    <p>Pradeep Patil</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="crm-teams01">
                  <figure>
                    <img
                      src="https://www.ispl-t10.com/images/team-master/players/ruUBmBQgYRb5TiDp4XwvDsOU59xTucUamajafMLw.png"
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
                    <p>Prathamesh Pawar</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="crm-teams01">
                  <figure>
                    <img
                      src="https://www.ispl-t10.com/images/team-master/players/vQh37ZlHCkZcBhHmarxqpweSvPSCe2dSeF8BacBs.png"
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
                    <p>Rajat Mundhe</p>
                  </div>
                </div>
              </div>
            </div>

            <SectionTitle titleText="All Rounders" />
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 g-lg-5 ">
              <div className="col-6 col-sm-3">
                <div className="crm-teams01">
                  <figure>
                    <img
                      src="https://www.ispl-t10.com/images/team-master/players/Ew5qWMgfzmWpCHTAiInZlRqAZyl1gXOxT7hnExPY.png"
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
                    <p>Babbu Rana</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="crm-teams01">
                  <figure>
                    <img
                      src="https://www.ispl-t10.com/images/team-master/players/PFIcatoj2LpTOi6KshOXeYrJqXXCj2r4jdZH3VLt.png"
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
                    <p>Shivam Kamboj</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="crm-teams01">
                  <figure>
                    <img
                      src="https://www.ispl-t10.com/images/team-master/players/B6ucXOVZ8akamiSYKSCokoWbMpLZz6CskTKc9tV5.png"
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
                    <p>R.Bala Chandran</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="crm-teams01">
                  <figure>
                    <img
                      src="https://www.ispl-t10.com/images/team-master/players/ZCWzhjj3X4WW5ri6OEQDt92KfN6zSU1pOW76HZs9.png"
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
                    <p>Sagar Bhandary</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="crm-teams01">
                  <figure>
                    <img
                      src="https://www.ispl-t10.com/images/team-master/players/jCqGGAbQxsdDASMrEJMWJuJrpfzI6O3e2xsK1l7B.png"
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
                    <p>Bhavesh Pawar</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="crm-teams01">
                  <figure>
                    <img
                      src="https://www.ispl-t10.com/images/team-master/players/9EgmCjZDLVNngqBFru34OcdYdhe4ES5hJhUoY8b8.png"
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
                    <p>uzair shaikh</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TigersOfKolkata;
