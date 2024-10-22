import React from "react";
import "../aboutpage/About.css";
import Tabs from "../../components/pageComponents/homePageComponents/pointTableSectionWrap/Tabs";
import { Helmet } from "react-helmet-async";
const About = () => {
  return (
    <>
      <Helmet>
        <title>ISPL T10 | About Us</title>
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
      <section className="w-100 body-part pt-5 customAboutSectionOne">
        <div className="about-page-main comon-sub-page-main d-inline-block w-100">
          <div className="about-club-top">
            <div className="container">
              <div className="row row-cols-1 row-cols-lg-2 g-lg-5">
                <div className="col position-relative">
                  <figure className="big-img">
                    <img
                      src="https://my.ispl-t10.com/assets/img/stadium1.jpg"
                      alt="pic"
                      loading="lazy"
                    />
                  </figure>
                  <figure className="small-img">
                    <img
                      src="https://my.ispl-t10.com/assets/img/gully2.webp"
                      alt="pic"
                      loading="lazy"
                    />
                  </figure>
                </div>
                <div className="col">
                  <p
                    className="mt-3  text-light"
                    style={{ textAlign: "justify" }}
                  >
                    The ISPL - T10 league stands as a transformative initiative,
                    strategically designed to unite and showcase the finest
                    cricket talent. With a threefold mission of identification,
                    development, and promotion, this league is set to become a
                    catalyst for nurturing grassroots-level cricketers.
                    Recognizing the challenges faced by talented players in
                    gaining visibility and opportunities, ISPL - T10 is
                    positioned to provide a well-organized and competitive
                    platform. This structure not only benefits individual
                    players but also elevates the overall standard of cricket in
                    the region.
                  </p>
                  <p
                    className="my-3 text-light"
                    style={{ textAlign: "justify" }}
                  >
                    The league's forward-thinking approach is underscored by its
                    commitment to building a platform for future cricket
                    superstars. By investing in grassroots development, ISPL -
                    T10 contributes not only to the immediate success of
                    emerging players but also to the sustained growth and
                    excellence of cricket.
                    <br />
                    In essence, the ISPL - T10 league emerges as a pivotal force
                    in shaping the trajectory of cricket. It not only provides a
                    structured pathway for emerging talents but also contributes
                    significantly to the overall dynamism, competitiveness, and
                    enthusiasm surrounding the sport at the grassroots level.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="customHistorySection">
        <Tabs>
          <div
            label="Our Mission"
            spanImg='<i className="fas fa-flag-checkered"></i>'
          >
            <div className="comon-fild-ads1 d-lg-flex align-items-center">
              <figure>
                <img
                  src="https://my.ispl-t10.com/assets/img/stadium1.jpg"
                  alt="bg"
                  loading="lazy"
                />
              </figure>
              <div className="left-history mt-3 mt-lg-0">
                <h2>Empowering grassroots talent</h2>
                <p>
                  At the Indian Street Premier League (ISPL), our mission is to
                  redefine grassroots cricket by providing a robust platform for
                  emerging talents. We aim to unearth raw potential across the
                  nation, fostering a culture of inclusivity, fair play, and
                  skill development. Through the ISPL, we aspire to be the
                  catalyst for nurturing the future stars of Indian cricket.
                </p>
              </div>
            </div>
          </div>
          <div label="Our Vision" spanImg='<i className="far fa-eye"></i>'>
            <div className="comon-fild-ads1 d-lg-flex align-items-center">
              <figure>
                <img
                  src="https://my.ispl-t10.com/assets/img/gully cricket.jpg"
                  alt="bg"
                  loading="lazy"
                />
              </figure>

              <div className="left-history mt-3 mt-lg-0">
                <h2>Transformative force</h2>
                <p>
                  Our vision is to create a dynamic and transformative
                  cricketing ecosystem. The ISPL envisions a landscape where
                  every aspiring cricketer, regardless of background or
                  location, has the opportunity to showcase their talents on a
                  national stage. We strive to be the driving force behind the
                  evolution of cricket at the grassroots level, producing not
                  just exceptional players but ambassadors of the sport who
                  embody the spirit of dedication and sportsmanship. Revolution
                  in Indian cricket with the Indian Street Premier League. 🏏⚡
                  #ZindagiBadlLo
                </p>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
      <section className="w-100 body-part background_image customCoreCommmitteeSection">
        <div className="about-page-main comon-sub-page-main d-inline-block w-100">
          <div className="about-club-top">
            <div
              className="about-page-container"
              style={{ marginLeft: "0vw", marginRight: "0vw" }}
            >
              <div
                className="container"
                style={{
                  paddingBottom: "4rem",
                }}
              >
                <div className="row">
                  <div className="col-lg-11 col-md-10 mx-auto">
                    <div className="lateBoxWr">
                      <h5
                        style={{
                          fontSize: "3.4rem",
                          marginTop: "2.4rem",
                          color: "rgb(0 108 255)",
                          fontWeight: "bold",
                          textAlign: "center",
                          marginBottom: "3rem",
                        }}
                      >
                        In Loving Memory of the <br />
                        Late Mr. Amol Kale{" "}
                      </h5>
                      <div className="profileImgWrap">
                        <img
                          src="https://my.ispl-t10.com/assets/img/Amol_mentor.png"
                          alt="Mentor-img"
                          loading="lazy"
                          className="img-fluid"
                        />
                      </div>
                      <div className="lateContentWrap">
                        <p>
                          Late Mr. Amol Kale, a revered figure in the cricketing
                          and business communities, served as a core committee
                          member of the Indian Street Premier League (ISPL) and
                          held the prestigious position of President of the
                          Mumbai Cricket Association (MCA) Concurrently, he
                          contributed significantly as a full-time member of the
                          Board of Control for Cricket in India (BCCI).
                        </p>
                        <p>
                          A first-generation entrepreneur, industrialist, and
                          angel investor, Mr. Kale brought over 15 years of
                          invaluable experience to drive growth across various
                          industries. His visionary leadership was pivotal in
                          creating new opportunities and spearheading
                          initiatives in service sectors both domestically and
                          internationally.
                        </p>
                        <p>
                          With a strong focus on people development, emerging
                          technologies, innovative business processes, and
                          strategic initiatives, Mr. Kale was instrumental in
                          advancing overseas business ventures and facilitating
                          India entry services.
                        </p>
                        <p>
                          Mr. Kale was a qualified engineer, graduating with a
                          Bachelor of Engineering (BE) degree in Electrical
                          Engineering from Nagpur University in 1997. His
                          dynamic leadership and diverse expertise solidified
                          him as a forward-thinking and influential figure in
                          the realms of cricket administration and business.
                        </p>
                        <p>
                          We all miss him deeply & his dedication, vision &
                          leadership will be missed by all who had the privilege
                          to know and work with him.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-3 mt-5 mb-2"></div>
                  <div className="col-md-9">
                    <h1
                      style={{
                        fontSize: "3.4rem",
                        marginTop: "2.4rem",
                        color: "rgb(0 108 255)",
                        fontWeight: "bold",
                        paddingBottom: "20px",
                      }}
                    >
                      OUR CORE COMMITTEE
                    </h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 mb-5">
                    <div className="outer-layer abtCir">
                      <img
                        src="https://my.ispl-t10.com/assets/img/sachin_tendulkar.png"
                        alt="Mentor-img"
                        loading="lazy"
                        className="card-img-top card-image"
                      />
                    </div>
                  </div>
                  <div className="col-md-9">
                    <h1
                      style={{
                        fontSize: "2.4rem",
                        color: "#fff",
                        fontWeight: "bold",
                      }}
                    >
                      MR. SACHIN TENDULKAR
                    </h1>
                    <p
                      className="my-3 text-light"
                      style={{ textAlign: "justify" }}
                    >
                      Sachin Tendulkar, a cricketing legend known as the "God of
                      Cricket," brings his wealth of experience and passion for
                      the game to the Indian Street Premier League as a core
                      committee member. His iconic career, marked by numerous
                      records and a deep connection to the grassroots of
                      cricket, resonates with the temperament of the league. His
                      involvement reflects his belief in our potential to
                      provide aspiring cricketers a platform to showcase their
                      talent from playing with tennis balls to the international
                      stage.
                    </p>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-3 mb-2">
                    <div className="outer-layer abtCir">
                      <img
                        src="https://my.ispl-t10.com/assets/img/Aashish_mentor.png"
                        alt="Mentor-img"
                        loading="lazy"
                        className="card-img-top card-image"
                      />
                    </div>
                  </div>
                  <div className="col-md-9">
                    <h1
                      style={{
                        fontSize: "2.4rem",
                        color: "#fff",
                        fontWeight: "bold",
                      }}
                    >
                      ADV. ASHISH SHELAR
                    </h1>
                    <p
                      className="my-3 text-light"
                      style={{ textAlign: "justify" }}
                    >
                      Ashish Shelar, our Core Committee Member is a prominent
                      Indian politician and cricket administrator who also
                      serves as the Treasurer of the Board of Control for
                      Cricket in India (BCCI). His multifaceted background,
                      which includes roles in politics and cricket
                      administration, brings a dynamic perspective to the
                      league. His involvement underscores the league's vision to
                      unite cricketing talent and elevate the sport to new
                      heights.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="container"
                style={{
                  borderBottom: "1px solid rgb(255, 255, 255)",
                  paddingBottom: "1.5vw",
                }}
              >
                <div className="row mb-3">
                  <div className="col-md-3 mt-5 mb-2"></div>
                  <div className="col-md-9">
                    <h1
                      style={{
                        fontSize: "3.4rem",
                        color: "rgb(0 108 255)",
                        fontWeight: "bold",
                        paddingBottom: "20px",
                      }}
                    >
                      OUR LEAGUE COMMISSIONER
                    </h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 mb-3">
                    <div className="outer-layer abtCir">
                      <img
                        src="https://my.ispl-t10.com/assets/img/suraj sawant.png"
                        alt="Mentor-img"
                        loading="lazy"
                        className="card-img-top card-image"
                      />
                    </div>
                  </div>
                  <div className="col-md-9">
                    <h1
                      style={{
                        fontSize: "2.4rem",
                        color: "#fff",
                        fontWeight: "bold",
                      }}
                    >
                      MR. SURAJ SAMAT
                    </h1>
                    <p
                      className="my-3 text-light"
                      style={{ textAlign: "justify" }}
                    >
                      Suraj Samat, the League Commissioner of the Indian Street
                      Premier League (ISPL), is a respected business leader with
                      extensive experience in sports management and
                      administration. As a Trustee of the Mumbai Cricket
                      Association for over 14 years and an Apex Council Member,
                      Samat has demonstrated a deep understanding of the needs
                      and challenges faced by sportspersons. His inclusive and
                      supportive approach has helped drive development
                      initiatives and create a more engaging sports experience
                      for all stakeholders.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="container"
                style={{
                  borderBottom: "1px solid rgb(255, 255, 255)",
                  paddingBottom: "1.5vw",
                }}
              >
                <div className="row mt-5 mb-3">
                  <div className="col-md-3 mt-5 mb-2"></div>
                  <div className="col-md-9">
                    <h1
                      style={{
                        fontSize: "3.4rem",
                        color: "rgb(0 108 255)",
                        fontWeight: "bold",
                        paddingBottom: "20px",
                      }}
                    >
                      LEAGUE OPERATIONS
                    </h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 mb-3">
                    <div className="outer-layer abtCir">
                      <img
                        src="https://my.ispl-t10.com/assets/img/deepak_chauhan.png"
                        alt="MR. DIPAK CHAUHAN"
                        loading="lazy"
                        className="card-img-top card-image"
                      />
                    </div>
                  </div>
                  <div className="col-md-9">
                    <h1
                      style={{
                        fontSize: "2.4rem",
                        color: "#fff",
                        fontWeight: "bold",
                      }}
                    >
                      MR. DIPAK CHAUHAN
                    </h1>
                    <p
                      className="my-3 text-light"
                      style={{ textAlign: "justify" }}
                    >
                      Dipak Chauhan, the visionary President of Operations at
                      ISPL. With a proven track record in executing and managing
                      multiple leagues in tennis cricket, Dipak has been at the
                      forefront of promoting talent from the field of tennis
                      cricket, always focused on elevating the sport and giving
                      aspiring players a platform to shine. As a dedicated
                      leader, Dipak is committed to fostering a professional and
                      inclusive platform for budding cricketers. His hands-on
                      approach and unwavering focus on operational excellence
                      have been key to shaping the league’s success.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="container"
                style={{
                  borderBottom: "1px solid rgb(255, 255, 255)",
                  paddingBottom: "1.5vw",
                }}
              >
                <div className="row mb-3">
                  <div className="col-md-3 mt-5 mb-2"></div>
                  <div className="col-md-9">
                    <h1
                      style={{
                        fontSize: "3.4rem",
                        marginTop: "2.4rem",
                        color: "rgb(0 108 255)",
                        fontWeight: "bold",
                        paddingBottom: "20px",
                      }}
                    >
                      HEAD OF SELECTION COMMITTEE
                    </h1>
                  </div>
                </div>
                <div className="row pb-5">
                  <div className="col-md-3 mt-5 mb-2">
                    <div
                      className="outer-layer abtCir"
                      style={{ marginTop: "-50px" }}
                    >
                      <img
                        src="https://my.ispl-t10.com/assets/img/pravin_amre.jpeg"
                        alt="Mentor-img"
                        loading="lazy"
                        className="card-img-top card-image"
                      />
                    </div>
                  </div>
                  <div className="col-md-9">
                    <h1
                      style={{
                        fontSize: "2.4rem",
                        color: "#fff",
                        fontWeight: "bold",
                      }}
                    >
                      MR. PRAVIN AMRE
                    </h1>
                    <p
                      className="my-3 text-light"
                      style={{ textAlign: "justify" }}
                    >
                      Pravin Kalyan Amre is a former Indian cricketer who left
                      an indelible mark on the cricketing world during his
                      playing years from 1991 to 1999. In his international
                      career, Amre showcased his prowess in 11 Test matches and
                      37 One Day Internationals (ODIs). Known for his
                      contributions both as a player and a coach. he was
                      appointed as the assistant coach of the Delhi Capitals,
                      further solidifying his presence in the coaching realm.
                    </p>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-md-3 mt-5 mb-2">
                    <div
                      className="outer-layer abtCir"
                      style={{ marginTop: "-50px" }}
                    >
                      <img
                        src="https://my.ispl-t10.com/assets/img/jatin_paranjape.jpeg"
                        alt="Mentor-img"
                        loading="lazy"
                        className="card-img-top card-image"
                      />
                    </div>
                  </div>
                  <div className="col-md-9">
                    <h1
                      style={{
                        fontSize: "2.4rem",
                        marginTop: "2.4rem",
                        color: "#fff",
                        fontWeight: "bold",
                      }}
                    >
                      MR. JATIN PARANJAPE
                    </h1>
                    <p
                      className="my-3 text-light"
                      style={{ textAlign: "justify" }}
                    >
                      Jatin Paranjpe, Known for his attractive middle-order
                      batting, Paranjpe briefly showcased his cricketing prowess
                      during his playing days. In his current role, Jatin
                      Paranjpe serves as the CEO and Founder of Khelo More,
                      India's sports learning and participation app.
                      Additionally, he holds the esteemed position of being a
                      member of the BCCI Cricket Advisory Committee,
                      contributing to the strategic development and guidance of
                      Indian cricket.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="container text-center"
                style={{ paddingBottom: "20px" }}
              >
                <h1
                  style={{
                    fontSize: "3.4rem",
                    marginTop: "2.4rem",
                    color: "rgb(0 108 255)",
                    fontWeight: "bold",
                    paddingBottom: "20px",
                  }}
                >
                  ABOUT CCS SPORTS LLP
                </h1>
                <div className="row">
                  <div className="col-md-9">
                    <p
                      className="my-3 text-light"
                      style={{ textAlign: "justify" }}
                    >
                      CCS Sports LLP is a pioneering sports management company
                      committed to bringing innovative and inclusive sporting
                      experiences to enthusiasts across the nation. The Indian
                      Street Premier League is a testament to CCS Sports LLP’s
                      dedication to nurturing grassroots talent and providing a
                      platform for aspiring cricketers to shine.
                    </p>
                  </div>
                  <div className="col-md-3">
                    <div className="outer-layer">
                      <img
                        src="https://my.ispl-t10.com/assets/img/ccs_logo.png"
                        alt="ccsLogo"
                        className="card-img-top card-image float-right"
                        style={{ marginTop: "-3.4rem", width: "19vw" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
