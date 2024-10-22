import React from "react";
import "../isplpage/isplpageStyles.css";
import TeamOwners from "../../components/pageComponents/isplPageComponents/teamOwnersSection/TeamOwners";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function IsplPage() {
  return (
    <section className=" w-100 body-part pt-0 customIsplPage">
      <Helmet>
        <title>ISPL T10 | ISPL</title>
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
      <div className="news-sectiondiv d-inline-block w-100">
        <div className="container">
          <div className="mindle-heading text-center">
            <h1>
              {" "}
              Core <span> Commitee </span>{" "}
            </h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-3 col-12 pb-5 ">
              <div className="outer-layer isplRad">
                <img
                  src="https://my.ispl-t10.com/assets/img/sachin_tendulkar.png"
                  alt="Mentor-img"
                  className="card-img-top rounded-circle-7 card-image "
                />
              </div>
              <div className="card-body text-center">
                <h5
                  className="card-title"
                  style={{
                    marginBottom: "0.2vw",
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  MR. SACHIN TENDULKAR
                </h5>
                <h5
                  id="mentor-ID "
                  style={{ color: "#fff", fontWeight: "bold" }}
                >
                  CORE COMMITEE MEMBER
                </h5>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-12 pb-5 ">
              <div className="outer-layer isplRad">
                <img
                  src="https://my.ispl-t10.com/assets/img/Amol_mentor.png"
                  alt="Mentor-img"
                  className="card-img-top rounded-circle-7 card-image "
                />
              </div>
              <div className="card-body text-center">
                <h5
                  className="card-title"
                  style={{
                    marginBottom: "0.2vw",
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  Late Mr. AMOL KALE
                </h5>
                <h5
                  id="mentor-ID "
                  style={{ color: "#fff", fontWeight: "bold" }}
                >
                  CORE COMMITEE MEMBER
                </h5>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 col-12 pb-5 ">
              <div className="outer-layer isplRad">
                <img
                  src="https://my.ispl-t10.com/assets/img/Aashish_mentor.png"
                  alt="Mentor-img"
                  className="card-img-top rounded-circle-7 card-image "
                />
              </div>
              <div className="card-body text-center">
                <h5
                  className="card-title"
                  style={{
                    marginBottom: "0.2vw",
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  MR. ASHISH SHELAR
                </h5>
                <h5
                  id="mentor-ID "
                  style={{ color: "#fff", fontWeight: "bold" }}
                >
                  BCCI TREASURER
                </h5>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-12 pb-5 ">
              <div className="outer-layer isplRad">
                <img
                  src="https://my.ispl-t10.com/assets/img/suraj sawant.png"
                  alt="Mentor-img"
                  className="card-img-top rounded-circle-7 card-image "
                />
              </div>
              <div className="card-body text-center">
                <h5
                  className="card-title"
                  style={{
                    marginBottom: "0.2vw",
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  MR. SURAJ SAMAT
                </h5>
                <h5
                  id="mentor-ID "
                  style={{ color: "#fff", fontWeight: "bold" }}
                >
                  LEAGUE COMMISSIONER
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="mindle-heading text-center">
            <h1>
              {" "}
              LEAGUE <span> OPERATIONS </span>{" "}
            </h1>
          </div>
          <div className="row justify-content-center gap-5">
            <div className="col-md-3 ">
              <div className="outer-layer isplRad">
                <img
                  src="https://my.ispl-t10.com/assets/img/deepak_chauhan.png"
                  alt="MR. DIPAK CHAUHAN"
                  className="card-img-top rounded-circle-7 card-image "
                />
              </div>
              <div className="card-body text-center">
                <h5
                  className="card-title"
                  style={{
                    marginBottom: "0.2vw",
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  MR. DIPAK CHAUHAN
                </h5>
                <h5
                  id="mentor-ID"
                  style={{ color: "#fff", fontWeight: "bold" }}
                >
                  LEAGUE PRESIDENT
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="top-list-turnament">
        <div className="container">
          <div className="mindle-heading text-center">
            <h5>Presenting</h5>
            <h1>
              <span>proud team Owner</span>
            </h1>
          </div>
          <span className="bgi-text light-tsext01">Presenting</span>
          <TeamOwners />
        </div>
      </div>

      <div
        className="news-sectiondiv d-inline-block w-100"
        style={{ padding: "40px 0px 80px" }}
      >
        <div className="container">
          <div className="mindle-heading text-center">
            <h1>
              {" "}
              MEdia <span> </span>{" "}
            </h1>
          </div>
          <div className="row row-cols-2 row-cols-lg-4 mt-0 g-4 mt-4">
            <div className="col">
              <Link
                data-fancybox
                to="https://my.ispl-t10.com/assets/img/media/m9.jpeg"
                className="comon-links-divb05"
              >
                <figure>
                  <img
                    className="img-fluid"
                    src="https://my.ispl-t10.com/assets/img/media/m9.jpeg"
                    alt="pbnm"
                    loading="lazy"
                  />
                </figure>
              </Link>
            </div>
            <div className="col">
              <Link
                data-fancybox
                to="https://my.ispl-t10.com/assets/img/media/m10.jpg"
                className="comon-links-divb05"
              >
                <figure>
                  <img
                    src="https://my.ispl-t10.com/assets/img/media/m10.jpg"
                    alt="pbnm"
                    loading="lazy"
                  />
                </figure>
              </Link>
            </div>
            <div className="col">
              <Link
                data-fancybox
                to="https://my.ispl-t10.com/assets/img/media/m11.jpeg"
                className="comon-links-divb05"
              >
                <figure>
                  <img
                    src="https://my.ispl-t10.com/assets/img/media/m11.jpeg"
                    alt="pbnm"
                    loading="lazy"
                  />
                </figure>
              </Link>
            </div>
            <div className="col">
              <Link
                data-fancybox
                to="https://my.ispl-t10.com/assets/img/media/m4.jpg"
                className="comon-links-divb05"
              >
                <figure>
                  <img
                    src="https://my.ispl-t10.com/assets/img/media/m4.jpg"
                    alt="pbnm"
                    loading="lazy"
                  />
                </figure>
              </Link>
            </div>
            <div className="col">
              <Link
                data-fancybox
                to="https://my.ispl-t10.com/assets/img/media/m5.jpg"
                className="comon-links-divb05"
              >
                <figure>
                  <img
                    src="https://my.ispl-t10.com/assets/img/media/m5.jpg"
                    alt="pbnm"
                    loading="lazy"
                  />
                </figure>
              </Link>
            </div>
            <div className="col">
              <Link
                data-fancybox
                to="https://my.ispl-t10.com/assets/img/media/m6.jpg"
                className="comon-links-divb05"
              >
                <figure>
                  <img
                    src="https://my.ispl-t10.com/assets/img/media/m6.jpg"
                    alt="pbnm"
                    loading="lazy"
                  />
                </figure>
              </Link>
            </div>
            <div className="col">
              <Link
                data-fancybox
                to="https://my.ispl-t10.com/assets/img/media/m7.jpg"
                className="comon-links-divb05"
              >
                <figure>
                  <img
                    src="https://my.ispl-t10.com/assets/img/media/m7.jpg"
                    alt="pbnm"
                    loading="lazy"
                  />
                </figure>
              </Link>
            </div>
            <div className="col">
              <Link
                data-fancybox
                to="https://my.ispl-t10.com/assets/img/media/m8.jpg"
                className="comon-links-divb05"
              >
                <figure>
                  <img
                    src="https://my.ispl-t10.com/assets/img/media/m8.jpg"
                    alt="pbnm"
                    loading="lazy"
                  />
                </figure>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IsplPage;
