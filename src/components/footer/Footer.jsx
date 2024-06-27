import React from "react";
import "../footer/footer.css";
import { Link } from "react-router-dom";
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
                      <li>
                        <Link to="">Media</Link>
                      </li>
                      <li>
                        <Link to="">Careers</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="fooSecTitle">
                    <h6>ISPL Guidelines</h6>
                    <ul>
                      <li>
                        <Link to="">Code of Conduct in Team Dougouts</Link>
                      </li>
                      <li>
                        <Link to="">Ispl Commercial Guidelines</Link>
                      </li>
                      <li>
                        <Link to="">Cricket Rulebook</Link>
                      </li>
                      <li>
                        <Link to="">Cricket PMOA Guideline</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-12">
                  <div className="fooSecTitle">
                    <h6>Contact</h6>
                    <ul>
                      <li>
                        <Link to="">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="">Sponsorship</Link>
                      </li>
                      <li>
                        <Link to="">Privacy & Policy</Link>
                      </li>
                      <li>
                        <Link to="">FAQ</Link>
                      </li>
                      <li>
                        <ul>
                          <li>
                            <Link to="">
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="21"
                                  height="21"
                                  viewBox="0 0 21 21"
                                  fill="none"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M8.7956 10.5426V15.6791C8.7956 15.752 8.85236 15.8136 8.92534 15.8136H10.7661C10.8364 15.8136 10.8958 15.7548 10.8958 15.6791V10.4585H12.2311C12.2987 10.4585 12.3528 10.4053 12.3609 10.3352L12.4879 8.76316C12.4933 8.6847 12.4339 8.61744 12.3582 8.61744H10.8958V7.50215C10.8958 7.24154 11.1013 7.02857 11.3527 7.02857H12.3798C12.4501 7.02857 12.5095 6.96973 12.5095 6.89406V5.32201C12.5095 5.24915 12.4528 5.1875 12.3798 5.1875H10.6418C9.62272 5.1875 8.7956 6.04499 8.7956 7.10143V8.61744H7.87657C7.80629 8.61744 7.74683 8.67629 7.74683 8.75195V10.324C7.74683 10.3969 7.80359 10.4585 7.87657 10.4585H8.7956V10.5426Z"
                                    fill="#D9D9D9"
                                  />
                                  <path
                                    d="M10.1282 0C4.54377 0 0 4.71057 0 10.5C0 16.2894 4.54377 21 10.1282 21C15.7126 21 20.2564 16.2894 20.2564 10.5C20.2564 4.71057 15.7126 0 10.1282 0ZM18.9563 10.5C18.9563 15.5468 14.9963 19.6521 10.1282 19.6521C5.26007 19.6521 1.29745 15.5468 1.29745 10.5C1.29745 5.45316 5.25737 1.34508 10.1255 1.34508C14.9963 1.34788 18.9563 5.45316 18.9563 10.5Z"
                                    fill="#D9D9D9"
                                  />
                                </svg>
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link to="">
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="21"
                                  height="21"
                                  viewBox="0 0 21 21"
                                  fill="none"
                                >
                                  <path
                                    d="M10.1282 0C4.54377 0 0 4.71057 0 10.5C0 16.2894 4.54377 21 10.1282 21C15.7126 21 20.2564 16.2894 20.2564 10.5C20.2564 4.71057 15.7126 0 10.1282 0ZM10.1282 19.6549C5.26007 19.6549 1.29745 15.5496 1.29745 10.5028C1.29745 5.45596 5.25737 1.34788 10.1282 1.34788C14.999 1.34788 18.959 5.45316 18.959 10.5028C18.959 15.5468 14.9963 19.6549 10.1282 19.6549Z"
                                    fill="#D9D9D9"
                                  />
                                  <path
                                    d="M13.2554 6.2998H14.6538L11.5994 9.85766L15.1924 14.6998H12.3799L10.1755 11.7638L7.65589 14.6998H6.25516L9.5215 10.8934L6.07703 6.2998H8.96091L10.9515 8.98339L13.2554 6.2998ZM12.7643 13.8476H13.5387L8.53894 7.10747H7.70716L12.7643 13.8476Z"
                                    fill="#D9D9D9"
                                  />
                                </svg>
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link to="">
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="22"
                                  height="21"
                                  viewBox="0 0 22 21"
                                  fill="none"
                                >
                                  <path
                                    d="M6.48581 7.80733H8.42388V14.2581H6.48581V7.80733ZM7.45349 4.60156C8.07248 4.60156 8.57525 5.12278 8.57525 5.7645C8.57525 6.40621 8.07248 6.92742 7.45349 6.92742C6.8318 6.92742 6.33174 6.40621 6.33174 5.7645C6.33174 5.12278 6.8318 4.60156 7.45349 4.60156ZM9.63753 14.2609H11.5702V11.0691C11.5702 10.2285 11.7243 9.41301 12.7298 9.41301C13.7218 9.41301 13.7353 10.3742 13.7353 11.1252V14.2609H15.668V10.7217C15.668 8.98427 15.3058 7.6476 13.3488 7.6476C12.4054 7.6476 11.7756 8.18283 11.5161 8.69004H11.4918V7.80733H9.63483V14.2609H9.63753Z"
                                    fill="#D9D9D9"
                                  />
                                  <path
                                    d="M11 0C5.41557 0 0.871796 4.71057 0.871796 10.5C0.871796 16.2894 5.41557 21 11 21C16.5844 21 21.1282 16.2894 21.1282 10.5C21.1282 4.71057 16.5844 0 11 0ZM11 19.6549C6.13187 19.6549 2.17195 15.5496 2.17195 10.5C2.17195 5.45316 6.13187 1.34788 11 1.34788C15.8681 1.34788 19.8281 5.45316 19.8281 10.5C19.8281 15.5496 15.8681 19.6549 11 19.6549Z"
                                    fill="#D9D9D9"
                                  />
                                </svg>
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link to="">
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="21"
                                  height="21"
                                  viewBox="0 0 21 21"
                                  fill="none"
                                >
                                  <path
                                    d="M15.8474 9.11602C15.8474 7.76254 14.7878 6.66406 13.4822 6.66406H7.39232C6.08676 6.66406 5.02718 7.76254 5.02718 9.11602V11.8846C5.02718 13.2381 6.08676 14.3366 7.39232 14.3366H13.4822C14.7878 14.3366 15.8474 13.2381 15.8474 11.8846V9.11602ZM12.4983 10.5732L9.77638 11.9659C9.67096 12.0247 9.29794 11.9463 9.29794 11.8202V8.9647C9.29794 8.8386 9.67366 8.75734 9.77908 8.82179L12.3821 10.2874C12.4902 10.349 12.6091 10.5115 12.4983 10.5732Z"
                                    fill="#D9D9D9"
                                  />
                                  <path
                                    d="M10.4359 0C4.85147 0 0.307693 4.71057 0.307693 10.5C0.307693 16.2894 4.85147 21 10.4359 21C16.0203 21 20.5641 16.2894 20.5641 10.5C20.5641 4.71057 16.0203 0 10.4359 0ZM10.4359 19.6549C5.56776 19.6549 1.60514 15.5496 1.60514 10.5028C1.60514 5.45596 5.56506 1.35068 10.4359 1.35068C15.3067 1.35068 19.264 5.45596 19.264 10.5028C19.2667 15.5468 15.304 19.6549 10.4359 19.6549Z"
                                    fill="#D9D9D9"
                                  />
                                </svg>
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link to="">
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="21"
                                  height="21"
                                  viewBox="0 0 21 21"
                                  fill="none"
                                >
                                  <path
                                    d="M14.2479 7.6049C14.2479 7.95238 13.9776 8.2326 13.6424 8.2326C13.3072 8.2326 13.0369 7.95238 13.0369 7.6049C13.0369 7.25742 13.3099 6.9772 13.6424 6.9772C13.9776 6.9772 14.2479 7.25742 14.2479 7.6049ZM13.4938 10.424C13.4938 11.8811 12.3504 13.0665 10.9448 13.0665C9.53923 13.0665 8.39586 11.8811 8.39586 10.424C8.39586 8.96679 9.53923 7.78144 10.9448 7.78144C12.3504 7.78144 13.4938 8.96679 13.4938 10.424ZM12.5774 10.424C12.5774 9.49081 11.8449 8.7314 10.9448 8.7314C10.0447 8.7314 9.31218 9.49081 9.31218 10.424C9.31218 11.3571 10.0447 12.1165 10.9448 12.1165C11.8449 12.1165 12.5774 11.3571 12.5774 10.424ZM16.1022 8.30266C16.1022 6.52323 14.7101 5.08008 12.9937 5.08008H8.75266C7.03624 5.08008 5.64419 6.52323 5.64419 8.30266V12.6994C5.64419 14.4788 7.03624 15.9219 8.75266 15.9219H12.9937C14.7101 15.9219 16.1022 14.4788 16.1022 12.6994V8.30266ZM15.0831 12.6517C15.0831 13.8735 14.1263 14.8655 12.9477 14.8655H8.7986C7.62009 14.8655 6.66322 13.8735 6.66322 12.6517V8.35029C6.66322 7.12852 7.62009 6.13652 8.7986 6.13652H12.9477C14.1263 6.13652 15.0831 7.12852 15.0831 8.35029V12.6517Z"
                                    fill="#D9D9D9"
                                  />
                                  <path
                                    d="M10.8718 0C5.28736 0 0.743591 4.71057 0.743591 10.5C0.743591 16.2894 5.28736 21 10.8718 21C16.4562 21 21 16.2894 21 10.5C21 4.71057 16.4562 0 10.8718 0ZM10.8718 19.6549C6.00366 19.6549 2.04374 15.5496 2.04374 10.5028C2.04374 5.45596 6.00366 1.35068 10.8718 1.35068C15.7399 1.35068 19.7025 5.45596 19.7025 10.5028C19.7025 15.5496 15.7426 19.6549 10.8718 19.6549Z"
                                    fill="#D9D9D9"
                                  />
                                </svg>
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
                    <p>All Rights Reserved -  CCS Sports LLP</p>
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
