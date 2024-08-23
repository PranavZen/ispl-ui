import React from "react";
import "../footer/footer.css";
import { Link } from "react-router-dom";
import { fb, insta, linkdin, yt } from "../../assets/imagePath";
function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <div className="row ">
            <div className="col-lg-10 col-md-12 mx-auto">
              <div className="row mobGapGrid">
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="fooSecTitle">
                    <h6>Teams</h6>
                    <ul>
                      <li>
                        <Link to="/team-list/majhi-mumbai">Majhi Mumbai</Link>
                      </li>
                      <li>
                        <Link to="/team-list/chennai-singams">
                          Chennai Singams
                        </Link>
                      </li>
                      <li>
                        <Link to="/team-list/tiigers-of-kolkata">
                          Tiigers of Kolkata
                        </Link>
                      </li>
                      <li>
                        <Link to="/team-list/srinagar-ke-veer">
                          Srinagar Ke Veer
                        </Link>
                      </li>
                      <li>
                        <Link to="/team-list/kvn-bangalore-strikers">
                          KVN Bangalore Strikers
                        </Link>
                      </li>
                      <li>
                        <Link to="/team-list/falcon-risers-hyderabad">
                          Falcon Risers Hyderabad
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="fooSecTitle">
                    <h6>ISPL - T10</h6>
                    <ul>
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li>
                        <Link to="/matches">Match Center</Link>
                      </li>
                      <li>
                        <Link to="/video/All">Videos</Link>
                      </li>
                      <li>
                        <Link to="/news/all-news">News & Events</Link>
                      </li>
                    </ul>
                    <div className="storeLinksWrap mt-4">
                      <Link
                        to="https://apps.apple.com/in/app/ispl/id6504962220"
                        target="_blank"
                      >
                        <img
                          src="ios-app.svg"
                          alt="ios app store"
                         
                        />
                      </Link>
                      <Link
                        to="https://play.google.com/store/apps/details?id=com.cricclubs.isplt10&pcampaignid=web_share"
                        target="_blank"
                      >
                        <img
                          src="google-store.png"
                          alt="ios app store"
                          
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="fooSecTitle">
                    <h6>ISPL Guidelines</h6>
                    <ul>
                      <li>
                        <Link
                          to="https://my.ispl-t10.com/assets/pdf/Dugout%20Rules%20ISPL.pdf"
                          target="_blank"
                        >
                          Code of Conduct in Team Dougouts
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="https://my.ispl-t10.com/assets/pdf/ISPL%20Commercial%20Guidelines.pdf"
                          target="_blank"
                        >
                          Ispl Commercial Guidelines
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="https://my.ispl-t10.com/assets/pdf/ISPL%20CRICKETING%20RULEBOOK%202024.pdf"
                          target="_blank"
                        >
                          Cricket Rulebook
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="https://my.ispl-t10.com/assets/pdf/ISPL%20PMOA%20Guidelines.pdf"
                          target="_blank"
                        >
                          Cricket PMOA Guideline
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-12">
                  <div className="fooSecTitle">
                    <h6>Contact</h6>
                    <ul>
                      <li>
                        <Link to="/contact-us">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="/privacy-policy">Privacy & Policy</Link>
                      </li>
                      <li>
                        <Link to="/terms-condition">Terms & Condition</Link>
                      </li>
                      <li>
                        <ul>
                          <li>
                            <Link
                              to="https://www.facebook.com/profile.php?id=61553035197650&amp;is_tour_completed=true"
                              target="_blank"
                            >
                              <span>
                                <img src={fb} alt="facebook" />
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="https://www.linkedin.com/company/indian-stree-premier-league/"
                              target="_blank"
                            >
                              <span>
                                <img src={linkdin} alt="linkedin" />
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="https://youtube.com/@indianstreetpremierleague_t10?si=WT5kwHmRjQ_MQpO5"
                              target="_blank"
                            >
                              <span>
                                <img src={yt} alt="youtube" />
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="https://instagram.com/ispl_t10?igshid=OGQ5ZDc2ODk2ZA=="
                              target="_blank"
                            >
                              <span>
                                <img src={insta} alt="instagram" />
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <section className="copyWriteSection">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-md-12 mx-auto">
              <div className="row fooSpace">
                <div className="col-lg-5 col-md-6 col-12">
                  <div className="Box left">
                    <p>© ISPL-T10 2024</p>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 col-12">
                  <div className="Box right">
                    <p>All Rights Reserved - CCS Sports LLP</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
