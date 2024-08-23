import React from "react";
import "../contactpage/Contact.css"
import SectionTitle from "../../components/common/sectiontitletext/SectionTitle";
import { Helmet } from "react-helmet-async";
import ContactForm from "./ContactForm";
const Contact = () => {
  return (
    <section className="w-100 body-part pt-0"> 
      <Helmet>
        <title>ISPL T10 | Contact Us</title>
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
      <div className="contact-page d-inline-block w-100">
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-2 g-5">
            <div className="col">
              <div className="faq-section1">
                <SectionTitle titleText={"frequently asked questions"}/>
                <p className="mt-3"></p>

                <div className="accordion mt-4" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header mt-0" id="heading0">
                      <button
                        className="accordion-button "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse0"
                        aria-expanded="true"
                        aria-controls="collapse0"
                      >
                        What is the ultimate goal of this league?
                      </button>
                    </h2>
                    <div
                      id="collapse0"
                      className="accordion-collapse collapse show"
                      aria-labelledby="heading0"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Our Primary Objective Is To Empower Street Players By
                          Providing Them With Unique Opportunities.
                          Additionally, We Aim To Advance The Sport Of Tennis
                          Cricket By Organizing It In A Structured Format.
                          Through Widespread Participation On Our Platform, We
                          Strive To Actively Promote Players, Ultimately
                          Securing For Them A Professional Stage To Showcase
                          Their Talent..
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header mt-0" id="heading1">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse1"
                        aria-expanded="false"
                        aria-controls="collapse1"
                      >
                        Will players receive payment from the franchise?
                      </button>
                    </h2>
                    <div
                      id="collapse1"
                      className="accordion-collapse collapse "
                      aria-labelledby="heading1"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          After Successfully Making It Through The Final Trial,
                          The Player's Base Auction Value Commences At A Minimum
                          Of 3 Lakh Rupees With No Capping On Max Limit.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header mt-0" id="heading2">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse2"
                        aria-expanded="false"
                        aria-controls="collapse2"
                      >
                        Will Mr. Pravin Amre &amp; Mr. Jatin Paranjpe, our
                        esteemed coaches, be conducting trials in major cities
                        where street players may find it feasible to participate
                        in the auctions?
                      </button>
                    </h2>
                    <div
                      id="collapse2"
                      className="accordion-collapse collapse "
                      aria-labelledby="heading2"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Mr. Pravin Amre And Mr. Jatin Paranjpe Heads The
                          Selection Committee, Overseeing A Team Of Selectors
                          Responsible For Conducting City Trials.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header mt-0" id="heading3">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse3"
                        aria-expanded="false"
                        aria-controls="collapse3"
                      >
                        Upon being shortlisted, will players receive
                        compensation for their travel expenses to Mumbai for the
                        trials?
                      </button>
                    </h2>
                    <div
                      id="collapse3"
                      className="accordion-collapse collapse "
                      aria-labelledby="heading3"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Upon Being Selected By The Franchise And Officially
                          Onboarded As A Player, All Expenses Will Be Borne By
                          The Franchise Owner. Until That Point, It Is The
                          Individual Player's Responsibility.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header mt-0" id="heading4">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse4"
                        aria-expanded="false"
                        aria-controls="collapse4"
                      >
                        Is there a prize money associated with this league?
                      </button>
                    </h2>
                    <div
                      id="collapse4"
                      className="accordion-collapse collapse "
                      aria-labelledby="heading4"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Yes, The Winning Team Receives A Prize Of 1 Crore,
                          While The Runner Up Is Awarded 50 Lakhs.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header mt-0" id="heading5">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse5"
                        aria-expanded="false"
                        aria-controls="collapse5"
                      >
                        What is the preferred choice for the league: lightweight
                        tennis balls or the heavier Tennis balls?
                      </button>
                    </h2>
                    <div
                      id="collapse5"
                      className="accordion-collapse collapse "
                      aria-labelledby="heading5"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>ISPL Tennis Ball</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="contact-use-div">
              <SectionTitle titleText={"Contact Details"}/>
                <ul className="list-untyled list-phone mt-4">
                  <li>
                    <span className="d-block"> E-MAIL </span>
                    <span className="text-light">
                      {" "}
                      <i className="fas fa-envelope"></i> isplt10@ccssports.in
                    </span>
                  </li>
                  <li>
                    <span className="d-block"> PHONE </span>
                    <span className="text-light">
                      {" "}
                      <i className="fas fa-phone-alt"></i> +91 02269587007
                    </span>
                  </li>
                </ul>
                <SectionTitle titleText={"Get in touch"}/>
                <ContactForm/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
