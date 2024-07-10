import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../components/common/sectiontitletext/SectionTitle";
import { bat, redball } from "../../assets/imagePath";
import { Helmet } from "react-helmet-async";

function SrinagarKeVeer() {
  return (
    <section className="teamPage">
      <Helmet>
        <title>ISPL T10 | Srinagar Ke Veer</title>
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
            "url(https://my.ispl-t10.com/assets/image/ispl-bg.jpg)",
        }}
      >
        <div className="about-club-top">
          <div className="container">
            <div className="row row-cols-3 row-cols-md-6 team-logos justify-content-center">
              <div className="col text-center">
                <Link to="/team-list/chennai-singams">
                  <img
                    src="https://my.ispl-t10.com/images/team-master/teams/bjbZn8mrGvQLq8YZBccwvPge7kXwtCo17zdDGZyl.png"
                    alt=""
                    className=" img-fluid"
                    loading="lazy"
                  />
                </Link>
              </div>
              <div className="col text-center">
                <Link to="/team-list/majhi-mumbai">
                  <img
                    src="https://my.ispl-t10.com/images/team-master/teams/l0WvkaiAK483mzsHgU44h4uAXFkzUr9PWWd8D3DU.png"
                    alt=""
                    className=" img-fluid"
                    loading="lazy"
                  />
                </Link>
              </div>
              <div className="col text-center">
                <Link to="/team-list/tiigers-of-kolkata">
                  <img
                    src="https://my.ispl-t10.com/images/team-master/teams/5PVSNCiBIBHYA94YN0ezkMMglhucXbX0JmIM2Svm.png"
                    alt=""
                    className=" img-fluid"
                    loading="lazy"
                  />
                </Link>
              </div>
              <div className="col text-center">
                <Link to="/team-list/srinagar-ke-veer">
                  <img
                    src="https://my.ispl-t10.com/images/team-master/teams/bbe0uutmwUfRVW4FrpGg7EmHBs8kOd1DSimaIKjZ.png"
                    alt=""
                    className="bg-info img-fluid"
                    loading="lazy"
                  />
                </Link>
              </div>
              <div className="col text-center">
                <Link to="/team-list/kvn-bangalore-strikers">
                  <img
                    src="https://my.ispl-t10.com/images/team-master/teams/jzVTaGm8x3sv0HJFsbDELFR0juXkWCKUdturAY7e.png"
                    alt=""
                    className=" img-fluid"
                    loading="lazy"
                  />
                </Link>
              </div>
              <div className="col text-center">
                <Link to="/team-list/falcon-risers-hyderabad">
                  <img
                    src="https://my.ispl-t10.com/images/team-master/teams/swp1DD0AQL6lQPc9SbwPlWNPx6IjBCosZDzBFZ1t.png"
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
                        src="https://my.ispl-t10.com/images/team-master/teams/bbe0uutmwUfRVW4FrpGg7EmHBs8kOd1DSimaIKjZ.png"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="team-name align-text-center">
                    <h2>SRINAGAR KE VEER</h2>
                  </div>
                </div>
                <div className="col-lg-5 col-md-12">
                  <div className="team-detail-text">
                    <p>
                      <span>Owner</span> <b>-</b> Sunit Morarjee / Akshay Kumar
                    </p>
                    <p>
                      <span>Coach</span> <b>-</b> Omkar Desai
                    </p>
                    <p>
                      <span>Venue</span> <b>-</b> Srinagar
                    </p>
                    <p>
                      <span>Captain</span>
                      <b>-</b>Omkar Desai
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
              <div className="crm-teams01">
                <figure>
                  <img
                    src="https://my.ispl-t10.com/images/team-master/players/OHFgNRNVSmCaVDlQUtAxjQ7yEnGOu7mf6rOPtDYp.png"
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
                  <p>Navneet singh Parihar</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="crm-teams01">
                <figure>
                  <img
                    src="https://my.ispl-t10.com/images/team-master/players/bBMy7OdKcRQ2F4JPjwVOJgtVyWGrlq7oN7SGaEJX.png"
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
                  <p>ADITYA BABBAR</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="crm-teams01">
                <figure>
                  <img
                    src="https://my.ispl-t10.com/images/team-master/players/2rEznNgENV5e0gQ8XKzGnr2Q7Its3dd4fGbxsO9H.png"
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
                  <p>kavinram rameshbabu</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="crm-teams01">
                <figure>
                  <img
                    src="https://my.ispl-t10.com/images/team-master/players/lP6B7FIlZVD9xY3YrNmbnI4LjESlwqSrxAAswNgE.png"
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
                  <p>Rohit Yadav</p>
                </div>
              </div>
            </div>
          </div>

          <SectionTitle titleText="All Rounders" />
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 g-lg-5 ">
            <div className="col-12 col-md-6">
              <div className="crm-teams01">
                <figure>
                  <img
                    src="https://my.ispl-t10.com/images/team-master/players/UqwI3uNqgVvrdgGQfYyR0OwfgRkTxzrmxZPOHXVq.png"
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
                  <p>TANISH Naik</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="crm-teams01">
                <figure>
                  <img
                    src="https://my.ispl-t10.com/images/team-master/players/8rC8UOOjzPfFYJJGKj76DtHPjDQFb5bXiuO8j2LU.png"
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
                  <p>Lokesh Lokesh</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="crm-teams01">
                <figure>
                  <img
                    src="https://my.ispl-t10.com/images/team-master/players/7xt2iaoskbv3Ti5MSeCXrsK6l5e7EgoVL3rU9rxh.png"
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
                  <p>Deepak Dogra</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="crm-teams01">
                <figure>
                  <img
                    src="https://my.ispl-t10.com/images/team-master/players/rS79KXPc1UqjAaQ0Xd4yjExNcAOWQ0gojjHUHnNf.png"
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
                  <p>Ahmed Askari</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="crm-teams01">
                <figure>
                  <img
                    src="https://my.ispl-t10.com/images/team-master/players/YCXadIWYCsvCGSoH6ExoOacBbmxMTf7wdEe0B7vb.png"
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
                  <p>Aishwary ramnarayan surve Surve</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="crm-teams01">
                <figure>
                  <img
                    src="https://my.ispl-t10.com/images/team-master/players/vLJzFYtyXPQmxqAlg2IbMwWvO1SqaTL2ecgua3WV.png"
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
                  <p>BHUSHAN Gole</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="crm-teams01">
                <figure>
                  <img
                    src="https://my.ispl-t10.com/images/team-master/players/FjvN2g2mGzGAysXgJQ4AxV9z0ehwmHQ41nH6sGZV.png"
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
                  <p>Omkar Desai</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="crm-teams01">
                <figure>
                  <img
                    src="https://my.ispl-t10.com/images/team-master/players/bcl7sPAG43r7bostQRbMCVrsVu0qiDvxpqHpBOTu.png"
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
                  <p>Pritam Bari</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="crm-teams01">
                <figure>
                  <img
                    src="https://my.ispl-t10.com/images/team-master/players/c5Z3G5EAqF4O9uDIIOiCZjNe3Ojf9IaPWd8CZPyS.png"
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
                  <p>Rajesh Sorte</p>
                </div>
              </div>
            </div>
          </div>

          <SectionTitle titleText="Batters" />
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 g-lg-5 ">
            <div className="col-12 col-md-6">
              <div className="crm-teams01">
                <figure>
                  <img
                    src="https://my.ispl-t10.com/images/team-master/players/uGZXATQdAaSSXz13FFXIFCR4rHRcxvgmwG9gNyvH.png"
                    alt="teams01"
                    loading="lazy"
                  />
                  <div className="bat-icon">
                    <img
                      src={bat}
                      alt="BOWLERS"
                      className="img-fluid"
                      loading="lazy"
                    />
                  </div>
                </figure>
                <div className="design">
                  <p>Mohammed Nadeem</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="crm-teams01">
                <figure>
                  <img
                    src="https://my.ispl-t10.com/images/team-master/players/MUYrFrZB4plpFyOGuiFAREm25N1kOKRQU8MAtbaR.png"
                    alt="teams01"
                    loading="lazy"
                  />
                  <div className="bat-icon">
                    <img
                      src={bat}
                      alt="BOWLERS"
                      className="img-fluid"
                      loading="lazy"
                    />
                  </div>
                </figure>
                <div className="design">
                  <p>Sumesh B</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="crm-teams01">
                <figure>
                  <img
                    src="https://my.ispl-t10.com/images/team-master/players/e3zAQXxwu7liKILJBlDc9YCCGrZeT8evGZvpZmHE.png"
                    alt="teams01"
                    loading="lazy"
                  />
                  <div className="bat-icon">
                    <img
                      src={bat}
                      alt="BOWLERS"
                      className="img-fluid"
                      loading="lazy"
                    />
                  </div>
                </figure>
                <div className="design">
                  <p>Vineet Todkar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SrinagarKeVeer;
