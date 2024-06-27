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
                      src="https://www.ispl-t10.com/assets/img/stadium1.jpg"
                      alt="pic"
                    />
                  </figure>
                  <figure className="small-img">
                    <img
                      src="https://www.ispl-t10.com/assets/img/gully2.webp"
                      alt="pic"
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
                  src="https://www.ispl-t10.com/assets/img/stadium1.jpg"
                  alt="bg"
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
                  src="https://www.ispl-t10.com/assets/img/gully cricket.jpg"
                  alt="bg"
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
                  borderBottom: "1px solid rgb(255, 255, 255)",
                  paddingBottom: "1.5vw",
                }}
              >
                <div className="row mb-3">
                  <div className="col-md-3 mt-5 mb-2"></div>
                  <div className="col-md-9">
                    <h1
                      style={{
                        fontSize: "3vw",
                        marginTop: "2vw",
                        color: "rgb(0 108 255)",
                        fontWeight: "bold",
                      }}
                    >
                      OUR CORE COMMITTEE
                    </h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 mt-5 mb-2">
                    <div className="outer-layer rounded-circle">
                      <img
                        src="https://www.ispl-t10.com/assets/img/Aashish_mentor.jpg"
                        alt="Mentor-img"
                        className="card-img-top rounded-circle card-image"
                      />
                    </div>
                  </div>
                  <div className="col-md-9">
                    <h1
                      style={{
                        fontSize: "2vw",
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
                      A prominent Indian politician and cricket administrator
                      affiliated with the Bharatiya Janata Party (BJP),
                      currently serves as the Treasurer of the Board of Control
                      for Cricket in India (BCCI). In addition to his role in
                      cricket administration, Shelar has been a Maharashtra
                      Legislative Assembly member representing Vandre West since
                      2014. He is also the President of the Mumbai unit of the
                      BJP and was elected Vice President of the Mumbai Cricket
                      Association on June 17, 2015. Shelar is an alumnus of
                      Parle College, graduating with a Bachelor of Science
                      (B.Sc.) degree in 1992. He furthered his education by
                      completing a three-year law degree at G. J. Advani Law
                      College, University of Mumbai. With a multifaceted
                      background, Ashish Shelar stands as a dynamic and
                      influential personality in Indian politics and cricket.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 mt-5 mb-2">
                    <div className="outer-layer rounded-circle">
                      <img
                        src="https://www.ispl-t10.com/assets/img/Amol_mentor.jpg"
                        alt="Mentor-img"
                        className="card-img-top rounded-circle card-image"
                      />
                    </div>
                  </div>
                  <div className="col-md-9">
                    <h1
                      style={{
                        fontSize: "2vw",
                        marginTop: "2vw",
                        color: "#fff",
                        fontWeight: "bold",
                      }}
                    >
                      MR. AMOL KALE
                    </h1>
                    <p
                      className="my-3 text-light"
                      style={{ textAlign: "justify" }}
                    >
                      The current President of the Mumbai Cricket Association
                      for the term 2022-2025, holds a concurrent role as a
                      full-time member of the Board of Control for Cricket in
                      India (BCCI). As a successful first-generation business
                      owner, entrepreneur, industrialist, and angel investor,
                      Amol Kale boasts over 15 years of experience in driving
                      growth across diverse industries. His vision is rooted in
                      creating new opportunities, leading initiatives in the
                      service business sectors domestically and internationally.
                      With a keen focus on people development, emerging
                      technologies, innovative business processes, and strategic
                      approaches, Kale has been instrumental in advancing
                      overseas business ventures and India entry services. Amol
                      Kale is a qualified engineer, having earned his Bachelor
                      of Engineering (BE) degree in Electrical Engineering in
                      1997 from Nagpur University. His dynamic leadership and
                      diverse expertise position him as a forward-thinking and
                      influential figure in both the cricketing and business
                      realms.
                    </p>
                  </div>
                </div>
              </div>

              <div className="container">
                <div className="row mb-3 mt-4">
                  <div className="col-md-3 mt-5 mb-2"></div>
                  <div className="col-md-9">
                    <h1
                      style={{
                        fontSize: "3vw",
                        color: "rgb(0 108 255)",
                        fontWeight: "bold",
                        paddingBottom: "20px",
                      }}
                    >
                      OUR CHIEF MENTOR
                    </h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 mt-3 mb-3">
                    <div
                      className="outer-layer rounded-circle"
                      style={{ marginTop: "-50px" }}
                    >
                      <img
                        src="https://www.ispl-t10.com/assets/img/Ravi_mentor.jpg"
                        alt="Mentor-img"
                        className="card-img-top rounded-circle card-image"
                      />
                    </div>
                  </div>
                  <div className="col-md-9">
                    <h1
                      style={{
                        fontSize: "2vw",
                        color: "#fff",
                        fontWeight: "bold",
                      }}
                    >
                      MR. RAVI SHASTRI
                    </h1>
                    <p
                      className="my-3 text-light"
                      style={{ textAlign: "justify" }}
                    >
                      Onboarded legendary Mr. Ravi Shastri to our team marks a
                      significant milestone in our journey. As we embark on this
                      exciting collaboration, his vast experience, unparalleled
                      expertise, and charismatic persona will undoubtedly enrich
                      our endeavors. Together, we look forward to achieving new
                      heights, leveraging Mr. Shastri's invaluable contributions
                      for an impactful and successful journey ahead.
                    </p>
                  </div>
                </div>
              </div>

              <div className="container">
                <div className="row mb-3">
                  <div className="col-md-3 mt-5 mb-2"></div>
                  <div className="col-md-9">
                    <h1
                      style={{
                        fontSize: "3vw",
                        color: "rgb(0 108 255)",
                        fontWeight: "bold",
                      }}
                    >
                      OUR LEAGUE COMMISSIONER
                    </h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 mt-3 mb-3">
                    <br />
                    <br />
                    <br />
                    <div className="outer-layer rounded-circle">
                      <img
                        src="https://www.ispl-t10.com/assets/img/suraj sawant.jpeg"
                        alt="Mentor-img"
                        className="card-img-top rounded-circle card-image"
                      />
                    </div>
                  </div>
                  <div className="col-md-9">
                    <h1
                      style={{
                        fontSize: "2vw",
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
                      A respected business leader, Suraj Samat has extensive
                      experience in sports management and administration. He has
                      been a Trustee of the Mumbai Cricket Association for over
                      14 years and has been serving as a governing council
                      member since 2019. He is also an Apex Council Member of
                      the Mumbai Cricket Association. He recently assumed charge
                      as the League Commissioner of the India Street Premier
                      League. He is also CEO and Managing Committee member of
                      District Sports Club, BKC. A talented table-tennis player,
                      he has won several interclub league titles and has
                      represented Maharashtra at the national level. His
                      experience as a sportsman gives him insights into the
                      needs and challenges faced by sportspersons. His
                      understanding of sports has helped him to be more
                      empathetic in making policies and driving development
                      initiatives. Suraj believes in fostering an inclusive and
                      supportive environment that enhances the sports experience
                      for all stakeholders. His experience as a corporate leader
                      includes leadership positions in companies such as Patel
                      Engineering Ltd. He is currently the Managing Director at
                      the Oscorp Group of Companies and Proctech Solutions Pvt
                      Ltd. He also has a stake in CCS Sports LLP. He is
                      committed to make a difference to society and is a trustee
                      of the Manav Aastha Foundation since 2008, organizing
                      various community health and welfare programs.
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
                        fontSize: "3vw",
                        marginTop: "2vw",
                        color: "rgb(0 108 255)",
                        fontWeight: "bold",
                        paddingBottom: "20px",
                      }}
                    >
                      HEAD OF SELECTION COMMITTEE
                    </h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 mt-5 mb-2">
                    <div
                      className="outer-layer rounded-circle"
                      style={{ marginTop: "-50px" }}
                    >
                      <img
                        src="https://www.ispl-t10.com/assets/img/pravin_amre.png"
                        alt="Mentor-img"
                        className="card-img-top rounded-circle card-image"
                      />
                    </div>
                  </div>
                  <div className="col-md-9">
                    <h1
                      style={{
                        fontSize: "2vw",
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
                <div className="row">
                  <div className="col-md-3 mt-5 mb-2">
                    <div
                      className="outer-layer rounded-circle"
                      style={{ marginTop: "-50px" }}
                    >
                      <img
                        src="https://www.ispl-t10.com/assets/img/jatin_paranjape.png"
                        alt="Mentor-img"
                        className="card-img-top rounded-circle card-image"
                      />
                    </div>
                  </div>
                  <div className="col-md-9">
                    <h1
                      style={{
                        fontSize: "2vw",
                        marginTop: "2vw",
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
                style={{ paddingBottom: "1.5vw" }}
              >
                <h1
                  style={{
                    fontSize: "3vw",
                    marginTop: "2vw",
                    color: "rgb(0 108 255)",
                    fontWeight: "bold",
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
                        src="https://www.ispl-t10.com/assets/img/ccs_logo.png"
                        alt="ccsLogo"
                        className="card-img-top card-image float-right"
                        style={{ marginTop: "-3vw", width: "19vw" }}
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
